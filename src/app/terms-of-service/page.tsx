import LegalDiv from "../LegalDiv";
import Navbar from "../Navbar";

export default async function App() {
  return (
    <>
      <Navbar />

      {/* Terms content */}
      <section className="mx-auto w-full max-w-4xl pt-24 px-6 text-slate-900 pb-10">
        <h1 className="!text-black">Terms of Service</h1>

        {/* ✅ force left alignment for ALL content, including headings */}
        <div className="text-left [&_*]:!text-left">
          {/* ✅ Tailwind-only typography overrides */}
          <LegalDiv>
            <p className="mt-8 text-[clamp(14px,1.1vw,16px)]">
              Date of issue of these Terms: 03/01/2026
            </p>
            <p className="mt-2 text-[clamp(14px,1.1vw,16px)]">
              Last updated: 03/01/2026
            </p>

            <p className="mt-8">
              These Terms of Service (“Terms”) govern your access to and use of Slonig’s websites,
              applications, features, and content (collectively, the “Services”). By accessing or using
              the Services, you agree to these Terms. If you do not agree, do not use the Services.
            </p>

            <p>
              In these Terms, “Slonig” (“we,” “us,” “our”) refers to Slonig, Inc., located at
              1111B S Governors Ave STE 48458, Dover, DE 19904, USA.
            </p>

            <p>
              <span className="font-extrabold">Privacy:</span>{" "}
              Our Privacy Policy explains how we collect and use personal information. If you are an
              Educator or Parent/Guardian, please also review our{" "}
              <a
                href="/privacy-policy"
                className="text-[var(--secondary-color)] underline underline-offset-4 hover:opacity-80"
              >
                Privacy Policy
              </a>{" "}
              and, if applicable, our{" "}
              <a
                href="/privacy-policy-students"
                className="text-[var(--secondary-color)] underline underline-offset-4 hover:opacity-80"
              >
                Privacy Policy for Students
              </a>
              .
            </p>

            <h3>1. Your Responsibility for Internet Access</h3>
            <p>
              To use the Services, you must gain access to the Internet, either directly or through
              devices that access web-based content, and pay any service and/or telephony fees
              associated with such access.
            </p>
            <p>
              You are responsible for obtaining and maintaining all necessary consents, licenses, and
              relevant filings and settings for the Services and/or intellectual property rights
              connected to any Services for your use. You shall ensure that the Services are not used
              in a manner that violates any applicable laws, regulations, or third-party rights,
              including intellectual property rights, or that incites or facilitates such violations.
            </p>

            <h3>2. Access Without an Account</h3>
            <p>
              You do not need to create an account to use the Services.
              Slonig does not provide traditional registration or login.
              Any settings, customization, and progress are stored locally on your device
              (for example, in your browser storage) and may be lost if you clear your browser data,
              reinstall the app, or change devices.
            </p>
            <p>
              Slonig may generate a cryptographic key locally on your device
              to support private features (such as protecting locally stored data). This key is created
              and stored on your device, and Slonig does not receive or store it.
            </p>
            <p>
              You are responsible for maintaining access to your device and for safeguarding any
              device-based credentials or keys that may be generated for your use. Slonig cannot recover
              device-stored data or keys if they are lost or deleted.
            </p>

            <h3>3. Pricing</h3>
            <p>
              Slonig may offer the Platform under an open-source license, with educational content made
              available under a Creative Commons license. Access to the open-source Platform and Creative
              Commons content may be available at no cost.
            </p>

            <p>
              Separately, Slonig may offer paid Services, including (without limitation) technical support,
              teacher training, development of new materials, consulting, and maintaining the integrity and
              reliability of the Platform. Certain Services may be funded or incentivized through the
              distribution and use of Slon tokens.
            </p>

            <p>
              For information about available Services and pricing, please contact us at{" "}
              <strong>info@slonig.org</strong>.
            </p>

            <h3>4. Supervising Children</h3>
            <p>
              Slonig is concerned about the safety and privacy of all its users, particularly
              children. Parents, legal representatives, or teachers should assist children in accessing
              the Services and supervise their use.
            </p>
            <p>
              Slonig acknowledges that students’ personally identifiable information remains under the
              direct control of parents and the school, as applicable.
            </p>

            <h4>4A. Educational Data Privacy</h4>
            <p>
              Slonig is committed to protecting student privacy and supporting compliance with applicable
              student privacy laws when the Services are used in educational settings, including the
              Family Educational Rights and Privacy Act (FERPA) and, where applicable, California’s Student
              Online Personal Information Protection Act (SOPIPA).
            </p>
            <p>
              We do not use student personal information to deliver targeted advertising to students, and
              we do not use student personal information for marketing or other commercial purposes
              unrelated to providing and improving the Services for educational use.
            </p>
            <p>
              Where SOPIPA applies, we operate consistent with its requirements. In particular, we do not
              knowingly: (a) sell student personal information; (b) use student personal information for
              targeted advertising; (c) create profiles of students for non-educational commercial
              purposes; or (d) disclose student personal information except as permitted by law and by
              authorized educational institutions or parents/guardians, as applicable.
            </p>
            <p>
              Schools, districts, teachers, and other educational institutions using the Services represent
              and warrant that they have obtained all necessary authorizations and permissions to use the
              Services with student data in accordance with applicable laws (including FERPA and any
              applicable state student privacy laws) and their own institutional policies. As between the
              parties, educational institutions remain responsible for their compliance obligations and for
              providing required notices and obtaining required consents from parents/guardians where
              applicable.
            </p>

            <h4>4B. Children Under 13 and Parental Consent</h4>
            <p>
              Slonig takes the protection of children’s privacy seriously and is designed to minimize the
              collection of personal information from students, including children under 13. The Services do
              not require students to create an account, and progress and settings are typically stored locally
              on the user’s device (for example, in browser storage).
            </p>
            <p>
              To the extent we collect or process personal information that is subject to the Children’s Online
              Privacy Protection Act (COPPA) (for example, if a parent, educator, or school provides information
              to us through support communications or other Service-related interactions), we do not knowingly
              collect, use, or disclose personal information from children under 13 without verifiable parental
              consent, except where permitted by COPPA and other applicable laws.
            </p>
            <p>
              In educational contexts where the Services are used under COPPA’s school authorization (the “school
              official”/school consent framework, as applicable), we rely on schools and educational institutions
              to provide appropriate notice to parents and to obtain any required consents or authorizations.
            </p>
            <p>
              If we become aware that we maintain personal information from a child under 13 in our systems
              without proper authorization or parental consent, we will take steps to delete or de-identify it,
              as appropriate.
            </p>
            <p>
              Parents and legal guardians may request access to, correction of, or deletion of a child’s personal
              information that we maintain in our systems (if any). These requests may be made by contacting us
              directly, or (where the Services are provided through a school) through the child’s school or
              educational institution, at <strong>info@slonig.org</strong>.
            </p>


            <h3>5. Indemnification</h3>
            <p>
              You agree to indemnify and hold Slonig, its subsidiaries, affiliates, licensors, licensees,
              officers, agents, partners, employees, and contractors harmless from any liabilities, losses,
              damages, claims, penalties, fines, costs, and expenses (including reasonable legal fees) arising
              out of or related to: (i) your access to or use of the Services; (ii) any content or information
              you submit, transmit, or otherwise make available through the Services; (iii) your or your
              children’s violation of these Terms or applicable law; or (iv) any claim by a third party that
              your use of the Services infringes or misappropriates that third party’s intellectual property,
              proprietary, or privacy rights, or has otherwise caused harm to a third party.
            </p>

            <h3>6. Modifications to Services</h3>
            <p>
              Slonig reserves the right to modify or discontinue, temporarily or permanently, the
              Services (or any part thereof) with or without notice. You agree that Slonig shall not be
              liable to you or any third party for any modification, suspension, or discontinuance.
              Although we take reasonable care to ensure that content is up to date, any content may be
              outdated at any time, and we are under no obligation to update it.
            </p>
            <p>
              Slonig may add, delete, or modify some or all of the Services. If we determine that a change is
              material, we may provide notice by posting a notice in the Services and/or on our website. If you
              have provided an email address for Service-related communications (for example, in connection with
              paid Services, support, or training), we may also provide notice by email. Where applicable, we may
              provide options to continue using the Services or to stop using the affected Services.
            </p>

            <h3>7. Intellectual Property</h3>

            <p>
              The Platform software is made available as open source, and certain educational materials are
              provided under a Creative Commons license, each as identified in the applicable repository,
              notice, or content page. Your rights to use, copy, modify, and share the Platform and such
              materials are governed by the applicable open-source and Creative Commons licenses, not by this
              Section alone.
            </p>

            <p>
              Except as expressly permitted by those licenses, Slonig and its licensors retain all right, title,
              and interest in and to the Services, including trademarks, logos, service marks, the “Slonig”
              name, and any non-open-licensed content or materials made available through the Services.
            </p>

            <p>
              Slonig grants you a limited, revocable, non-exclusive, non-transferable license to access and use
              the Services for internal educational or instructional purposes and in accordance with these
              Terms, the applicable licenses, and applicable law.
            </p>

            <h4>Permitted and Prohibited Uses</h4>

            <p>
              Your use of the Platform software and any educational materials made available under open-source
              and/or Creative Commons licenses must comply with the terms of those applicable licenses (including
              any attribution, notice, share-alike, or non-commercial restrictions, if applicable).
            </p>

            <p>
              Except as expressly permitted by applicable open-source or Creative Commons licenses or by these
              Terms, any other use of the Services is prohibited. In particular, your rights under these Terms do
              not include any right to collect, aggregate, copy, duplicate, display, publish, or create derivative
              works from any non-open-licensed parts of the Services. You may not use data mining, robots, spiders,
              or similar data gathering and extraction tools without our prior written permission, except that
              general-purpose search engines and non-commercial public archives may use such tools solely to display
              hyperlinks to publicly available pages of the Services, provided they operate from a stable IP
              address or range and use an identifiable user agent.
            </p>

            <p>
              You may not, and may not permit any third party to: (a) sublicense, resell, rent, lease, transfer,
              assign, time share, or otherwise commercially exploit any hosted Services or make the hosted Services
              available to any third party, except as allowed by the applicable open-source or Creative Commons
              licenses; (b) use the hosted Services to provide service bureau, time-sharing, or similar services to
              third parties; (c) remove or modify any proprietary notices, trademarks, labels, or marks on the
              Services; or (d) use the Services for any unlawful purpose or in any manner inconsistent with these
              Terms.
            </p>

            <h3>8. Prohibited Activities</h3>
            <p>
              You must not misuse the Services by knowingly introducing viruses, Trojans, worms, logic
              bombs, or other malicious or technologically harmful materials. You must not attempt to
              gain unauthorized access to the Services, the servers on which the Services are stored,
              or any server, computer, or database connected to the Services. You must not attack the
              Services via a denial-of-service attack or a distributed denial-of-service attack.
            </p>
            <p>
              Slonig may report suspected breaches to relevant law enforcement authorities and may
              cooperate with those authorities as required by law. In the event of such a breach, your
              right to use the Services will cease immediately.
            </p>
            <p>
              Slonig will not be liable for any loss or damage caused by a distributed denial-of-service
              attack, viruses, or other technologically harmful materials that may infect your computer
              equipment, computer programs, data, or other proprietary material due to your use of the
              Services or your downloading of any materials posted on it or on any website linked to it.
            </p>

            <h3>9. Disclaimers and Limitation of Liability</h3>

            <p className="uppercase">
              THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND.
              SLONIG DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS
              FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TITLE, AND ANY WARRANTIES ARISING FROM
              COURSE OF DEALING OR USAGE OF TRADE.
            </p>

            <p className="uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SLONIG SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF
              PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO YOUR USE
              OF (OR INABILITY TO USE) THE SERVICES, EVEN IF SLONIG HAS BEEN ADVISED OF THE POSSIBILITY
              OF SUCH DAMAGES.
            </p>

            <p>
              You acknowledge that the Services may store certain settings, customization, progress, or keys locally
              on your device (for example, in browser storage). Slonig does not control your device or browser and is
              not responsible for loss of locally stored data resulting from actions such as clearing browser storage,
              reinstalling the app, changing devices, device loss, device damage, or similar events.
            </p>

            <p>
              You are responsible for maintaining the security of your devices and any device-based credentials or keys.
              Slonig is not responsible for unauthorized access to or alteration of your locally stored data resulting
              from your failure to maintain device security.
            </p>

            <p className="uppercase">
              IN NO EVENT SHALL SLONIG’S TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO
              THE SERVICES OR THESE TERMS EXCEED THE AMOUNT YOU PAID TO SLONIG (OR THAT WAS PAID ON
              YOUR BEHALF) FOR THE SERVICES DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING
              RISE TO THE CLAIM.
            </p>

            <p>
              Slonig is not responsible for third-party content, links, or services accessed through the Services.
              Any reliance on such content is at your own risk.
            </p>

            <p>
              Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability for
              incidental or consequential damages. In such jurisdictions, our liability shall be limited to the
              maximum extent permitted by law.
            </p>

            <h3>10. Privacy</h3>
            <p>
              Our Privacy Policy explains how we collect, process, use, and disclose personal
              information. You can access it at{" "}
              <a
                href="/privacy-policy"
                className="text-[var(--secondary-color)] underline underline-offset-4 hover:opacity-80"
              >
                /privacy-policy
              </a>
              .
            </p>

            <h3>11. Notices</h3>
            <p>
              We may provide notices to you via email, posting, or website announcements. The Services
              may also display notices of changes to these Terms or other matters.
            </p>

            <h3>12. Copyright Infringement</h3>
            <p>
              If you believe your intellectual property rights have been infringed on the Services,
              please contact us with detailed information about the alleged infringement at{" "}
              <strong>info@slonig.org</strong>.
            </p>

            <h3>13. Changes to Terms</h3>
            <p>
              We may update these Terms from time to time. If we make material changes, we will provide notice at
              least 14 days before the changes take effect by posting a notice in the Services and/or on our
              website.
            </p>
            <p>
              If you have provided an email address for Service-related communications (for example, in connection
              with paid Services, support, or training), we may also provide notice by email. We are not able to
              provide email notice to users for whom we do not have a current email address.
            </p>
            <p>
              Changes will apply from the effective date shown in the updated Terms. By continuing to access or
              use the Services after the changes become effective, you agree to the updated Terms. If you do not
              agree to a material change, you must stop using the Services. If you have purchased paid Services
              and the change materially affects those paid Services, you may cancel the affected paid Services
              within 45 days of the notice, and we will provide any refund (if applicable) in accordance with the
              Refund Terms or any separate written agreement governing your purchase.
            </p>

            <h3>14. Entire Agreement</h3>
            <p>
              These Terms constitute the entire agreement between you and Slonig regarding their
              subject matter, superseding and extinguishing any prior agreements, arrangements, or
              undertakings (whether oral or written) related to such subject matter. You may be
              subject to additional terms and conditions that may apply when you use affiliate
              services, third-party content, or third-party software.
            </p>

            <h3>15. Termination</h3>
            <p>
              We may suspend or terminate your access to the Services at our sole discretion in case of
              breach of these Terms. Suspected illegal, fraudulent, or abusive activity may be grounds
              for terminating your access to Services and may be referred to the appropriate law enforcement
              authorities. Your right to use the Services will immediately cease upon suspension or
              termination. We reserve the right to remove or delete information in accordance with our Privacy Policy.
            </p>

            <h3>16. Governing Law and Jurisdiction</h3>
            <p>
              These Terms and all matters arising out of or relating to these Terms shall be governed by the
              substantive laws of the State of Delaware, USA, without regard to its principles of conflicts of
              laws. Any disputes shall be subject to the exclusive jurisdiction of the state or federal courts
              located in Delaware, USA, and each party consents to personal jurisdiction and venue in those
              courts.
            </p>

            <h3>17. Contact Us</h3>
            <p>
              For questions or suggestions about these Terms or your personal information, please
              contact us at:
            </p>
            <p>
              <strong>Slonig, Inc.</strong>
              <br />
              1111B S Governors Ave STE 48458
              <br />
              Dover, DE 19904, USA
              <br />
              <strong>Email:</strong> info@slonig.org
            </p>
          </LegalDiv>
        </div>
      </section>
    </>
  );
}