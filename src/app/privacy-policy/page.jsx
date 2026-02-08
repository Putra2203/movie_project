import LegalWrapper from "@/components/Legal/LegalWrapper";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <LegalWrapper title="Privacy Policy" lastUpdated="October 25, 2025">
        <section className="space-y-6">
          <p>
            Welcome to <strong>CINEMATix</strong>. We value your privacy and are
            committed to protecting your personal data. This privacy policy
            explains how we collect, use, and share information about you when
            you use our website.
          </p>

          <h3 className="text-xl font-bold text-white">
            1. Information We Collect
          </h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Account Information:</strong> When you sign up via
              Supabase Auth (Google/GitHub), we collect your email address,
              name, and profile picture avatar.
            </li>
            <li>
              <strong>Usage Data:</strong> We store your watchlists, favorites,
              and movie preferences to provide the service.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-white">
            2. How We Use Your Information
          </h3>
          <p>
            We use your information solely to:
            <br />- Provide, maintain, and improve the CINEMATix service.
            <br />- Personalize your experience (e.g., saving your watchlist).
            <br />- Authenticate your identity.
          </p>

          <h3 className="text-xl font-bold text-white">
            3. Third-Party Services
          </h3>
          <p>We use third-party services for various functions:</p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Supabase:</strong> For authentication and database
              hosting.
            </li>
            <li>
              <strong>TMDB (The Movie Database):</strong> For movie data and
              images.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-white">4. Cookies</h3>
          <p>
            We use cookies to maintain your session (keep you logged in). By
            using our site, you agree to the use of these necessary cookies.
          </p>

          <h3 className="text-xl font-bold text-white">5. Contact</h3>
          <p>
            If you have questions about this policy, please contact us via the
            GitHub repository or LinkedIn listed in the footer.
          </p>
        </section>
      </LegalWrapper>
    </>
  );
};

export default PrivacyPolicy;
