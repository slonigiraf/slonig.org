import Navbar from "../Navbar";
import Footer from "../Footer";

export default async function App() {
  return (
    <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      {/* Policy content */}
      <section className="mx-auto w-full max-w-4xl pt-24 px-6 text-slate-900 pb-10">
        <h1 className="!text-black">
          Privacy Policy
        </h1>
        {/* ✅ force left alignment for ALL content, including headings */}
        <div className="text-left [&_*]:!text-left">
          {/* ✅ Tailwind-only policy typography overrides */}
          <div
            className={[
              "prose prose-slate mt-10 max-w-none text-left",

              // force all headings black + consistent weight/letter-spacing
              "[&_:is(h1,h2,h3,h4,h5,h6)]:!text-black",
              "[&_:is(h1,h2,h3,h4,h5,h6)]:!tracking-tight",
              "[&_:is(h1,h2,h3)]:!font-extrabold",
              "[&_:is(h4,h5,h6)]:!font-bold",

              // sizes + line heights
              "[&h2]:text-[clamp(24px,2.4vw,34px)] [&h2]:leading-[1.15]",
              "[&h3]:text-[clamp(18px,1.6vw,22px)] [&h3]:leading-[1.2]",
              "[&h4]:text-[16px] [&h4]:leading-[1.25]",

              // spacing rules
              "[&_:is(h2,h3,h4)]:!mb-2",
              "[&_:is(h2,h3,h4)]:!mt-5",

            ].join(" ")}
          >

            <p className="mt-8 text-[clamp(14px,1.1vw,16px)]">
              Date of issue of this Privacy Policy: 03/01/2026
            </p>
            <p className="mt-2 text-[clamp(14px,1.1vw,16px)]">
              Last updated: 03/01/2026
            </p>
            <p className="mt-8">
              At Slonig, Inc., we highly value your privacy and data protection rights. We
              acknowledge the significance of safeguarding the personal data we collect and
              process. This Privacy Policy aims to provide a clear understanding of the
              personal information we collect and how we use it.
            </p>

            <p>
              In this Privacy Policy and the Terms of Service, the term “Slonig” (“Company,”
              “we,” “us,” “our”) refers to all websites (including slonig.org,
              app.slonig.org), applications, their features, and content we offer. The
              services we provide and the information collected are managed by Slonig, Inc.,
              located at 1111B S Governors Ave STE 48458, Dover, DE 19904, USA.
            </p>

            <p>
              <span className="font-extrabold">Student Privacy Policy:</span>{" "}
              In addition to this Privacy Policy, we have created a dedicated Privacy Policy
              for Students that provides additional information specifically about how we
              handle student information. Parents, guardians, and educators are encouraged to
              review both this Privacy Policy and our Privacy Policy for Students to fully
              understand our practices regarding student data protection.
            </p>

            <p>
              By using Slonig, you expressly consent to the practices and policies
              outlined in our Privacy Policy. Please note that your use of our services is
              always subject to our Terms of Service which includes this Privacy Policy.
            </p>

            <h3>1. Purpose and Scope</h3>
            <p>
              This Privacy Policy explains how we process “Personal Information.” Personal
              Information includes information that can identify an individual directly,
              or indirectly when combined with other information.
            </p>
            <p>
              This Privacy Policy applies if you interact with our websites, voluntarily
              share Personal Information with us, or receive communications from us.
              We collect only the Personal Information needed to operate and improve the
              website and (where applicable) provide requested services.
            </p>

            <h4>1.1 User Categories</h4>
            <p>Slonig may serve three user categories:</p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Students (Children):</strong> Under 18 and using app.slonig.org for educational purposes.
                Students use Slonig without creating accounts.
              </li>
              <li>
                <strong>Educators:</strong> Teachers and school/district administrators
                who deploy and manage Slonig for classrooms or organizations.
              </li>
            </ul>

            <h3>2. Personal Information We Collect</h3>
            <p>
              We collect limited Personal Information needed to operate the site and services.
              Sources generally include:
            </p>
            <ul className="list-disc pl-5">
              <li>Information provided by Educators and Parents (not by students directly)</li>
              <li>
                Information about Educators obtained from third parties (e.g., public school/district
                contact sources)
              </li>
              <li>Usage information you generate when using the site</li>
              <li>Information collected via cookies (see Section 4)</li>
            </ul>

            <h4>2.1 Categories of Personal Information</h4>
            <p>
              <strong>For Educators:</strong> name, email, school/district name and address,
              telephone (often for administrators), and role/position.
            </p>
            <p>
              <strong>For Parents (Homeschoolers):</strong> name, email, telephone, and mailing address (if used
              for communications).
            </p>

            <h4>2.2 Accuracy of Display Names</h4>
            <p>
              Display names must be appropriate for an educational environment and must not:
              impersonate others, include profanity/hate speech, or include offensive or violent references.
            </p>

            <h4>2.3 Data Ownership and Use Limitations</h4>
            <p>
              We do not claim ownership of your data and do not use it for unrelated marketing.
              We apply additional restrictions for children’s data and do not use children’s data to market to minors.
            </p>

            <h4>2.4 Referral Information</h4>
            <p>
              If an Educator uses an invitation/referral feature to invite colleagues, we may collect the colleague’s
              email (and optionally name) solely to send the invitation and measure referral success.
            </p>

            <h3>3. Automatic Information</h3>
            <p>
              We may automatically collect technical and usage information such as masked/anonymized IP address, browser type,
              operating system, activity times, and pages/features used. This helps operate the site,
              improve usability, and maintain security.
            </p>

            <h3>4. Use of Cookies and Web Beacons</h3>
            <p>
              We may use cookies for necessary site functionality and optional functionality preferences.
              Cookies can store items like session state. You can control cookies via browser settings,
              but disabling cookies may reduce site functionality.
            </p>
            <p>
              We do not use behavioral advertising cookies on student-facing areas. Where we use analytics
              on marketing pages, it is intended to understand aggregate usage and improve content.
            </p>

            <h4>4.1 Third-Party Advertising Platforms</h4>
            <p>
              We may advertise our services to Educators/Parents via third-party platforms (e.g., search and social).
              We do not target advertisements to students and do not provide student Personal Information to
              advertising platforms. You can manage ad preferences via those platforms and browser settings.
            </p>

            <h3>5. How We Use Personal Information</h3>
            <p>We use Personal Information to:</p>
            <ul className="list-disc pl-5">
              <li>Provide requested services and support</li>
              <li>Operate, troubleshoot, secure, and improve the website and platform</li>
              <li>Prevent fraud and enforce our terms</li>
              <li>Send service announcements and important updates</li>
            </ul>

            <h3>6. How We Protect Personal Information</h3>
            <p>
              We use administrative, technical, and organizational safeguards designed to protect Personal Information
              (e.g., access controls, encryption in transit, secure backups, and internal policies). No security
              measures are perfect; we continuously work to improve protections.
            </p>

            <h3>7. Disclosure of Information to Third Parties</h3>
            <p>
              We do not sell Personal Information. We may share Personal Information with vetted service providers
              who process data on our behalf (hosting, email delivery, security, analytics), under contractual
              obligations to protect it. We may also disclose information if required by law, to protect rights/safety,
              or in connection with a business transfer.
            </p>

            <h3>8. Your Rights</h3>
            <p>
              Depending on your location you may have rights to access, correct, delete, or obtain a copy of Personal Information, and to object
              to or restrict certain processing. We may need to verify identity before fulfilling requests.
            </p>

            <h3>9. Marketing and Advertising</h3>
            <p>
              We market to Educators, Parents, and administrators—not to children. You can opt out of marketing emails
              using the unsubscribe link or by contacting us. Transactional/critical service messages may still be sent.
            </p>

            <h3>10. Links to Other Sites</h3>
            <p>
              If we link to third-party sites, their policies apply. We do not control third-party privacy practices.
            </p>

            <h3>11. Our Policy Towards Minors</h3>
            <p>
              We do not knowingly collect Personal Information directly from children without an authorized Educator/Parent
              providing it. If we learn we collected such information improperly, we will delete it.
            </p>

            <h3>12. California Privacy Notice</h3>
            <p>
              If you are a California resident, you may have additional rights under California privacy laws. We do not
              sell Personal Information, and we do not share student data for cross-context behavioral advertising.
            </p>

            <h3>13. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy to reflect changes in practices, services, or legal requirements.
              We will post updates here and revise the effective date.
            </p>

            <h3>14. Jurisdiction and Applicable Law</h3>
            <p>
              This Policy is governed by applicable laws as determined by our agreements and/or the jurisdiction
              most relevant to the services provided. Some school/district agreements may include additional terms.
            </p>

            <h3>15. Contact Us</h3>
            <p>If you have questions or requests about this Privacy Policy, contact us:</p>
            <p>
              <strong>Email:</strong> info@slonig.org
              <br />
              <strong>Address:</strong> Slonig, Inc., 1111B S Governors Ave STE 48458,
              Dover, DE 19904, USA
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}