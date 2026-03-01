import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";

type Props = {
  className?: string;

  email?: string;
  phone?: string;

  companyName?: string;
  addressLine1?: string;
  addressLine2?: string;

  linkedinUrl?: string;
  threadsUrl?: string;
  instagramUrl?: string;
};

function SocialButton({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 shadow-sm transition hover:-translate-y-[1px] hover:bg-white/15 hover:shadow md:h-12 md:w-12"
    >
      {children}
    </a>
  );
}

function ThreadsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      width="22"
      height="22"
      aria-hidden="true"
    >
      <path
        d="M12 3c4.8 0 8 2.8 8.7 7.3.1.7-.4 1.3-1.1 1.4-.7.1-1.3-.4-1.4-1.1C17.7 7.4 15.6 5.5 12 5.5c-3.8 0-6.4 2.2-6.4 6.4 0 4.1 2.3 6.6 6.2 6.6 2.8 0 4.8-1.3 5.6-3.3h-3.3c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2H19c.7 0 1.2.6 1.2 1.2 0 4.7-3.4 7-8.2 7-5.4 0-8.7-3.5-8.7-9.1C3.3 6.8 7 3 12 3Z"
        fill="currentColor"
      />
      <path
        d="M12.2 9.2c2.9 0 5 1.2 5.6 3.4.2.6-.2 1.3-.9 1.5-.6.2-1.3-.2-1.5-.9-.3-1.1-1.4-1.7-3.2-1.7-1.9 0-3 .8-3 2 0 1.4 1.4 1.9 3.2 1.9h.5c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2h-.6c-2.9 0-5.6-1.1-5.6-4.3 0-2.6 2.2-4.4 5.5-4.4Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

export default function Footer({
  className = "",
  email = "info@slonig.org",
  phone = "+1 302-310-4501",
  companyName = "Slonig, Inc.",
  addressLine1 = "1111B S Governors Ave STE 48458",
  addressLine2 = "Dover, DE 19904, USA",
  linkedinUrl = "#",
  threadsUrl = "#",
  instagramUrl = "#",
}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`w-full ${className}`}
      style={{ background: "var(--primary-color, #f19135)" }}
    >
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-12">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Left */}
          <div>
            {/* named-logo.svg (forced to white) */}
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/named-logo.svg"
                alt="Slonig"
                width={160}
                height={46}
                priority
                className="h-12 w-auto"
                style={{
                  // makes a dark SVG appear white
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Link>

            <div className="mt-10 space-y-3 leading-snug text-white md:mt-12">
              <div className="font-medium">© {year} Slonig. All rights reserved</div>
              <div>
                {companyName}, {addressLine1} {addressLine2}
              </div>
            </div>
          </div>

          {/* Middle */}
          <div className="md:justify-self-center">
            <div className="text-lg font-semibold text-white">Get Started</div>

            <nav className="mt-5">
              <ul className="space-y-3 leading-snug text-white">
                <li>
                  <Link className="hover:underline" href="/request-demo">
                    Request a demo
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/evidence">
                    See the evidence
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/privacy">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/privacy-students">
                    Privacy policy for students
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/terms">
                    Terms of service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right */}
          <div className="md:justify-self-end">
            <div className="text-lg font-semibold text-white">Contact us</div>

            <div className="mt-5 space-y-2 leading-snug text-white">
              <div>
                Email:{" "}
                <a className="hover:underline" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
              <div>
                Phone:{" "}
                <a className="hover:underline" href={`tel:${phone.replace(/\s+/g, "")}`}>
                  {phone}
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 text-white">
              <SocialButton href={linkedinUrl} label="LinkedIn">
                <Linkedin className="h-6 w-6 text-white" />
              </SocialButton>

              <SocialButton href={threadsUrl} label="Threads">
                <ThreadsIcon className="h-6 w-6 text-white" />
              </SocialButton>

              <SocialButton href={instagramUrl} label="Instagram">
                <Instagram className="h-6 w-6 text-white" />
              </SocialButton>
            </div>
          </div>
        </div>

        {/* Bottom legal line */}
        <div className="mt-16 text-center leading-relaxed text-white/80">
          Use of this website constitutes acceptance of the{" "}
          <Link className="text-white underline-offset-2 hover:underline" href="/privacy">
            Privacy Policy
          </Link>
          ,{" "}
          <Link className="text-white underline-offset-2 hover:underline" href="/privacy-students">
            Privacy Policy for Students
          </Link>
          , and{" "}
          <Link className="text-white underline-offset-2 hover:underline" href="/terms">
            Terms of Service
          </Link>
          . <span className="text-white">Slonig</span> complies with the Children&apos;s Online
          Privacy Protection Act (COPPA), the Family Educational Rights and Privacy Act (FERPA), and
          the California Education Code including the Student Online Personal Information Protection
          Act (SOPIPA) and AB1584.
        </div>
      </div>
    </footer>
  );
}