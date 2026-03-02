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

            <p><strong>We do not sell or rent student information.</strong></p>
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
              This Student Privacy Policy is a supplement to our main Privacy Policy and
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
            <ul>
              <li>Their school or district (school-based accounts)</li>
              <li>Their parent or guardian for homeschooling purposes (homeschool accounts)</li>
            </ul>

            <p>
              Slonig does not collect personal information directly from students. All
              student accounts are created and managed by either:
            </p>
            <ul>
              <li>
                Teachers, school administrators, or district administrators (for
                school-based accounts), OR
              </li>
              <li>Parents or legal guardians (for homeschool accounts)</li>
            </ul>

            <p>
              Students cannot create their own accounts or provide personal information
              to Slonig directly. All information about students is provided by
              authorized adults who have the right to share that information.
            </p>

            <h3>2. How Student Accounts Work</h3>
            <p>
              Student accounts are always linked to either a teacher's account or a
              parent's account. Students log in using a unique class number randomly
              generated by the platform and credentials (username and password) that
              were created for them by their teacher or parent. When students use
              Slonig, they are doing so under an account that is managed and controlled
              by an authorized adult.
            </p>

            <h3>3. What Information Do We Have About Students?</h3>
            <p>
              The information we have about students is provided to us by teachers,
              school administrators, or parents. This information includes:
            </p>
            <ul>
              <li>
                <strong>Information Provided by Teachers or Parents:</strong> Student
                first name and last name, grade level, school name (for school-based
                accounts), username (created by the teacher or parent), and password
                (set by the teacher or parent).
              </li>
              <li>
                <strong>Information Collected Automatically During Platform Use:</strong>
                As students use Slonig to learn and practice their skills, we
                automatically collect certain technical information and learning data.
                This includes student performance data showing how students are
                progressing through activities and exercises, IP address for security
                and technical purposes, browser and device information to ensure the
                platform works properly, and information about which activities students
                complete and how they interact with the platform.
              </li>
            </ul>

            <h3>4. Single Sign-On (SSO) Integration</h3>
            <p>
              Many schools and districts use Single Sign-On platforms like Clever and
              ClassLink to simplify account creation and management. When your school
              enables SSO integration, the district administrator authorizes a secure
              connection between your school's Student Information System and Slonig.
              Student and teacher information is then transmitted automatically to
              create and update accounts, and changes in enrollment or class assignments
              sync automatically without requiring manual updates.
            </p>

            <p>
              Through SSO, we receive only the minimum data necessary to create and
              maintain functional accounts. For students, this includes first and last
              name, grade level, school name, class assignments, username, and a student
              ID that is used only for internal matching and is never displayed to
              users. For teachers, we receive first and last name, email address, school
              name, class assignments, and their role within the school.
            </p>

            <p>
              We do not receive Social Security Numbers, student home addresses or phone
              numbers, parent or guardian contact information (unless separately
              provided through other means), detailed academic records or transcripts,
              disciplinary records, medical or health information, or free/reduced lunch
              status through SSO systems.
            </p>

            <p>
              Your school or district maintains complete control over SSO integration.
              Districts can choose to share only specific schools, grade levels, or
              classes with Slonig, control which specific data fields are shared through
              platform settings, and revoke Slonig’s access at any time. All data
              transfers between the SSO platform and Slonig use industry-standard
              encryption (TLS 1.2 or higher), and secure authentication protocols verify
              the identity of users accessing Slonig.
            </p>

            <p>
              Schools are not required to use SSO. Manual options remain available,
              including CSV file upload where district administrators can upload roster
              files directly to Slonig, manual account creation where teachers can
              create student accounts individually through the Slonig interface, or
              hybrid approaches where some schools may use SSO for certain grades or
              classes while managing others manually.
            </p>

            <p>
              Parents and guardians maintain all rights regarding their children's
              information even when accounts are created through SSO. Parents and
              guardians have the right to access and review your child's information at
              any time, request corrections to inaccurate information, and request
              deletion of your child's account and data.
            </p>

            <h3>5. How We Use Student Information</h3>
            <p>
              We use student information only for educational purposes to help students
              study effectively. Specifically, we use student information to provide
              access to the Slonig learning platform, personalize learning experiences
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

            <h3>6. Who Can See Student Information?</h3>
            <p>
              Student information is shared only with authorized parties who need access
              to provide educational services. The student's teacher or parent who
              manages their account can see their progress and performance. School or
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

            <h3>7. We Never Sell Student Information</h3>
            <p>
              Slonig does not sell, trade, or rent student information to anyone. We do
              not share student information with third parties for their marketing
              purposes. We do not allow any advertising on the student-facing parts of
              our platform.
            </p>

            <h3>8. How We Protect Student Information</h3>
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

            <h3>9. Product Safeguards for Student Users</h3>
            <p>
              Beyond technical security measures, we have designed our website and
              platform with specific safeguards to protect students while they learn.
            </p>

            <p><strong>Private Learning Environment:</strong></p>
            <p>
              Slonig provides a private, focused learning environment where students
              interact only with educational content. We do not enable any social
              interactions between students within the platform. Students cannot
              message, chat with, or communicate with other students through Slonig.
              Students cannot post information publicly or share content with other
              students. Students cannot see other students' profiles, progress, or
              personal information.
            </p>

            <p>
              When students log into Slonig, they work independently on their activities
              in a safe, distraction-free environment. Student accounts are created and
              managed by educators or parents, and once students are using the product,
              they interact solely with the educational content itself, not with other
              users.
            </p>

            <p>
              This design ensures that students can focus on learning without exposure
              to social media-style features, peer pressure, or potential safety
              concerns associated with student-to-student interactions. Please note that
              this policy applies only to interactions within the Slonig platform and
              does not prevent or control what users may post on other websites or
              services outside of Slonig.
            </p>

            <h3>10. Parental Consent</h3>
            <p>
              Before student accounts can be created on our website, we require consent
              from authorized parties.
            </p>

            <p>
              <strong>For school-based accounts:</strong> Schools and districts that
              obtain licenses to use Slonig act as the authorized party providing
              consent on behalf of parents and guardians. Individual teachers creating
              accounts within their school must have authorization from their school or
              district. We follow the necessary steps to confirm proper authorization to
              set up student accounts.
            </p>

            <p>
              <strong>For homeschool accounts:</strong> Parents or legal guardians must
              create the account themselves, providing verifiable consent through the
              account creation process. Parents provide consent by creating and managing
              their children's accounts directly.
            </p>

            <h3>11. Student Rights and Parent/Guardian Rights</h3>
            <p>
              <strong>For School-Based Accounts:</strong> Parents or guardians have the
              right to review their child's information and progress data, request
              corrections to inaccurate information, request deletion of their child's
              account and information, receive a copy of their child's information, and
              refuse further collection or use of their child's information. Parents
              should contact their child's school or district to exercise these rights,
              or they may contact Slonig directly. Teachers and administrators can also
              help students and parents access and manage student information within
              their authorized scope.
            </p>

            <p>
              <strong>For Homeschool Accounts:</strong> Parents who manage their child's
              homeschool account have the right to review, correct, update, delete, or
              receive a copy of their child's information at any time. Parents can do
              this through their account settings or by contacting Slonig directly.
            </p>

            <h3>12. Slonig as a School Official Under FERPA</h3>
            <p>
              When schools and districts use Slonig, we may act as a "school official"
              under the Family Educational Rights and Privacy Act (FERPA). This means:
            </p>

            <p><strong>Our Role:</strong> Slonig performs institutional services and functions that the school would otherwise perform itself, specifically providing educational technology services and learning analytics.</p>
            <p><strong>Legitimate Educational Interest:</strong> We access student education records only to fulfill our specific responsibilities in providing the Slonig learning platform and supporting student learning outcomes.</p>
            <p><strong>Direct Control:</strong> Schools and districts maintain direct control over our use of student education records. We use student information only as directed by the school and in accordance with our service agreement.</p>

            <p><strong>FERPA Compliance:</strong> We comply with FERPA's requirements applicable to school officials, including:</p>
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

            <h3>13. How Long We Keep Student Information</h3>
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
              <strong>After a Parent Closes a Homeschool Account:</strong> When a parent
              closes their homeschool account, we delete the associated student
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

            <h3>14. Third-Party Services We Use</h3>
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

            <h3>15. Business Transfer</h3>
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

            <h3>16. Cookies and Tracking</h3>
            <p>
              Like many websites, Slonig uses cookies (small data files) to help the
              platform work properly. We use cookies to remember login information, keep
              students logged in during their session, ensure security and prevent
              unauthorized access, understand technical issues and improve the platform,
              and remember settings and preferences.
            </p>

            <p>
              We do not use cookies to track students across other websites. We do not
              use cookies for advertising purposes. Parents and schools can manage
              cookie settings through their browser, though this may affect how the
              platform works.
            </p>

            <h3>17. Changes to This Policy</h3>
            <p>
              We may update this Student Privacy Policy from time to time. When we make
              changes, we will update the "Last updated" date at the top of this policy
              and post an announcement on our website for at least two weeks. If we make
              significant changes that affect how we collect, use, or share student
              information, we will notify schools and parents in advance.
            </p>

            <h3>18. Data Breach Notification</h3>
            <p>
              In the unlikely event of a data breach affecting student information, we
              will notify the school or district (for school-based accounts) or parents
              (for homeschool accounts) within 24 hours. The notification will include
              what information was affected, what happened, and what steps we are taking
              to address the breach and protect student information.
            </p>

            <h3>19. Leaderboard Feature</h3>
            <p>
              Slonig offers an optional Leaderboard feature designed to encourage
              positive classroom engagement while protecting student privacy.
            </p>

            <p>
              Participation in the Leaderboard is at the class level, not the individual
              student level. The Leaderboard displays a single, combined score based on
              aggregated class performance data. We never calculate, display, or share
              individual student scores or personal information on the Leaderboard.
            </p>

            <p>
              To ensure privacy, all participating classes are assigned a system-generated,
              anonymous name instead of real school, teacher, or class names. The
              Leaderboard displays only the state-level location of participating
              classes, without any school, district, teacher, or student identifiers.
              Leaderboards are only visible to authorized, logged-in users (students and
              teachers) on our platform.
            </p>

            <p>
              The data collected for the Leaderboard is used only for this feature's
              functionality and is never sold or shared with third parties for marketing
              or advertising purposes. This feature is completely optional, and teachers
              have full control and can opt out their class at any time by emailing us.
              Upon opting out, the class is immediately removed from all Leaderboards,
              and its data is no longer displayed.
            </p>

            <h3>20. Questions and Contact Information</h3>
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