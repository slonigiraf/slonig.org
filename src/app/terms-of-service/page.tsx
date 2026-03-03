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
              reliability of the Platform. Slonig may also offer optional in-Service points (“Slon Tokens”)
              that may be used within the Services as described in Section 3A.
            </p>

            <p>
              For information about available Services and pricing, please contact us at{" "}
              <strong>info@slonig.org</strong>.
            </p>

            <h4>3A. Slon Tokens (In-Service Digital Points)</h4>

            <ul className="list-disc pl-5">
              <li>
                <strong>No monetary value / no cash redemption.</strong> Slon Tokens are in-Service digital
                points with <strong>no cash value</strong>. They are <strong>not money</strong>, not legal
                tender, not a bank account, and not a payment instrument. Slon Tokens are{" "}
                <strong>not redeemable for cash</strong> and cannot be exchanged for fiat currency by Slonig.
              </li>

              <li>
                <strong>Limited purpose.</strong> Slon Tokens may only be used <strong>within the Services</strong>{" "}
                for the limited purposes we describe in-product (for example, enabling certain learning activities,
                unlocking features, or accessing content). Slon Tokens do not represent any ownership interest in Slonig
                or any right to profits, dividends, or governance.
              </li>

              <li>
                <strong>Not an investment.</strong> Slon Tokens are <strong>not offered or sold as an investment</strong>{" "}
                and are not intended to create any expectation of profit. You should not purchase or acquire Slon Tokens
                with an expectation that their value will increase.
              </li>

              <li>
                <strong>Who may purchase.</strong> Slon Tokens may be purchased by parents/legal guardians and by schools,
                districts, and other educational institutions (each, a <strong>“Purchaser”</strong>) for use in connection
                with educational activities in the Services.
              </li>

              <li>
                <strong>Transfers inside the Services only.</strong> Users may be able to transfer Slon Tokens to other users{" "}
                <strong>through the Services’ built-in functionality</strong>. Transfers are intended to support educational
                use in the Services and are subject to any limits, controls, or eligibility rules we may apply (for example,
                caps, classroom or organization scope, age restrictions, fraud prevention, or other safety measures).
              </li>

              <li>
                <strong>No resale / no external market.</strong> You may not buy, sell, barter, broker, or transfer Slon Tokens{" "}
                outside the Services, or use them in connection with any external marketplace or exchange. We do not recognize
                or support any attempt to create an external market for Slon Tokens, and any purported “sale” or “exchange”
                outside the Services is void.
              </li>

              <li>
                <strong>Pricing and taxes.</strong> Prices (if any) for Slon Tokens will be shown at the time of purchase.
                Taxes and fees may apply where required by law.
              </li>

              <li>
                <strong>Final sale; refunds.</strong> Except where required by applicable law or expressly stated at the time
                of purchase, purchases of Slon Tokens are <strong>final and non-refundable</strong>. If we provide refunds in
                a particular case, we may do so by returning funds to the original payment method or by issuing replacement
                tokens, at our discretion and as permitted by law.
              </li>

              <li>
                <strong>Loss and errors.</strong> Once credited, Slon Tokens may be spent, transferred, or consumed through the
                Services. You are responsible for confirming recipient details before transferring. We may correct errors (for
                example, duplicate credits, miscalculations, or technical issues) and may reverse or adjust token balances where
                we reasonably determine an error, fraud, abuse, or violation of these Terms.
              </li>

              <li>
                <strong>Program changes.</strong> We may modify, suspend, or discontinue Slon Tokens at any time (including
                changing earning rules, usage rules, caps, or expiration), to the extent permitted by law, and we may update
                these Terms and/or provide notice in the Services.
              </li>

              <li>
                <strong>Abuse.</strong> We may suspend, reverse, or remove Slon Tokens and/or restrict access to Slon Tokens
                features if we reasonably believe there is fraud, manipulation, abuse, or violation of these Terms.
              </li>
            </ul>

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
              out of or related to: (i) your access to or use of the Services; (ii) any User Content you submit, 
              transmit, or otherwise make available through the Services; (iii) your or your
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

            <h4>7A. User Content and Curriculum Contributions</h4>

            <p>
              The Services may allow educators, schools, districts, parents/guardians, or other authorized users
              to submit, upload, transmit, or otherwise make available content, materials, suggestions, feedback,
              or proposed edits (collectively, <strong>“User Content”</strong>). User Content includes, for example,
              educator-proposed edits or additions to curriculum materials submitted through wiki-style or similar
              contribution features.
            </p>

            <h5>Ownership</h5>
            <p>
              As between you and Slonig, you retain ownership of your User Content. Slonig does not claim ownership
              of User Content you submit.
            </p>

            <h5>License to Slonig</h5>
            <p>
              You grant Slonig a worldwide, non-exclusive, royalty-free, sublicensable (solely to service providers
              acting on our behalf), and transferable license to host, store, reproduce, process, adapt (for formatting
              and technical compatibility), publish, display, distribute, and otherwise use your User Content only as
              necessary to operate, provide, maintain, secure, improve, and support the Services, including reviewing,
              evaluating, and incorporating educator-proposed curriculum changes.
            </p>

            <h5>Curriculum Contributions and Review</h5>
            <p>
              If you submit proposed edits to curriculum materials, you acknowledge and agree that: (i) your proposed
              edits may be reviewed, accepted, rejected, modified, or reverted by Slonig or its reviewers; (ii) Slonig
              is not obligated to publish or implement any proposed edit; and (iii) once accepted, changes may become
              part of the curriculum materials distributed through the Services under the license(s) identified for
              those materials (for example, a Creative Commons license), as described in Section 7.
            </p>

            <h5>Your Responsibilities</h5>
            <p>
              You represent and warrant that you have all rights necessary to submit the User Content and to grant the
              license above, and that your User Content (a) does not infringe, misappropriate, or violate any third-party
              rights (including intellectual property or privacy rights), and (b) complies with applicable laws and these Terms.
            </p>

            <h5>Prohibited User Content</h5>
            <p>
              You may not submit User Content that is unlawful, harmful, abusive, defamatory, obscene, or otherwise objectionable,
              or that contains malicious code, or that violates the rights of others. We may remove or restrict access to User Content
              to the extent we reasonably determine it violates these Terms or applicable law.
            </p>

            <h5>Moderation and Enforcement</h5>
            <p>
              Slonig may (but is not required to) review, monitor, or moderate User Content. We may remove, disable access to,
              or preserve User Content, and we may suspend or terminate access to the Services, as described in Section 15,
              including to address suspected infringement, unlawful activity, or policy violations.
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

            <h3>12. Copyright and DMCA Policy</h3>

            <p>
              Slonig respects intellectual property rights and expects users to do the same. If you believe that content
              available through the Services infringes a copyright you own or control, you may submit a notice as described below.
            </p>

            <h4>12A. DMCA Notice of Claimed Infringement (U.S.)</h4>
            <p>
              If you are a copyright owner (or authorized to act on behalf of one) and believe that content in the Services
              infringes your copyright, you may submit a written notice that includes the following information:
            </p>
            <ul className="list-disc pl-5">
              <li>A physical or electronic signature of the copyright owner (or authorized agent).</li>
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>
                Identification of the material claimed to be infringing and information reasonably sufficient to allow us to
                locate it (for example, a URL, screenshot, or specific in-product location).
              </li>
              <li>Your name, address, telephone number, and email address.</li>
              <li>
                A statement that you have a good faith belief that the use is not authorized by the copyright owner, its agent,
                or the law.
              </li>
              <li>
                A statement, under penalty of perjury, that the information in the notice is accurate and that you are the copyright
                owner or authorized to act on the owner’s behalf.
              </li>
            </ul>

            <p>
              Send DMCA notices to: <strong>info@slonig.org</strong> with the subject line <strong>“DMCA Notice”</strong>.
            </p>

            <p>
              <strong>Designated Agent (if registered):</strong> If Slonig has designated a DMCA agent with the U.S. Copyright Office,
              we will provide the agent’s name and contact details here and/or in the Services. Until then, notices may be sent to
              the email address above.
            </p>

            <h4>12B. Counter-Notification</h4>
            <p>
              If you believe that material you posted was removed or disabled by mistake or misidentification, you may submit a counter-notice.
              A counter-notice must include:
            </p>
            <ul className="list-disc pl-5">
              <li>Your physical or electronic signature.</li>
              <li>Identification of the material removed or disabled and where it appeared before removal.</li>
              <li>
                A statement under penalty of perjury that you have a good faith belief the material was removed or disabled as a result
                of mistake or misidentification.
              </li>
              <li>
                Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the federal district court
                for the district in which your address is located (or, if outside the U.S., the District of Delaware), and that you will accept
                service of process from the person who provided the original notice (or that person’s agent).
              </li>
            </ul>

            <p>
              Send counter-notices to: <strong>info@slonig.org</strong> with the subject line <strong>“DMCA Counter-Notice”</strong>.
            </p>

            <h4>12C. Repeat Infringer Policy</h4>
            <p>
              In appropriate circumstances and at our discretion, Slonig may disable or terminate access for users who are repeat infringers.
              We may also remove or restrict access to allegedly infringing material as required by applicable law.
            </p>

            <p>
              <strong>Important:</strong> Submitting false or misleading notices or counter-notices may result in liability. You should consider
              consulting an attorney before submitting a notice or counter-notice.
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