import React from 'react'
import Head from 'next/head'
// import Custom Components
import Header from './layouts/sections/slonigiraf/header'
import { Container, Row } from 'reactstrap'
import FooterSection from './layouts/sections/slonigiraf/footer'

const Policy = () => {
  return (
    <div className="theme-color">
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy of DAMRI DOO" />
      </Head>

      <Header className="agency" />

      <section className="agency header">
        <Container>
          <Row style={{ marginTop: "150px", marginBottom: "50px", textAlign: "left" }}>
            <h3>Privacy Policy</h3>
            <p>Effective date: 2025.09.04</p>

            <p>
              At <strong>DAMRI DOO</strong>, we are committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard information in accordance with global data protection
              laws, including the General Data Protection Regulation (GDPR),
              child-specific provisions of GDPR (GDPR-K), the California
              Consumer Privacy Act (CCPA), and the Children’s Online Privacy
              Protection Act (COPPA).
            </p>

            <h4>1. Information We Collect</h4>
            <p>We may collect and process the following limited technical data:</p>
            <ul>
              <li>
                Technical data (browser type, device information, etc.)
              </li>
              <li>
                Usage data (pages visited, time on site, interactions, etc.)
              </li>
            </ul>
            <p>
              IP addresses are anonymized (the last two bytes are masked). We do
              not use tracking cookies or collect persistent identifiers.
            </p>
            <p>
              We do <strong>not</strong> collect personal information such as
              names, email addresses, or contact details.
            </p>

            <h4>2. How We Use Information</h4>
            <p>We use technical and usage data only to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Understand and analyze how visitors use our website</li>
            </ul>

            <h4>2a. Legal Basis (GDPR)</h4>
            <p>
              Under GDPR, the legal basis for processing this limited technical data is our
              legitimate interest in understanding website usage and ensuring service
              functionality. We configure Matomo to avoid collecting personal data or
              persistent identifiers, which means tracking is anonymous and cannot be linked
              to individual users.
            </p>

            <h4>3. Children’s Privacy</h4>
            <p>
              Our services are accessible to children. To comply with GDPR-K and
              COPPA, we configure analytics to avoid collecting personal data or
              persistent identifiers from children. All collected data is fully
              anonymized and cannot be used to identify or track individual
              users across sessions or devices.
            </p>

            <h4>4. Changes to This Policy</h4>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and the effective date will be
              updated accordingly.
            </p>

            <h4>5. Contact Us</h4>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:reshetovdenis@gmail.com"
                style={{ textTransform: "none" }}
              >
                reshetovdenis@gmail.com
              </a>
            </p>
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