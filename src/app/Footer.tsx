import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";
import { APPOINTMENT_URL } from "./RequestDemo";

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
                  <Link className="hover:underline" href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
                    Request a demo
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/evidence">
                    See the evidence
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/privacy-policy">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/privacy-policy-students">
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
                <Image
                  src="/threads.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
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