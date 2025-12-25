import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const BookDemo = () => {
    const [form, setForm] = useState({ name: "", tel: "", email: "" });
    const [page, setPage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [success, setSuccess] = useState(false);

    // ✅ Client-only
    useEffect(() => {
        if (typeof window !== "undefined") {
            setPage(window.location.pathname);
        }
    }, []);

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
                        .execute(RECAPTCHA_SITE_KEY, { action: "lid_collector" })
                        .then(resolve)
                        .catch(reject);
                });
            });

            const payload = {
                name: form.name,
                tel: form.tel,
                email: form.email,
                form_id: "perezvonite",
                page,
                token,
            };

            const res = await fetch("/api/add-lid", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await res.json();

            if (!result?.success) {
                setErrorText(
                    result?.error
                        ? `Исправьте ошибки: ${result.error}`
                        : "Please fix the errors!"
                );
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
        <section className="bookdemo">
            <Container>
                <h2 className="bookdemo__title">Call me back</h2>

                {!success && (
                    <form id="lid-collector-5" onSubmit={onSubmit}>
                        <Row className="bookdemo__row g-3 align-items-center">
                            <Col md="3" sm="6" xs="12">
                                <input
                                    className="bookdemo__input"
                                    name="cf-name"
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={onChange}
                                    required
                                />
                            </Col>

                            <Col md="3" sm="6" xs="12">
                                <input
                                    className="bookdemo__input"
                                    name="cf-tel"
                                    placeholder="Mobile"
                                    value={form.tel}
                                    onChange={onChange}
                                    required
                                />
                            </Col>

                            <Col md="3" sm="6" xs="12">
                                <input
                                    type="email"
                                    className="bookdemo__input"
                                    name="cf-email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={onChange}
                                    required
                                />
                            </Col>

                            <Col md="3" sm="6" xs="12">
                                <button className="bookdemo__button" type="submit" disabled={submitting}>
                                    {submitting ? "Sending…" : "Call me back"}
                                </button>
                            </Col>

                            {errorText && (
                                <Col md="12" id="lid-collector-5-error">
                                    <span>{errorText}</span>
                                </Col>
                            )}
                            <Col md="12">
                                <div className="bookdemo__hint">
                                    *By submitting, I agree to the{" "}
                                    <a href="https://slonig.org/privacy-policy">privacy policy</a>
                                </div>
                            </Col>
                        </Row>
                    </form>
                )}

                {success && (
                    <div id="section-lid-collector-5-success">
                        ✅ Thanks! We’ll call you back.
                    </div>
                )}
            </Container>
        </section>
    );
};

export default BookDemo;