import LegalWrapper from "@/components/Legal/LegalWrapper";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
  title: "Terms & Conditions",
};

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <LegalWrapper title="Terms & Conditions" lastUpdated="October 25, 2025">
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-white">
            1. Acceptance of Terms
          </h3>
          <p>
            By creating an account or using CINEMATix, you agree to comply with
            these terms. We reserve the right to update these terms at any time.
          </p>

          <h3 className="text-xl font-bold text-white">2. User Accounts</h3>
          <p>
            To access certain features (like Watchlist), you must register via
            our Auth providers. You are responsible for maintaining the
            confidentiality of your account login information.
          </p>

          <h3 className="text-xl font-bold text-white">3. Content Ownership</h3>
          <p>
            You retain ownership of the watchlists you create. However, by
            making them "Public", you grant CINEMATix a license to display them
            to other users.
          </p>

          <h3 className="text-xl font-bold text-white">4. Termination</h3>
          <p>
            We reserve the right to suspend or terminate your account at our
            sole discretion, without notice, for conduct that we believe
            violates these Terms or is harmful to other users, us, or third
            parties, or for any other reason.
          </p>

          <h3 className="text-xl font-bold text-white">5. Governing Law</h3>
          <p>
            These terms shall be governed by the laws of Indonesia, without
            regard to its conflict of law provisions.
          </p>
        </section>
      </LegalWrapper>
    </>
  );
};

export default TermsAndConditions;
