import React, { useEffect } from 'react'
import Head from 'next/head'
// import Custom Components
import Header from './layouts/sections/slonigiraf/header'
import { Container, Row, Col } from 'reactstrap'
import FooterSection from './layouts/sections/slonigiraf/footer'

const Policy = () => {

  return (
    <div className="theme-color" >
      <Head>
        <title>Privacy policy</title>
        <meta name='Privacy policy' content='' />
      </Head>

      <Header className="agency" />


      <section className="agency header">
        <Container>
          <Row style={{ marginTop: "150px", marginBottom: "50px", textAlign: 'left' }}>

            <h3>Privacy Policy</h3>
            <p>Effective date: 2025.05.18</p>

            <p>At <strong>DAMRI DOO</strong>, we are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, store, and disclose your personal information in accordance with global data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other applicable laws worldwide.</p>

            <h4>1. Information We Collect</h4>
            <p>We may collect and process the following data:</p>
            <ul>
              <li>Personal identification information (name, email address, phone number, etc.)</li>
              <li>Technical data (IP address, browser type, device information, etc.)</li>
              <li>Usage data (pages visited, time on site, interactions, etc.)</li>
              <li>Cookies and similar tracking technologies, including those from third-party services like Google Analytics and Yandex Metrica</li>
            </ul>

            <h4>2. How We Use Your Information</h4>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our website</li>
              <li>Communicate with you (e.g., for support or marketing purposes)</li>
              <li>Comply with legal obligations</li>
              <li>Analyze user behavior through third-party analytics tools (Google Analytics, Yandex Metrica)</li>
            </ul>

            <h4>3. Legal Basis for Processing</h4>
            <p>We process your personal data on one or more of the following legal bases:</p>
            <ul>
              <li>Your consent</li>
              <li>To perform a contract with you</li>
              <li>To comply with a legal obligation</li>
              <li>For our legitimate interests, provided your rights do not override them</li>
            </ul>

            <h4>4. Sharing Your Information</h4>
            <p>We do not sell your personal data. We may share data with:</p>
            <ul>
              <li>Service providers under strict confidentiality agreements</li>
              <li>Law enforcement or authorities if legally required</li>
              <li>Other parties with your consent</li>
            </ul>

            <h4>5. International Data Transfers</h4>
            <p>We may transfer your data to countries outside your own. In such cases, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.</p>

            <h4>6. Your Rights</h4>
            <p>You have the right to:</p>
            <ul>
              <li>Access your data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Withdraw consent at any time</li>
              <li>Data portability</li>
              <li>File a complaint with a data protection authority</li>
            </ul>

            <h4>7. Data Retention</h4>
            <p>We retain your personal data only as long as necessary to fulfill the purposes for which it was collected or to comply with legal obligations.</p>

            <h4>8. Cookies</h4>
            <p>We use cookies and similar tracking technologies to enhance your experience. These cookies may include analytics cookies set by third parties. You can manage your cookie preferences through your browser settings.</p>

            <h4>9. Children’s Privacy</h4>
            <p>Our services are not directed to children under the age of 13 (or the equivalent age in your jurisdiction). We do not knowingly collect personal data from children without parental consent.</p>

            <h4>10. Changes to This Policy</h4>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes and update the effective date at the top of this page.</p>

            <h4>11. Analytics and Third-Party Services</h4>
            <p>We use third-party services to analyze how visitors use our site and to improve our services:</p>

            <h5>Google Analytics</h5>
            <p>Google Analytics is a web analytics service provided by Google LLC. It uses cookies to track and report website traffic. The data collected is transmitted to and stored by Google on servers in the United States or other countries. Google may use this data for its own purposes, including to personalize ads.</p>
            <p>You can learn more at <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google's Partner Sites Policy</a>.</p>
            <p>You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>

            <h5>Yandex Metrica</h5>
            <p>Yandex Metrica is a web analytics service provided by Yandex LLC. It helps us understand user interactions through heatmaps, session replays, and traffic analysis. Collected data may include pages visited, actions taken, and geographic location.</p>
            <p>You can read more at <a href="https://yandex.com/legal/confidential/" target="_blank" rel="noopener noreferrer">Yandex’s Privacy Policy</a>.</p>
            <p>You can disable Yandex Metrica by using the <a href="https://yandex.com/support/metrica/general/opt-out.html" target="_blank" rel="noopener noreferrer">Yandex Metrica Opt-Out Tool</a>.</p>

            <h4>12. Contact Us</h4>
            <p>If you have questions or concerns about this policy, please contact us at:</p>
            <p>Email: <a href="mailto:reshetovdenis@gmail.com" style={{ textTransform: "none" }}>reshetovdenis@gmail.com</a></p>
            <p>Address: 85331, Kotor, Montenegro, Kriva bb</p>


          </Row>
          <Row>&nbsp;</Row>
        </Container>
      </section>

      <FooterSection />

    </div>
  )
}

export default Policy
