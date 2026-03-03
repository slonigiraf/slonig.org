
export default async function App() {
  return (
    <>
      {/* Policy content */}
      <section className="mx-auto w-full max-w-4xl pt-24 px-6 text-slate-900 pb-10">
        <h1 className="!text-black">Privacy Policy for Students</h1>

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
            <h3>Slonig’s Privacy Commitment</h3>
            <p>
              Protecting student privacy is foundational to everything we do. Slonig is built to align
              with FERPA, COPPA, and California Student Privacy expectations, and we follow SOC 2 Type
              II security principles. Our privacy and security practices are designed to protect student
              data and support school compliance.
            </p>

            <h3>Our Approach</h3>

            <p>
              <strong>We collect minimal information.</strong>
            </p>
            <p>Only what is necessary for students to study effectively.</p>

            <p>
              <strong>We use data solely for educational purposes.</strong>
            </p>
            <p>
              Student information is used to provide and improve the service and to support learning.
              We do not use student personal information for targeted advertising or marketing.
              We may use de-identified and aggregated results (including study results) to evaluate
              effectiveness and to communicate outcomes publicly. We may collect <strong>in-product usage data</strong> (for
              example, which activities are completed and how the platform performs) to operate,
              secure, and improve Slonig.
            </p>

            <p>
              <strong>We do NOT sell or rent student information.</strong>
            </p>
            <p>
              Student data remains within our educational platform and is never shared with third
              parties for commercial purposes.
            </p>

            <p>
              <strong>We maintain strong security measures.</strong>
            </p>
            <p>
              Data encryption, access controls, regular security audits, and continuous monitoring
              protect student information. All staff receive mandatory training on privacy requirements.
            </p>

            <p>
              <strong>We respect parental and school authority.</strong>
            </p>
            <p>
              Parents/guardians and schools can request access to, correction of, export of, or
              deletion of student information that Slonig, Inc. holds, if any. (Most student progress
              is stored locally on the student’s device by default.)
            </p>

            <p>
              <strong>We comply with applicable privacy laws.</strong>
            </p>
            <p>Our practices adhere to COPPA, FERPA, and state privacy regulations.</p>

            <p>
              This Student Privacy Policy is a supplement to our main&nbsp;
              <a
                href="/privacy-policy"
                className="text-[var(--secondary-color)] underline underline-offset-4 hover:opacity-80"
              >
                Privacy Policy
              </a>
              &nbsp;and provides additional information specifically about how we handle student
              information. This policy is designed to help students, parents, and educators understand
              our practices regarding student data.
            </p>

            <p>
              Slonig, Inc. is committed to protecting student privacy and complying with all applicable
              laws, including the Children’s Online Privacy Protection Act (COPPA) and the Family
              Educational Rights and Privacy Act (FERPA).
            </p>

            <p>
              <strong>Company Information:</strong> Slonig, Inc., 1111B S Governors Ave STE 48458 Dover,
              DE 19904, USA
            </p>

            <p>
              <strong>Date of issue:</strong> 8/1/2026
            </p>
            <p>
              <strong>Last updated:</strong> 8/1/2026
            </p>

            <h3>1. Who This Policy Applies To</h3>
            <p>This policy applies to students who use Slonig through:</p>
            <ul className="list-disc pl-5">
              <li>Their school or district</li>
              <li>Their parent or guardian for homeschooling purposes</li>
            </ul>

            <p>
              Slonig is designed to work <strong>without student-created accounts</strong>. By
              default, students do not sign up, and most learning progress is stored{" "}
              <strong>locally on the student’s device</strong> (including school-provided devices).
              Local data can be removed at any time by clearing the browser cache/storage or using the
              device’s management tools.
            </p>

            <p>
              In limited cases (for example, a school-managed pilot or a randomized controlled trial
              (RCT)), an authorized adult (such as a teacher, school administrator, or parent/guardian)
              may provide student information to Slonig, Inc. If we receive student information, we use
              it only for the educational purposes described in this policy.
            </p>

            <h3>2. What Information Do We Have About Students?</h3>
            <p>
              Slonig is designed to collect as little student personal data as possible. Use of&nbsp;
              <strong>app.slonig.org</strong> is anonymous by default. In limited cases—such as
              participation in a randomized controlled trial (RCT) or a school-managed pilot—student
              personal data may be provided to Slonig, Inc. by authorized adults, and processed by
              Slonig, Inc. When that happens, the information is provided to us by teachers, school
              administrators, and/or parents or guardians, and may include: student first and last
              name, grade level, school name, and learning results (for example, scores).
            </p>

            <p>
              As students use Slonig, we may collect limited{" "}
              <strong>technical and usage analytics</strong> needed to operate, secure, and improve the
              platform. This may include aggregated or de-identified performance metrics, security logs
              (which may include an anonymized form of an IP address), browser and device information,
              and in-product usage events (for example,
              which activities are completed and basic interaction patterns). We do not use this data
              to advertise to students or to track them across other companies’ websites or apps.
            </p>

            <h3>3. How We Use Student Information</h3>
            <p>
              We use student information only for educational purposes to help students study
              effectively. Specifically, we use student information to personalize learning experiences
              and improve our educational content and curriculum, ensure the platform works properly
              and securely, and comply with legal obligations.
            </p>

            <p>
              We do NOT use student information to: Market products or services to students, show
              advertisements to students, sell or rent student information to third parties, create
              profiles of students for non-educational purposes, or share student information for any
              purpose other than providing educational services.
            </p>

            <h3>4. Who Can See Student Information?</h3>
            <p>
              Student information is shared only with authorized parties who need access to provide
              educational services. The student’s teacher or parent can see their progress and
              performance. School or district administrators may see student information as authorized
              by the school or district. Slonig employees and contractors who need access to provide
              technical support, improve the platform, or fulfill other necessary functions work under
              strict confidentiality agreements. Service providers who help us operate the platform
              (such as hosting services) access student data only as necessary and are contractually
              required to protect student privacy.
            </p>

            {/* ✅ tightened: define de-identified + no re-linking attempts */}
            <p>
              We may also use or share <strong>de-identified</strong> or{" "}
              <strong>aggregated</strong> data for research, analytics, and service improvement.{" "}
              <strong>De-identified</strong> means we remove or obscure direct identifiers (such as a
              student’s name) and take reasonable measures to help ensure the data cannot be
              reasonably linked back to a specific student. We do not attempt to re-identify
              de-identified data, and we require any recipients (if any) to agree not to re-identify it.
            </p>

            <h3>5. We Never Sell Student Information</h3>
            <p>
              Slonig does NOT sell, trade, or rent student information to anyone. We do not share
              student information with third parties for their marketing purposes. We do NOT allow any
              advertising on the student-facing parts of our platform.
            </p>

            <h3>6. California Student Privacy (SOPIPA)</h3>
            <p>
              If Slonig is provided to K–12 students in California, we follow the requirements of
              California’s Student Online Personal Information Protection Act (SOPIPA). In addition to
              the commitments stated elsewhere in this policy, we make the following SOPIPA-specific
              commitments regarding “covered information” collected through the service.
            </p>

            <p>
              <strong>Prohibited uses.</strong> We do not:
            </p>
            <ul className="list-disc pl-5">
              <li>Use covered information to target advertising to students.</li>
              <li>Sell or rent covered information.</li>
              <li>
                Use covered information to create a profile about a K–12 student except as needed for
                K–12 school purposes (for example, to provide, maintain, improve, or troubleshoot the
                service, or to provide analytics and reporting for educational purposes).
              </li>
            </ul>

            <p>
              <strong>Limits on disclosure.</strong> We disclose covered information only as allowed
              for K–12 school purposes, such as:
            </p>
            <ul className="list-disc pl-5">
              <li>
                To schools, districts, teachers, administrators, and parents/guardians, as applicable,
                to support the student’s education and the operation of the service.
              </li>
              <li>
                To service providers that help us operate the service (for example, hosting, security,
                and support), <strong>only</strong> when necessary to provide the service. These
                service providers are bound by contract to (i) use student information only to provide
                services to Slonig, (ii) protect it, and (iii) not use it for any other purpose.
              </li>
              <li>
                When required by law, legal process, or to protect the rights, safety, and security of
                users and the service.
              </li>
            </ul>

            <p>
              If we ever share covered information in connection with a business transaction (see
              “Business Transfer”), we require the recipient to handle it in a manner consistent with
              this Student Privacy Policy and applicable student privacy laws, including SOPIPA.
            </p>

            <h3>7. How We Protect Student Information</h3>
            <p>
              We take the security of student information very seriously and use industry-standard
              safeguards to protect it. Our security measures may include encryption of data both when
              it is stored and when it is transmitted, secure passwords and authentication systems,
              limited access to student data ensuring only authorized personnel can access student
              information, regular security audits and assessments, secure backup systems, and
              employee training on privacy and security practices.
            </p>

            <p>
              All employees who may access student information complete mandatory training on FERPA,
              COPPA, and data privacy requirements.
            </p>

            <h3>8. Product Safeguards for Student Users</h3>
            <p>
              Beyond technical security measures, we have designed our website and platform with
              specific safeguards to protect students while they learn.
            </p>
            <p>
              Beyond technical security measures, we have designed our website and platform with specific
              safeguards to protect students while they learn.
              Slonig provides a private, focused learning environment. Students cannot create an account on
              Slonig. We emulate account-like functionality to provide a familiar user experience and
              to allow progress to be saved, but this functionality is stored solely on the student’s device,
              and all data disappears when the browser cache is cleared.
              Students cannot message, chat with, or communicate with other students through Slonig.
              Students cannot see other students’ profiles, progress, or personal information.
            </p>

            <h3>9. Student Rights and Parent/Guardian Rights</h3>
            <p>
              Parents/guardians (and schools, where applicable) can request access to, correction of,
              export of, or deletion of{" "}
              <strong>student information that Slonig, Inc. holds on its servers</strong>, if any.
              Because Slonig is designed to work without student-created accounts and stores most
              learning progress locally on the student’s device by default, in many cases Slonig, Inc.
              may not have student information to access, export, or delete.
            </p>

            <p>
              <strong>Local device data:</strong> If a student’s progress is stored on the device, it
              can be removed by clearing the browser cache/storage or through device management
              controls.
            </p>

            <p>
              <strong>Server-held data (limited cases):</strong> If a school, district, or
              parent/guardian provided student information to Slonig, Inc. (for example, for a pilot
              or RCT), you may request access, correction, export, or deletion by contacting us at{" "}
              <a href="mailto:info@slonig.org">info@slonig.org</a> (or by contacting the
              school/district, if the student uses Slonig through a school).
            </p>

            {/* ✅ NEW: GDPR Notice (EEA/UK Users) */}
            <h3>10. GDPR Notice (EEA/UK Users)</h3>

            <p>
              This section applies only where the EU/EEA or UK General Data Protection
              Regulation (“GDPR”) applies.
            </p>

            <p>
              <strong>Controller / processor roles.</strong> When a school or district in the
              EU/EEA or UK uses Slonig, the school or district typically acts as the{" "}
              <strong>data controller</strong> and Slonig, Inc. acts as a{" "}
              <strong>data processor</strong>, processing student information only on the
              school’s instructions and for educational purposes. When Slonig is used
              directly by a parent/guardian outside a school relationship, Slonig, Inc. may
              act as the <strong>data controller</strong> for the personal data it processes
              in that context.
            </p>

            <p>
              <strong>Legal bases.</strong> Where GDPR applies, we process personal data as
              necessary to provide the service (performance of a contract) and to operate,
              secure, and improve the service (legitimate interests, such as maintaining
              reliability, preventing fraud/abuse, and improving platform performance). If we
              rely on consent for any optional features, you may withdraw consent at any time.
            </p>

            <p>
              <strong>Your rights (EEA/UK).</strong> Subject to applicable law, you may have
              the right to request access to, correction of, deletion of, restriction of, or
              objection to processing of personal data, and the right to data portability.
              Where processing is based on consent, you may withdraw consent at any time. You
              also have the right to lodge a complaint with your local data protection
              authority.
            </p>

            <p>
              <strong>How to exercise rights.</strong> Contact us at{" "}
              <a href="mailto:info@slonig.org">info@slonig.org</a>. If the student uses Slonig
              through a school, the school or district may also submit requests on the
              student’s behalf.
            </p>

            <h3>10. COPPA Notice and Consent (Children Under 13)</h3>
            <p>
              The Children’s Online Privacy Protection Act (COPPA) requires specific disclosures and
              consent when personal information is collected online from children under 13.
            </p>

            <p>
              <strong>When Slonig collects student personal information.</strong> Slonig is designed
              to be anonymous by default. In limited cases—such as a school-managed pilot or a
              randomized controlled trial (RCT)—authorized adults (for example, a school/district or a
              parent/guardian) may provide student personal information to Slonig, Inc. (such as a
              student’s name, grade, school, and learning results).
            </p>

            <p>
              <strong>How consent is provided.</strong> When COPPA applies, consent is obtained in one
              of the following ways, depending on the context:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>School consent (school-authorized use):</strong> If a school or district
                provides student information to Slonig for educational use, the school may provide
                consent on behalf of parents/guardians as permitted under COPPA’s school-consent
                pathway, and Slonig will use the information only to provide and improve educational
                services for the school.
              </li>
              <li>
                <strong>Parent/guardian consent (homeschool or direct parent use):</strong> If a
                parent/guardian provides student personal information to Slonig outside of a school
                setting, we will obtain verifiable parental consent or rely on another lawful basis
                permitted under COPPA before collecting or using that personal information.
              </li>
            </ul>

            <p>
              <strong>Direct notice.</strong> When we need parental consent under COPPA, we provide
              parents/guardians with COPPA-required notice describing what information we collect, how
              we use it, whether we share it, and how parents can review or delete the information.
            </p>

            <p>
              <strong>Parents can revoke consent.</strong> A parent/guardian may withdraw consent and
              request deletion of the child’s personal information at any time by contacting us at{" "}
              <a href="mailto:info@slonig.org">info@slonig.org</a>. If the student uses Slonig through
              a school, parents/guardians may also contact the school to submit a request through the
              school.
            </p>

            <p>
              <strong>Operator disclosures.</strong> Slonig, Inc. operates the Slonig service.
              We collect student personal information only as described in this Student Privacy Policy
              (and only in the limited situations described above). We use it solely for educational
              purposes, and we do not sell student personal information.
            </p>

            <h3>11. Slonig as a School Official Under FERPA</h3>
            <p>
              When a school or district uses Slonig, Slonig, Inc. may be treated as a “school
              official” under the Family Educational Rights and Privacy Act (FERPA) to the extent
              permitted by law and our written agreement with the school or district.
            </p>

            <p>
              <strong>What this means.</strong> In these situations:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>We perform services for the school.</strong> Slonig provides educational
                technology services that the school or district would otherwise use its own employees
                to perform, such as delivering learning activities and generating learning insights.
              </li>
              <li>
                <strong>Legitimate educational interest.</strong> We access or process student
                education records only as needed to provide the service for school purposes.
              </li>
              <li>
                <strong>Direct control through the agreement.</strong> The school or district
                maintains direct control over our use of student information through our service
                agreement and applicable policies. Our agreement is intended to include appropriate
                limits and controls, such as:
                <ul className="list-disc pl-5 mt-2">
                  <li>Use of student information only for authorized educational (school) purposes</li>
                  <li>
                    Restrictions on re-disclosure (we do not re-disclose except as permitted by FERPA
                    and our agreement)
                  </li>
                  <li>
                    Requirements to protect student information with appropriate administrative,
                    technical, and physical safeguards
                  </li>
                  <li>
                    Requirements for returning, deleting, or de-identifying student information at
                    the end of the service term or upon the school’s request, consistent with the
                    agreement and applicable law
                  </li>
                </ul>
              </li>
              <li>
                <strong>FERPA-aligned handling.</strong> We handle student education records in a
                manner consistent with FERPA requirements applicable to service providers acting as
                school officials.
              </li>
            </ul>

            <p>
              If your school or district has questions about these controls, please contact us at{" "}
              <a href="mailto:info@slonig.org">info@slonig.org</a>.
            </p>

            <h3>12. How Long We Keep Student Information</h3>
            <p>
              In rare cases—such as participation in a randomized controlled trial (RCT) or a
              school-managed pilot—we may collect a student’s name, surname, grade, school name, and
              scores. We keep this information only for as long as needed for the RCT or pilot. Unless
              the school requests a shorter period, we delete or de-identify it within{" "}
              <strong>30 days</strong> after the RCT or pilot ends, except where a longer retention
              period is required by law or to resolve disputes.
            </p>

            <p>
              <strong>What We Keep:</strong>
            </p>

            <ul className="list-disc pl-5">
              <li>
                We may retain only minimal information required by law, such as records needed for tax
                purposes or to comply with legal obligations.
              </li>
              <li>
                We may also retain anonymous platform usage data, such as anonymized or aggregated
                performance data, an anonymized IP address, browser and device information, and
                anonymous information about which activities students complete and how they interact
                with the platform. Because this data is anonymized, it cannot be linked back to a
                specific student, and individual deletion is not technically possible.
              </li>
            </ul>

            <p>
              <strong>Getting Your Data:</strong> Schools, districts, or parents can copy student 
              information from their devices to transfer it to another device before deleting it.
            </p>

            {/* ✅ NEW: more specific third-party categories + typical data */}
            <h3>13. Third-Party Services We Use</h3>
            <p>
              To provide and protect the service, we use service providers in the following categories:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Hosting and infrastructure</strong> (to run the website and deliver content)
                — may process technical data such as IP address (or a truncated/anonymized form),
                device/browser information, and request logs.
              </li>
              <li>
                <strong>Security and monitoring</strong> (to detect abuse, prevent fraud, and improve
                reliability) — may process security logs and related technical identifiers.
              </li>
              <li>
                <strong>Customer support and communications</strong> (to respond to school/parent
                requests) — may process contact details and the content of communications.
              </li>
            </ul>

            <p>
              These providers may have access to student information only to the extent necessary to
              perform services for us. They are bound by contract to (1) use the data only to provide
              services to Slonig, (2) protect it, and (3) not use it for any other purpose. We do not
              permit these providers to use student information for their own advertising or marketing.
            </p>

            <h3>14. Business Transfer</h3>
            <p>
              In certain circumstances, Slonig may be involved in a business transaction such as a
              merger, acquisition, reorganization, bankruptcy, or sale of assets. If that happens, we
              may transfer student information as part of the transaction{" "}
              <strong>only as permitted by applicable law</strong> and (where relevant){" "}
              <strong>our agreements with schools and districts</strong>.
            </p>

            <p>
              <strong>Protection carries over.</strong> Any acquiring organization must continue to
              protect student information in a manner consistent with this Student Privacy Policy and
              applicable student privacy laws (including COPPA, FERPA, and SOPIPA), and may use
              student information only for the same educational purposes described in this policy,
              unless and until we provide any required notices and obtain any required consents.
            </p>

            <p>
              <strong>Notice.</strong> We will provide notice to schools and districts (and, where
              applicable, parents/guardians) about a business transfer involving student information
              as required by law and/or our contractual commitments. If the transaction would result
              in materially different privacy practices for student information, we will provide
              additional notice and obtain any required consent before applying those changes.
            </p>

            <h3>15. Changes to This Policy</h3>
            <p>
              We may update this Student Privacy Policy from time to time. When we make changes, we
              will update the "Last updated" date at the top of this policy. If we make significant changes that affect how we
              collect, use, or share student information, we will notify schools and parents in
              advance.
            </p>

            <h3>16. Data Breach Notification</h3>
            <p>
              In the unlikely event of a data breach affecting student information, we will notify
              the school or district (and, where applicable, parents/guardians)
              <strong> without unreasonable delay</strong> and in accordance with applicable law.
              Timing may depend on what we learn as we investigate the incident and determine the
              scope and impacted data. We may also delay notice if requested by law enforcement or
              otherwise permitted by law.
            </p>

            <p>
              Our notification will include, to the extent known and as required by law: what
              information was affected, what happened, the steps we are taking to address the
              incident, and guidance on protective measures that may be helpful.
            </p>

            <h3>17. Questions and Contact Information</h3>
            <p>If you have questions about how we handle student information, please contact us:</p>

            <p>
              <strong>Contact Information:</strong> Slonig, Inc., 1111B S Governors Ave STE 48458
              Dover, DE 19904, USA
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:info@slonig.org">info@slonig.org</a>
            </p>

            <h3>18. Additional Resources</h3>
            <p>For more detailed information about our privacy practices, please see:</p>
            <ul>
              <li>Our complete Privacy Policy</li>
              <li>Our Terms of Service</li>
            </ul>

            <p>For information about student privacy laws:</p>
            <ul>
              <li>COPPA: Federal Trade Commission website (ftc.gov)</li>
              <li>FERPA: U.S. Department of Education website (www.ed.gov)</li>
            </ul>

            <p>
              This Student Privacy Policy should be read in conjunction with our main Privacy Policy.
              In case of any conflict between this Student Privacy Policy and the main Privacy Policy,
              the terms that provide greater protection for student privacy will apply.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}