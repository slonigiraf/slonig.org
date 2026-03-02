import { Link } from "lucide-react";
import Navbar from "../Navbar";

export default async function App() {
  return (
    <>
      {/* Policy content */}
      <section className="mx-auto w-full max-w-4xl pt-24 px-6 text-slate-900 pb-10">
        <h1 className="!text-black">
          Privacy Policy for Students
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

            <h3>Slonig’s Privacy Commitment</h3>
            <p>Protecting student privacy is foundational to everything we do.</p>

            <p>
              Protecting student privacy is foundational to everything we do.
              Slonig is built to align with FERPA, COPPA, and California Student Privacy expectations,
              and we follow SOC 2 Type II security principles. Our privacy and security practices are
              designed to protect student data and support school compliance.
            </p>

            <h3>Our Approach</h3>

            <p><strong>We collect minimal information.</strong></p>
            <p>Only what is necessary for students to study effectively.</p>

            <p><strong>We use data solely for educational purposes.</strong></p>
            <p>
              Student information supports learning. It is not used for marketing,
              advertising, or any commercial activities. Our website contains no
              third-party advertising and no behavioral tracking of students for
              advertising or marketing purposes.
            </p>

            <p><strong>We do NOT sell or rent student information.</strong></p>
            <p>
              Student data remains within our educational platform and is never shared
              with third parties for commercial purposes.
            </p>

            <p><strong>We maintain strong security measures.</strong></p>
            <p>
              Data encryption, access controls, regular security audits, and continuous
              monitoring protect student information. All staff receive mandatory
              training on privacy requirements.
            </p>

            <p><strong>We respect parental and school authority.</strong></p>
            <p>Parents and schools can access, correct, export, or delete student data at any time.</p>

            <p><strong>We comply with applicable privacy laws.</strong></p>
            <p>Our practices adhere to COPPA, FERPA, and state privacy regulations.</p>

            <p>
              This Student Privacy Policy is a supplement to our main
              &nbsp;
              <a
                href="/privacy-policy"
                className="text-[var(--secondary-color)] underline underline-offset-4 hover:opacity-80"
              >
                Privacy Policy
              </a>
              &nbsp;
              and
              provides additional information specifically about how we handle student
              information. This policy is designed to help students, parents, and
              educators understand our practices regarding student data.
            </p>

            <p>
              Slonig, Inc. is committed to protecting student privacy and complying with
              all applicable laws, including the Children's Online Privacy Protection
              Act (COPPA) and the Family Educational Rights and Privacy Act (FERPA).
            </p>

            <p>
              <strong>Company Information:</strong> Slonig, Inc., 1111B S Governors Ave
              STE 48458 Dover, DE 19904, USA
            </p>

            <p><strong>Date of issue:</strong> 8/1/2026</p>
            <p><strong>Last updated:</strong> 8/1/2026</p>

            <h3>1. Who This Policy Applies To</h3>
            <p>This policy applies to students who use Slonig through:</p>
            <ul className="list-disc pl-5">
              <li>Their school or district</li>
              <li>Their parent or guardian for homeschooling purposes</li>
            </ul>

            <p>
              Slonig is designed not to collect personal information directly from students.
              Students do NOT create accounts, and student work and progress are stored locally
              on the student’s device (including school-provided devices). This data remains
              on the device and can be removed at any time by clearing the browser cache/storage.
            </p>

            <p>
              If any student information is provided to Slonig, Inc., it is provided by
              authorized adults (such as educators, school administrators, or parents/guardians)
              who have the right to share that information.
            </p>


            <h3>2. What Information Do We Have About Students?</h3>
            <p>
              Slonig is designed to collect as little student personal data as possible. Use of
              <strong>app.slonig.org</strong> is anonymous by default.
              In limited cases—such as participation in a randomized controlled trial (RCT) or a
              school-managed pilot—student personal data may be collected.
              When that happens, the information is provided to us by teachers, school administrators,
              and/or parents or guardians, and may include:
            </p>

            <ul>
              <li>
                <strong>Information Provided by Teachers, School Administrators, or Parents/Guardians:</strong>
                student first and last name, grade level, school name (for school-based accounts),
                and learning results (for example, scores).
              </li>

              <li>
                <strong>Information Collected Automatically During Platform Use:</strong>
                as students use Slonig to learn and practice, we collect certain technical data and
                learning/usage data needed to operate, secure, and improve the platform. This may include
                anonymized or aggregated performance data, an anonymized IP address (for security and
                technical purposes), browser and device information, and anonymous information about which
                activities students complete and how they interact with the platform.
              </li>
            </ul>

            <h3>3. How We Use Student Information</h3>
            <p>
              We use student information only for educational purposes to help students
              study effectively. Specifically, we use student information to personalize learning experiences
              and adapt activities to each student's level, track student progress and
              generate reports for teachers and parents, improve our educational content
              and curriculum, ensure the platform works properly and securely, and
              comply with legal obligations.
            </p>

            <p>
              We do NOT use student information to: Market products or services to
              students, show advertisements to students, sell or rent student
              information to third parties, create profiles of students for
              non-educational purposes, or share student information for any purpose
              other than providing educational services.
            </p>

            <h3>4. Who Can See Student Information?</h3>
            <p>
              Student information is shared only with authorized parties who need access
              to provide educational services. The student's teacher or parent
              can see their progress and performance. School or
              district administrators (for school-based accounts) may see student
              information as authorized by the school or district. Slonig employees and
              contractors who need access to provide technical support, improve the
              platform, or fulfill other necessary functions work under strict
              confidentiality agreements. Service providers who help us operate the
              platform (such as hosting services) access student data only as necessary
              and are contractually required to protect student privacy.
            </p>

            <p>
              We may also share de-identified or anonymized student data that cannot be
              traced back to individual students for research and improvement purposes.
            </p>

            <h3>5. We Never Sell Student Information</h3>
            <p>
              Slonig does NOT sell, trade, or rent student information to anyone. We do
              not share student information with third parties for their marketing
              purposes. We do NOT allow any advertising on the student-facing parts of
              our platform.
            </p>

            <h3>6. How We Protect Student Information</h3>
            <p>
              We take the security of student information very seriously and use
              industry-standard safeguards to protect it. Our security measures include
              encryption of data both when it is stored and when it is transmitted,
              secure passwords and authentication systems, limited access to student
              data ensuring only authorized personnel can access student information,
              regular security audits and assessments, secure backup systems, and
              employee training on privacy and security practices.
            </p>

            <p>
              All employees who may access student information complete mandatory
              training on FERPA, COPPA, and data privacy requirements.
            </p>

            <h3>7. Product Safeguards for Student Users</h3>
            <p>
              Beyond technical security measures, we have designed our website and
              platform with specific safeguards to protect students while they learn.
            </p>

            <p><strong>Private Learning Environment:</strong></p>
            <p>
              Slonig provides a private, focused learning environment where students
              interact only with educational content. Students cannot
              message, chat with, or communicate with other students through Slonig.
              Students cannot see other students' profiles, progress, or
              personal information.
            </p>


            <h3>8. Student Rights and Parent/Guardian Rights</h3>
            <p>
              Parents or guardians have the
              right to review their child's information and progress data, request
              corrections to inaccurate information, request deletion of their child's
              account and information, receive a copy of their child's information, and
              refuse further collection or use of their child's information. Parents
              should contact their child's school or district to exercise these rights,
              or they may contact Slonig directly. Teachers and administrators can also
              help students and parents access and manage student information within
              their authorized scope.
            </p>

            <h3>9. Slonig as a School Official Under FERPA</h3>
            <p>
              When schools and districts use Slonig, we may act as a "school official"
              under the Family Educational Rights and Privacy Act (FERPA). This means:
            </p>

            <p><strong>Our Role:</strong> Slonig performs institutional services and functions 
            that the school would otherwise perform itself, specifically providing educational 
            technology services and learning analytics.</p>
            <p><strong>Legitimate Educational Interest:</strong> We access student education 
            records only to fulfill our specific responsibilities in providing the Slonig learning 
            platform and supporting student learning outcomes.</p>

            <p><strong>Direct Control:</strong> Schools and districts maintain direct control 
            over our use of student education records. We use student information only as directed 
            by the school and in accordance with our service agreement.</p>

            <p><strong>FERPA Compliance:</strong> We comply with FERPA's requirements applicable 
            to school officials, including:</p>
            <ul>
              <li>Using student information only for authorized educational purposes</li>
              <li>Not re-disclosing student information without proper authorization</li>
              <li>Maintaining appropriate security safeguards for education records</li>
              <li>Allowing schools to audit our use of student information</li>
            </ul>

            <p>
              This school official relationship is established through our service
              agreements with schools and districts, which specify how we may access and
              use student education records in accordance with FERPA regulations.
            </p>

            <h3>10. How Long We Keep Student Information</h3>
            <p>
              <strong>During Active Use:</strong> We keep student information as long as
              the student's account is active and the teacher or parent continues to use
              our services.
            </p>

            <p>
              <strong>After a School Stops Using Slonig:</strong> When a school or
              district stops using Slonig, we delete all student information, including
              backups, within 60 days after June 30th of the current calendar year,
              unless the school requests earlier deletion. Upon request, we will delete
              student information within seven business days from our active systems and
              within 30 days from backup systems.
            </p>

            <p>
              <strong>After a Parent stops using Slonig:</strong> When a parent
              stops using Slonig, we delete the associated student
              information within seven business days from our active systems and within
              30 days from backup systems.
            </p>

            <p>
              <strong>What We Keep:</strong> We may retain only minimal information
              required by law, such as records needed for tax purposes or to comply with
              legal obligations.
            </p>

            <p>
              <strong>Getting Your Data:</strong> Schools, districts, or parents can
              request a copy of student information to transfer to another service
              before we delete it.
            </p>

            <h3>11. Third-Party Services We Use</h3>
            <p>
              To provide our services, we work with trusted third-party service
              providers. These providers may have access to student information only to
              the extent necessary to perform their services for us. All our service
              providers are required to protect student information and use it only for
              authorized purposes.
            </p>

            <p>
              Please see here for a list of service providers to whom we disclose
              personal information. All of these service providers are bound by
              contract to maintain the confidentiality and security of student
              information.
            </p>

            <h3>12. Business Transfer</h3>
            <p>
              In certain circumstances, Slonig may be involved in a business transaction
              such as a merger, acquisition, reorganization, bankruptcy, or sale of
              assets. In such events, we may transfer or share student information in
              connection with the transaction. Your consent to this Student Privacy
              Policy, followed by the submission of student information by authorized
              parties (teachers, administrators, or parents), represents explicit
              agreement to such transfer.
            </p>

            <p>
              In the event of any business transfer, the acquiring party will be
              required to continue protecting student information in accordance with
              this Student Privacy Policy and all applicable privacy laws, including
              FERPA and COPPA. We will provide notice to schools, districts, and parents
              before any transfer of student information occurs and will ensure that the
              same privacy protections remain in place.
            </p>

           
            <h3>14. Changes to This Policy</h3>
            <p>
              We may update this Student Privacy Policy from time to time. When we make
              changes, we will update the "Last updated" date at the top of this policy
              and post an announcement on our website for at least two weeks. If we make
              significant changes that affect how we collect, use, or share student
              information, we will notify schools and parents in advance.
            </p>

            <h3>15. Data Breach Notification</h3>
            <p>
              In the unlikely event of a data breach affecting student information, we
              will notify the school or district (for school-based accounts) or parents
              (for homeschool accounts) within 24 hours. The notification will include
              what information was affected, what happened, and what steps we are taking
              to address the breach and protect student information.
            </p>

            

            <h3>17. Questions and Contact Information</h3>
            <p>If you have questions about how we handle student information, please contact us:</p>
            <ul>
              <li><strong>For School-Based Accounts:</strong> Parents should first contact their child's school or district. You may also contact Slonig directly.</li>
              <li><strong>For Homeschool Accounts:</strong> Parents can contact Slonig directly.</li>
            </ul>

            <p>
              <strong>Contact Information:</strong> Slonig, Inc., 1111B S Governors Ave
              STE 48458 Dover, DE 19904, USA
            </p>
            <p><strong>Email:</strong> <a href="mailto:info@slonig.org">info@slonig.org</a></p>

            <h3>21. Additional Resources</h3>
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
              This Student Privacy Policy should be read in conjunction with our main
              Privacy Policy. In case of any conflict between this Student Privacy
              Policy and the main Privacy Policy, the terms that provide greater
              protection for student privacy will apply.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}