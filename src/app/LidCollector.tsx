"use client";

import React, { useEffect, useState } from "react";
import {
    User,
    Phone,
    Mail,
    Loader2,
    AlertCircle,
    CheckCircle2,
} from "lucide-react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

type Props = {
    id: string;
    caption: string;
};

export default function LidCollector({ id, caption }: Props) {
    const [form, setForm] = useState({ name: "", tel: "", email: "" });
    const [page, setPage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [success, setSuccess] = useState(false);

    // ✅ Client-only
    useEffect(() => {
        if (typeof window !== "undefined") setPage(window.location.pathname);
    }, []);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "cf-name") setForm((s) => ({ ...s, name: value }));
        if (name === "cf-tel") setForm((s) => ({ ...s, tel: value }));
        if (name === "cf-email") setForm((s) => ({ ...s, email: value }));
    };

    const preventEnterSubmit = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === "Enter") e.preventDefault();
    };

    const onSubmit = async (event: React.FormEvent) => {
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
            if (typeof window === "undefined" || !(window as any).grecaptcha) {
                setErrorText("reCAPTCHA not ready. Please refresh the page.");
                return;
            }

            if (!RECAPTCHA_SITE_KEY) {
                setErrorText("Missing reCAPTCHA site key.");
                return;
            }

            const grecaptcha = (window as any).grecaptcha;

            const token: string = await new Promise((resolve, reject) => {
                grecaptcha.ready(() => {
                    grecaptcha
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
                        ? `Please fix the errors: ${result.error}`
                        : "Please fix the errors!"
                );
                return;
            }

            setSuccess(true);
        } catch {
            setErrorText("Please fix the errors!");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="relative w-full text-slate-900 mt-10">
            <div className="mx-auto w-full max-w-6xl px-6">

                <div className="relative w-full overflow-visible rounded-3xl bg-[var(--secondary-color)] px-6 py-10 md:px-12 md:py-12">


                    <h2 className="text-center !text-white">{caption}</h2>

                    {!success && (
                        <form id={id} onSubmit={onSubmit} onKeyDown={preventEnterSubmit}>
                            <div className="lidcollector__row">
                                <div className="lidcollector__col">
                                    <div className="lidcollector__field">
                                        <User className="lidcollector__icon" aria-hidden="true" />
                                        <input
                                            className="lidcollector__input"
                                            name="cf-name"
                                            placeholder="Name"
                                            value={form.name}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="lidcollector__col">
                                    <div className="lidcollector__field">
                                        <Phone className="lidcollector__icon" aria-hidden="true" />
                                        <input
                                            className="lidcollector__input"
                                            name="cf-tel"
                                            placeholder="Mobile (e.g. +1...)"
                                            value={form.tel}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="lidcollector__col">
                                    <div className="lidcollector__field">
                                        <Mail className="lidcollector__icon" aria-hidden="true" />
                                        <input
                                            type="email"
                                            className="lidcollector__input"
                                            name="cf-email"
                                            placeholder="Email"
                                            value={form.email}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="lidcollector__col">
                                    <button
                                        className="lidcollector__button"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        {submitting ? (
                                            <span className="lidcollector__btncontent">
                                                <Loader2 className="lidcollector__spinner" aria-hidden="true" />
                                                Sending…
                                            </span>
                                        ) : (
                                            caption
                                        )}
                                    </button>
                                </div>

                                {errorText && (
                                    <div className="lidcollector__colFull">
                                        <span className="lidcollector__error">
                                            <AlertCircle className="lidcollector__errorIcon" aria-hidden="true" />
                                            {errorText}
                                        </span>
                                    </div>
                                )}

                                <div className="lidcollector__colFull text-center">
                                    <div className="lidcollector__hint">
                                        *By submitting, I agree to the{" "}
                                        <a href="https://slonig.org/privacy-policy">privacy policy</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}

                    {success && (
                        <div className="lidcollector__success">
                            <h2 className="lidcollector__thanks">
                                <CheckCircle2 className="lidcollector__successIcon" aria-hidden="true" />
                                Thanks! We’ll call you back
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}