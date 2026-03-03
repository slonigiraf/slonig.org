import LegalDiv from "../LegalDiv";
import Navbar from "../Navbar";

export default async function App() {
  return (
    <>
      <Navbar />
      <section className="mx-auto w-full max-w-4xl pt-24 px-6 text-slate-900 pb-10">
        <h1 className="!text-black">Terms of Service</h1>
        <div className="text-left [&_*]:!text-left">
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

            <h4>2A. Enforcement Without Accounts</h4>
            <p>
              Because the Services do not use traditional accounts or logins, Slonig’s ability to enforce these Terms
              (including addressing repeat infringement or abuse) is based on the context in which the Services are used.
              Depending on how you access the Services, “access” may include:
            </p>
            <ul className="list-disc pl-5">
              <li>
                access through a school, district, classroom, or other organization workspace or license (if applicable);
              </li>
              <li>
                access associated with an email address you provide for support, paid Services, training, or other communications;
              </li>
              <li>
                access associated with a purchase, invoice, subscription, or other customer record (if applicable); and/or
              </li>
              <li>
                access to specific pages, links, or in-product contribution features where User Content is submitted.
              </li>
            </ul>
            <p>
              We do not promise that we can identify every user or prevent all re-access in every circumstance. Where we
              take enforcement action, we may do so by restricting access in the applicable context (for example, disabling
              a contribution feature, restricting access within an organization workspace, rejecting submissions, or limiting
              support and paid Services), and by removing or disabling access to specific content.
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
              reliability of the Platform.
            </p>

            <p>
              Paid Services (such as support, training, consulting, or custom development) may be provided under
              separate order forms, statements of work, or written agreements that describe scope, fees, and any
              applicable refund terms.
            </p>

            <p>
              For information about available Services and pricing, please contact us at{" "}
              <strong>info@slonig.org</strong>.
            </p>

            <h4>3A. Payments, Renewals, Cancellations, and Refunds</h4>

            <p>
              This Section applies to purchases of paid Services (such as support, training, consulting, or custom
              development). Additional terms may be presented at checkout and/or in an
              order form, statement of work, or invoice. If there is a conflict, the checkout terms or written agreement
              will control for that purchase.
            </p>

            <h5>3A-1. Business and School Purchases (B2B)</h5>
            <ul className="list-disc pl-5">
              <li>
                <strong>Order documents.</strong> Paid Services for schools, districts, and other organizations may be provided
                under a written order form, statement of work, purchase order acceptance, or invoice describing scope, fees,
                and delivery.
              </li>
              <li>
                <strong>Invoices; payment terms.</strong> Unless otherwise stated on the invoice, invoices are due{" "}
                <strong>net thirty (30) days</strong> from the invoice date. You are responsible for all taxes and similar charges
                unless a valid exemption is provided before invoicing.
              </li>
              <li>
                <strong>Dispute window.</strong> You must notify us in writing of any good-faith invoice dispute within{" "}
                <strong>thirty (30) days</strong> of the invoice date, describing the basis for the dispute. Undisputed amounts
                remain payable on time.
              </li>
              <li>
                <strong>Late payments.</strong> To the extent permitted by law, late amounts may accrue interest at{" "}
                <strong>1.5% per month</strong> (or the maximum permitted by law, if lower), plus reasonable costs of collection.
              </li>
            </ul>

            <h5>3A-2. Consumer Purchases (Parents/Guardians)</h5>
            <ul className="list-disc pl-5">
              <li>
                <strong>Checkout disclosures.</strong> Prices, currency, taxes, and key purchase terms will be shown at checkout
                before you complete a purchase.
              </li>
              <li>
                <strong>How to cancel.</strong> If a purchase includes a recurring subscription (if offered), you can cancel future
                renewals through the in-product account/billing controls (if available) or by emailing{" "}
                <strong>info@slonig.org</strong>. Cancellation stops future charges. Unless required by law, cancellation does not
                retroactively refund the current billing period.
              </li>
            </ul>

            <h5>3A-3. Renewals (If Subscriptions Are Offered)</h5>
            <ul className="list-disc pl-5">
              <li>
                <strong>Auto-renewal.</strong> If a subscription is offered, it will renew automatically at the frequency disclosed
                at checkout until cancelled. We will provide any renewal notices required by applicable law.
              </li>
              <li>
                <strong>Price changes.</strong> We may change subscription pricing prospectively. Any price change will apply on the
                next renewal after notice to the extent required by law.
              </li>
            </ul>

            <h5>3A-4. Refunds and Credits</h5>
            <ul className="list-disc pl-5">
              <li>
                <strong>Paid Services.</strong> Refund eligibility (if any) for paid Services will be specified in the applicable
                written agreement or checkout terms. If not specified, fees for performed Services are non-refundable to the maximum
                extent permitted by law.
              </li>
              <li>
                <strong>Refund method.</strong> Approved refunds are issued to the original payment method when possible (or another
                lawful method if not possible). Timing depends on the payment processor and financial institution.
              </li>
              <li>
                <strong>Chargebacks.</strong> If you initiate a chargeback or payment dispute, we may suspend access to paid features
                while the dispute is pending, to the extent permitted by law.
              </li>
            </ul>

            <h5>3A-5. EEA/UK/Switzerland Consumer Notice (Digital Content and Services)</h5>
            <p>
              If you are a consumer located in the EEA, United Kingdom, or Switzerland, you may have a statutory right to withdraw
              from certain distance contracts within 14 days. However, this right may be lost for <strong>digital content</strong>{" "}
              not supplied on a tangible medium once performance has begun with your prior express consent and acknowledgment, and
              for <strong>digital services</strong> once the service has been fully performed, as applicable. Where required, we will
              present required information and obtain any necessary consents at checkout.
            </p>

            <h4>3B. Purchases; Authority; Payment Processing; Receipts</h4>

            <p>
              If you make a purchase through the Services (including paid Services),
              you agree to the purchase terms presented at checkout, in addition to these Terms. Checkout terms may
              include pricing, currency, taxes/fees, renewal (if applicable), refund eligibility, and other required
              disclosures. If there is a conflict between these Terms and the checkout terms for a specific transaction,
              the checkout terms will control for that transaction.
            </p>

            <h5>3B-1. Authority to Purchase and to Bind an Organization</h5>
            <ul className="list-disc pl-5">
              <li>
                <strong>Adults only.</strong> Purchases may be made only by adults who are legally capable of entering
                into contracts.
              </li>
              <li>
                <strong>Parents/guardians.</strong> If you are a parent or legal guardian, you represent that you are
                authorized to make purchases for educational use by the applicable student(s) and to accept these Terms
                on your own behalf.
              </li>
              <li>
                <strong>Schools and organizations.</strong> If you purchase on behalf of a school, district, or other
                organization, you represent and warrant that you have authority to bind that organization, and “you”
                in these Terms includes that organization.
              </li>
            </ul>

            <h5>3B-2. Payment Processor Terms; Billing Descriptor</h5>
            <p>
              Payments may be processed by one or more third-party payment processors (for example, a card processor or
              digital wallet provider). Your payment is subject to the processor’s terms and privacy practices in
              addition to these Terms. The <strong>merchant of record</strong> and any <strong>billing descriptor</strong>{" "}
              (the name that appears on your statement) will be displayed at checkout or on your receipt.
            </p>

            <h5>3B-3. Currency, Taxes, and Payment Method</h5>
            <p>
              The price, applicable currency, and any taxes, fees, or required charges will be displayed at checkout as
              required by law. You authorize us (and our payment processor) to charge your selected payment method for
              the amounts shown, including applicable taxes and fees. You are responsible for keeping your payment
              information current.
            </p>

            <h5>3B-4. Receipts; Invoices</h5>
            <p>
              We may provide a receipt and/or confirmation of your purchase in-product, by email (if you provide an email
              address), and/or through the payment processor’s confirmation page. For organizational purchases, invoices
              and tax documentation (if applicable) may be provided under the applicable order form, statement of work,
              or invoice process described in Section <strong>3A-1</strong>.
            </p>

            <h5>3B-5. Chargebacks; Fraud; Reversals</h5>
            <p>
              If you initiate a chargeback, reversal, or payment dispute, we may suspend or limit access to paid features
              associated with the disputed transaction while the dispute is pending, to the extent permitted by law.
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
              Slonig is committed to protecting student privacy and supporting compliance with applicable student
              privacy laws when the Services are used in educational settings, including the Family Educational
              Rights and Privacy Act (FERPA) and, where applicable, California’s Student Online Personal
              Information Protection Act (SOPIPA).
            </p>

            <p>
              Our practices regarding student personal information are described in our{" "}
              <a
                href="/privacy-policy-students"
                className="text-[var(--secondary-color)] underline underline-offset-4 hover:opacity-80"
              >
                Privacy Policy for Students
              </a>{" "}
              (“Student Privacy Policy”), which is incorporated by reference into these Terms.
            </p>

            <p>
              The Services are designed for educational use and are intended to minimize the collection of student
              personal information. As described in the Student Privacy Policy, we do not intend to use student
              personal information to deliver targeted advertising to students, and we do not intend to use student
              personal information for marketing or other commercial purposes unrelated to providing and improving
              the Services for educational use.
            </p>

            <p>
              Where SOPIPA applies to a particular deployment of the Services, we intend to operate the Services
              in a manner consistent with SOPIPA’s requirements as described in the Student Privacy Policy. However,
              the specific data collected and processed may vary depending on how the Services are configured and used
              (including by a school, district, or other organization), and by which optional features are enabled.
            </p>

            <p>
              Schools, districts, teachers, and other educational institutions using the Services represent and
              warrant that they have obtained all necessary authorizations and permissions to use the Services with
              student data in accordance with applicable laws (including FERPA and any applicable state student
              privacy laws) and their own institutional policies. As between the parties, educational institutions
              remain responsible for their compliance obligations, including providing required notices and obtaining
              required consents from parents/guardians where applicable.
            </p>

            <p>
              For schools and districts, Slonig may make available additional privacy, security, and contractual
              commitments (for example, a data processing addendum or similar agreement) upon request, and may provide
              configuration controls or documentation to support compliant use in educational settings.
            </p>

            <h4>4B. Children Under 13 and Parental Consent</h4>
            <p>
              Slonig takes the protection of children’s privacy seriously. The Services do not require students to
              create an account, and progress and settings are typically stored locally on the user’s device (for
              example, in browser storage).
            </p>

            <p>
              To the extent we collect or process personal information that is subject to the Children’s Online
              Privacy Protection Act (COPPA) (for example, if a parent, educator, or school provides information to us
              through support communications or other Service-related interactions), we handle such information as
              described in the Student Privacy Policy and applicable law.
            </p>

            <p>
              In educational contexts, some schools may choose to provide consent on behalf of parents/guardians under
              COPPA where permitted (sometimes referred to as the “school authorization” framework). Whether this is
              available depends on the specific facts and the school’s obligations, including that the information is
              collected and used solely for educational purposes and subject to appropriate controls. Schools and
              educational institutions are responsible for determining whether they may provide such consent and for
              providing required notices to parents/guardians.
            </p>

            <p>
              If we become aware that we maintain personal information from a child under 13 in our systems without
              appropriate authorization or consent, we will take steps to delete or de-identify it, as appropriate.
            </p>

            <p>
              Parents and legal guardians may request access to, correction of, or deletion of a child’s personal
              information that we maintain in our systems (if any), as described in the Student Privacy Policy. These
              requests may be made by contacting us directly, or (where the Services are provided through a school)
              through the child’s school or educational institution, at <strong>info@slonig.org</strong>.
            </p>

            <h3>5. Indemnification</h3>
            <p>
              To the maximum extent permitted by applicable law, you agree to indemnify and hold Slonig, its subsidiaries,
              affiliates, licensors, licensees, officers, agents, partners, employees, and contractors harmless from any
              liabilities, losses, damages, claims, penalties, fines, costs, and expenses (including reasonable legal fees)
              arising out of or related to: (i) your access to or use of the Services; (ii) any User Content you submit,
              transmit, or otherwise make available through the Services; (iii) your or your children’s violation of these
              Terms or applicable law; or (iv) any claim by a third party that your use of the Services infringes or
              misappropriates that third party’s intellectual property, proprietary, or privacy rights, or has otherwise
              caused harm to a third party.
            </p>
            <p>
              <strong>Institutional agreements may differ.</strong> If you are a school, district, or other organization
              and you have entered into a separate written agreement with Slonig (for example, an order form, MSA, DPA,
              or similar), the indemnification terms in that written agreement will control for the covered Services in
              the event of a conflict.
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
            <h4>Definitions</h4>
            <p>
              For purposes of these Terms:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>“Platform”</strong> means the Slonig software code that we make available under an
                open-source license (as identified in the applicable repository or notice).
              </li>
              <li>
                <strong>“Educational Content”</strong> means curriculum materials and related educational resources
                that we make available under a Creative Commons license (as identified on the content page, notice,
                or repository).
              </li>
              <li>
                <strong>“Hosted Services”</strong> means the hosted website(s), web application(s), and related
                infrastructure operated by Slonig (including any hosted features, hosting environment, availability,
                security controls, and service operations).
              </li>
              <li>
                <strong>“Marks”</strong> means Slonig’s trademarks, logos, service marks, trade dress, and the
                “Slonig” name.
              </li>
              <li>
                <strong>“Non-Open Materials”</strong> means any part of the Services that is <em>not</em> provided
                under an open-source license or Creative Commons license, including (without limitation) the Hosted
                Services, site/app UI/UX and design elements, non-open documentation, proprietary templates, and any
                other materials identified as proprietary or not licensed for reuse.
              </li>
            </ul>

            <h4>Open-Source and Creative Commons License Priority</h4>
            <p>
              The Platform and Educational Content may be provided under separate open-source and Creative Commons
              licenses. <strong>If there is any conflict</strong> between these Terms and an applicable open-source
              or Creative Commons license, <strong>the open-source or Creative Commons license controls</strong>{" "}
              for that specific Platform code or Educational Content.
            </p>
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

            <h5>Ownership and Creative Commons License</h5>
            <p>
              By submitting User Content, you retain any copyright or other rights you may have in that User Content.
              However, you agree that any User Content you submit to the Services is contributed under the
              <strong> Creative Commons Attribution 4.0 International License (CC BY 4.0)</strong> (or any later version
              of that license, if available), unless we expressly state in writing that a different Creative Commons license
              applies to a specific contribution feature.
            </p>
            <p>
              This means you grant Slonig and all other users a worldwide, non-exclusive, royalty-free, irrevocable
              (to the fullest extent permitted by law) license to use, reproduce, share, adapt, and build upon your
              User Content, including for commercial purposes, provided that appropriate attribution is given.
            </p>
            <p>
              If your User Content includes third-party material, you must have the right to submit it under CC BY 4.0,
              and you are responsible for clearly identifying any material that is not licensed under CC BY 4.0.
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
            <p>
              Because the Services do not use traditional accounts, moderation and enforcement may be applied to specific
              content, links, features, or organization contexts rather than to a persistent user identity.
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

            <h4>8A. Accessibility</h4>
            <p>
              Slonig is committed to making the Services accessible to all users, including individuals with disabilities.
              We strive to design and improve the Services in accordance with generally recognized accessibility standards,
              such as the Web Content Accessibility Guidelines (WCAG), where reasonably practicable.
            </p>
            <p>
              <strong>No guarantee.</strong> Because accessibility depends on many factors (including user devices, browsers,
              assistive technologies, third-party content, and optional configurations), we do not warrant that the Services
              will be accessible in all circumstances or meet every specific accessibility requirement.
            </p>
            <p>
              If you encounter an accessibility barrier, please contact us at <strong>info@slonig.org</strong> and include
              (if possible) the page or feature, the issue encountered, and your device/browser/assistive technology details.
              We will make reasonable efforts to review and address reported issues.
            </p>

            <h4>8B. Acceptable Use for Schools and Educational Organizations</h4>
            <p>
              If you are a school, district, educator, or other educational organization, you agree to use the Services
              only for lawful educational purposes and in compliance with your policies, applicable law, and these Terms.
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Student safety.</strong> You will take reasonable steps to supervise student use of the Services,
                consistent with your policies and applicable law.
              </li>
              <li>
                <strong>No prohibited content.</strong> You will not use the Services to create, submit, or distribute content
                that is unlawful, harmful, harassing, discriminatory, sexually explicit, or that exploits or endangers minors.
              </li>
              <li>
                <strong>No cheating/academic misconduct tools.</strong> You will not use the Services to facilitate academic
                dishonesty (for example, distributing answer keys in ways that defeat assessment integrity) except where a
                teacher intentionally uses content as part of instruction.
              </li>
              <li>
                <strong>Compliance with school rules.</strong> You are responsible for ensuring that use aligns with school
                or district policies (including acceptable use policies, device policies, and content policies).
              </li>
            </ul>
            <p>
              We may restrict or disable specific features or content (including contribution features) if we reasonably
              determine they are being used in a way that violates these Terms or poses risk to students, educators, or the Services.
            </p>

            <h4>8C. Export Controls and Sanctions</h4>
            <p>
              The Services may be subject to United States export control and economic sanctions laws and regulations.
              You agree that you will not access, use, export, re-export, transfer, or provide the Services (or any related
              technical data) in violation of applicable export controls or sanctions laws.
            </p>
            <p>
              Without limiting the foregoing, you represent that you are not (i) located in, ordinarily resident in, or
              organized under the laws of any country or region subject to comprehensive U.S. sanctions (as may change from time to time),
              or (ii) listed on any U.S. government restricted-party list (such as the U.S. Treasury Department’s SDN List),
              and you will not permit any such person or entity to access or use the Services.
            </p>
            <p>
              We may suspend or terminate access to the Services where we reasonably determine it is required to comply with
              export control or sanctions laws.
            </p>

            <h4>8D. Service Availability; No SLA (Unless in a Written Agreement)</h4>
            <p>
              The Services may be unavailable from time to time due to maintenance, updates, outages, network issues,
              third-party dependencies, or events outside our reasonable control. We do not guarantee any minimum uptime,
              availability, performance, or response times unless expressly stated in a separate written agreement signed
              by Slonig (for example, an order form or service level agreement).
            </p>
            <p>
              To the extent permitted by law, Slonig is not liable for unavailability, delays, or performance issues of the Services,
              including those caused by third-party services, hosting providers, internet service providers, or user devices.
            </p>

            <h3>9. Disclaimers and Limitation of Liability</h3>

            <p className="uppercase">
              THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND.
              SLONIG DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS
              FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TITLE, AND ANY WARRANTIES ARISING FROM
              COURSE OF DEALING OR USAGE OF TRADE.
            </p>

            <p>
              <strong>Non-waivable rights.</strong> Some jurisdictions do not allow the exclusion of certain warranties
              or limitations of liability. Nothing in these Terms limits or excludes any rights you may have that cannot
              be lawfully limited or excluded under applicable law.
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
              <strong>Required carve-outs.</strong> The limitations in this Section do not apply to the extent prohibited
              by applicable law, including liability that cannot be limited or excluded under law (for example, certain
              liability for intentional misconduct, fraud, or gross negligence, or for death or personal injury caused by
              negligence, where applicable).
            </p>

            <p>
              <strong>Enterprise terms control where applicable.</strong> If you have a separate written agreement with
              Slonig (for example, an order form, MSA, or data processing addendum), that agreement may include different
              warranties, liability caps, or carve-outs and will control in the event of a conflict for the covered Services.
            </p>

            <p>
              Slonig is not responsible for third-party content, links, or services accessed through the Services.
              Any reliance on such content is at your own risk.
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
              <strong>Primary notice method.</strong> Because the Services do not require accounts and we may not have
              your email address, we primarily provide notices by posting them in the Services (including in-product
              messages, banners, or notices on relevant pages) and/or on our website.{" "}
              <strong>Notice is effective when posted</strong> in the Services or on the website, unless a later effective
              date is stated.
            </p>
            <p>
              <strong>Email is supplemental.</strong> If you have provided an email address for Service-related
              communications (for example, in connection with paid Services, support, or training), we may also send
              notices by email as a courtesy. We are not able to provide email notice to users for whom we do not have
              a current email address, and you are responsible for keeping any provided contact information up to date.
            </p>
            <p>
              <strong>Institutional customers.</strong> If you are a school, district, or other organization with a paid
              order form, statement of work, or similar written agreement, notices under that agreement may be delivered
              in the manner specified there (for example, to designated administrative contacts).
            </p>

            <h3>12. Copyright Complaints</h3>

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
              <strong>Designated DMCA agent.</strong> Slonig has not designated a DMCA agent with the U.S. Copyright Office at this time.
              Please send notices to <strong>info@slonig.org</strong> with the subject line <strong>“DMCA Notice”</strong>. If we designate
              an agent in the future, we will update these Terms and/or the Services with the agent’s contact information.
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
              In appropriate circumstances and at our discretion, Slonig may disable or restrict access to contribution
              features and/or terminate or limit access to the Services (as described in Section 15) for repeat infringers.
            </p>
            <p>
              Because the Services do not use traditional accounts, enforcement may be applied at the content, feature,
              device-session, link, organization/workspace, purchase/customer record, or Service-related email context level,
              where feasible. We do not guarantee that we can identify every user or prevent all re-access in every circumstance.
            </p>
            <p>
              We may remove or restrict access to allegedly infringing material as required by applicable law.
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
              If you have purchased paid Services and the change materially affects those paid Services, you may cancel the affected
              paid Services within 45 days of the notice. Any refund eligibility will be handled in accordance with Section 3A-4 and
              any separate written agreement governing your purchase, and as required by applicable law.
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
              We may suspend or terminate access to all or part of the Services, or restrict specific features, if we
              reasonably believe you have violated these Terms, infringed others’ rights, or engaged in unlawful,
              fraudulent, or abusive activity. Enforcement actions may include removing or disabling access to User Content,
              limiting or disabling contribution features, restricting access within an organization workspace (if applicable),
              and/or refusing further support or paid Services associated with a customer record or email address used for
              Service-related communications.
            </p>

            <h4>15A. Notice and Cure for Paid Institutional Customers</h4>
            <p>
              If you are a school, district, or other organization that has purchased paid Services under an order form,
              statement of work, purchase order acceptance, or invoice, then (except as described in Section 15B) we will
              provide written notice of a material breach and a reasonable opportunity to cure before suspending or terminating
              the affected paid Services. The cure period will be <strong>thirty (30) days</strong> unless we specify a shorter
              period that is reasonable based on the nature of the breach.
            </p>

            <h4>15B. Immediate Suspension or Termination</h4>
            <p>
              We may immediately suspend or terminate access (without a cure period) if we reasonably determine that:
              (i) the breach involves security risks, attempted unauthorized access, malware, or denial-of-service activity;
              (ii) the conduct is illegal or poses a risk of harm to users (including children) or to Slonig;
              (iii) continued access would create material risk to the Services, other users, or third parties; or
              (iv) required by law or a valid legal request.
            </p>

            <h4>15C. Effect of Termination; Refunds for Paid Services</h4>
            <p>
              If we terminate or suspend paid Services for an organization <strong>without cause</strong> (i.e., not due to your
              uncured breach), we will provide a <strong>pro rata refund or credit</strong> for prepaid, unused fees for the
              terminated portion of the paid Services, to the extent permitted by law and unless your written agreement states
              otherwise. If we terminate for an <strong>uncured breach</strong>, fees paid are non-refundable except as required
              by applicable law or expressly stated in a written agreement.
            </p>

            <h4>15D. Access Without Accounts</h4>
            <p>
              Because the Services do not rely on traditional accounts, we may not be able to associate all activity with a
              single individual across devices or sessions. We do not guarantee that a suspension will prevent all future
              access in every case. Where feasible, enforcement may be applied to specific content, links, features, organization
              contexts, or Service-related customer records (for example, disabling a contribution feature or restricting access
              within a school workspace).
            </p>

            <p>
              We reserve the right to remove or delete information in accordance with our Privacy Policy.
              We may refer suspected illegal activity to law enforcement where required or appropriate.
            </p>

            <h3>16. Dispute Resolution; Arbitration; Class Action Waiver</h3>

            <h4>16A. Informal Resolution First</h4>
            <p>
              Before starting a formal legal proceeding (including arbitration), you agree to contact us at{" "}
              <strong>info@slonig.org</strong> and provide a brief description of the dispute and your contact
              information. We will attempt to resolve the dispute informally. If the dispute is not resolved
              within <strong>thirty (30) days</strong> after we receive your notice, either party may begin a
              formal proceeding as described below.
            </p>

            <h4>16B. Arbitration (Applies to Consumers Unless Prohibited by Law)</h4>
            <p>
              If you are an individual consumer (for example, a parent/guardian purchasing for personal use),
              and to the maximum extent permitted by applicable law, you and Slonig agree that any dispute,
              claim, or controversy arising out of or relating to the Services or these Terms (a{" "}
              <strong>“Dispute”</strong>) will be resolved by <strong>binding, individual arbitration</strong>,
              rather than in court, except as stated in Section 16D (Exceptions).
            </p>
            <p>
              The arbitration will be administered by a reputable arbitration provider and conducted under its
              applicable rules for consumer disputes, except where those rules conflict with these Terms. The
              arbitrator may award the same relief that a court could award on an individual basis. Judgment on
              the award may be entered in any court with jurisdiction.
            </p>
            <p>
              <strong>If the arbitration agreement in this Section 16B is found unenforceable as to you under
                applicable law</strong>, then Section 17 (Governing Law and Jurisdiction) will apply instead.
            </p>

            <h4>16C. Class Action Waiver (Individual Proceedings Only)</h4>
            <p>
              To the maximum extent permitted by applicable law, you and Slonig agree that each party may bring
              claims against the other <strong>only in an individual capacity</strong> and not as a plaintiff or
              class member in any purported class, collective, coordinated, consolidated, or representative
              proceeding. The arbitrator may not consolidate more than one person’s claims and may not otherwise
              preside over any form of representative or class proceeding.
            </p>

            <h4>16D. Exceptions</h4>
            <ul className="list-disc pl-5">
              <li>
                <strong>Small claims.</strong> Either party may bring an individual claim in small claims court
                if it qualifies and remains an individual claim.
              </li>
              <li>
                <strong>Injunctive relief / IP.</strong> Either party may seek injunctive or equitable relief in
                court to prevent actual or threatened infringement, misappropriation, or violation of intellectual
                property rights or confidentiality obligations.
              </li>
            </ul>

            <h4>16E. Location and Fees (Consumer)</h4>
            <p>
              For consumers, arbitration will take place by video, phone, or in the county (or equivalent) of
              your primary residence, unless you and Slonig agree otherwise. We will pay required arbitration
              filing and administrative fees for consumer arbitration to the extent required by the arbitration
              provider’s rules or applicable law, and the arbitrator may award fees and costs as permitted by law.
            </p>

            <h4>16F. Time Limit to Bring Claims</h4>
            <p>
              To the extent permitted by applicable law, any claim or cause of action arising out of or relating
              to the Services or these Terms must be filed within <strong>one (1) year</strong> after the claim
              arose; otherwise, the claim is permanently barred. This does not apply where prohibited by law.
            </p>

            <h4>16G. B2B Disputes (Schools, Districts, Organizations)</h4>
            <p>
              If you are a school, district, or other organization (or you purchase paid Services under an order
              form, statement of work, purchase order acceptance, or invoice), then (unless your written agreement
              with Slonig states otherwise) the arbitration and class waiver provisions in Sections 16B–16E do not
              apply, and disputes will be handled under Section 17 (Governing Law and Jurisdiction). To the extent
              permitted by law, the prevailing party in any such dispute may recover reasonable attorneys’ fees and
              costs.
            </p>

            <h3>17. Governing Law and Jurisdiction</h3>
            <p>
              These Terms and all matters arising out of or relating to these Terms shall be governed by the
              substantive laws of the State of Delaware, USA, without regard to its principles of conflicts of
              laws. Any disputes shall be subject to the exclusive jurisdiction of the state or federal courts
              located in Delaware, USA, and each party consents to personal jurisdiction and venue in those
              courts.
            </p>

            <p>
              <strong>Consumer rights and mandatory local rules.</strong> If you are a consumer (not acting on behalf
              of a school, district, or other organization), and the laws of your country of residence provide you
              with mandatory consumer protections or do not allow an exclusive choice of Delaware law or Delaware
              courts for certain disputes, then those mandatory protections (and the courts of your residence, where
              applicable) will apply to the extent required by law.
            </p>

            <h3>18. Contact Us</h3>
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