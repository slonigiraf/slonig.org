import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Modal, ModalBody } from "reactstrap";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

/**
 * Popup version of LidCollector
 * Opens when URL hash matches "#<id>" (e.g. "/#book-demo" or "/#lid-collector-5")
 *
 * Usage:
 *  <LidCollectorPopup id="lid-collector-5" caption="Send" triggerText="Send request" />
 *  // link anywhere:
 *  <a href="/#lid-collector-5">Send request</a>
 */
const LidCollectorPopup = ({ id, caption = "Send", triggerText = "Send request" }) => {
  const openHash = useMemo(() => `#${id}`, [id]);

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", tel: "", email: "" });
  const [page, setPage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [success, setSuccess] = useState(false);

  // ✅ Client-only: detect page + open by hash
  useEffect(() => {
    if (typeof window === "undefined") return;

    setPage(window.location.pathname);

    const syncFromHash = () => {
      const h = window.location.hash || "";
      setIsOpen(h === openHash);
      // reset success/errors when opening fresh
      if (h === openHash) {
        setErrorText("");
        setSuccess(false);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [openHash]);

  const close = () => {
    setIsOpen(false);

    // remove hash so reopening works and back-button behaves sanely
    if (typeof window !== "undefined" && window.location.hash === openHash) {
      const url = window.location.pathname + window.location.search;
      window.history.replaceState(null, "", url);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "cf-name") setForm((s) => ({ ...s, name: value }));
    if (name === "cf-tel") setForm((s) => ({ ...s, tel: value }));
    if (name === "cf-email") setForm((s) => ({ ...s, email: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");

    if (submitting) return;

    try {
      setSubmitting(true);

      if (!form.name || !form.tel || !form.email) {
        setErrorText("Please fill in all fields.");
        return;
      }

      // ✅ Client-only reCAPTCHA
      if (typeof window === "undefined" || !window.grecaptcha) {
        setErrorText("reCAPTCHA not ready. Please refresh the page.");
        return;
      }

      const token = await new Promise((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(RECAPTCHA_SITE_KEY, { action: id })
            .then(resolve)
            .catch(reject);
        });
      });

      const payload = {
        name: form.name,
        tel: form.tel,
        email: form.email,
        form_id: id,
        page,
        token,
      };

      const res = await fetch("/api/add-lid", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!result?.success) {
        setErrorText(result?.error ? `Please fix the errors: ${result.error}` : "Please fix the errors!");
        return;
      }

      setSuccess(true);
    } catch (err) {
      setErrorText("Please fix the errors!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Optional trigger (you can remove it and use your own <a href="/#id">) */}
      <a className="lidpopup__trigger" href={`/#${id}`}>
        {triggerText}
      </a>

      <Modal
        isOpen={isOpen}
        toggle={close}
        centered
        backdrop
        className="lidpopup__modal"
        contentClassName="lidpopup__content"
      >
        <ModalBody className="lidpopup__body">
          <button type="button" className="lidpopup__close" onClick={close} aria-label="Close">
            ×
          </button>

          <h2 className="lidpopup__title">{caption}</h2>

          {!success ? (
            <form id={id} onSubmit={onSubmit} className="lidpopup__form">
              <input
                className="lidpopup__input"
                name="cf-name"
                placeholder="Name"
                value={form.name}
                onChange={onChange}
                required
              />

              <input
                className="lidpopup__input"
                name="cf-tel"
                placeholder="Mobile (e.g. +7...)"
                value={form.tel}
                onChange={onChange}
                required
              />

              <input
                type="email"
                className="lidpopup__input"
                name="cf-email"
                placeholder="Email"
                value={form.email}
                onChange={onChange}
                required
              />

              <button className="lidpopup__button" type="submit" disabled={submitting}>
                {submitting ? "Sending…" : caption}
              </button>

              {errorText && <div className="lidpopup__error">{errorText}</div>}

              <div className="lidpopup__hint">
                *By submitting, I agree to the{" "}
                <a href="https://slonig.org/privacy-policy" target="_blank" rel="noreferrer">
                  privacy policy
                </a>
              </div>
            </form>
          ) : (
            <div className="lidpopup__success">✅ Thanks! We’ll call you back</div>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default LidCollectorPopup;