import LegalWrapper from "@/components/Legal/LegalWrapper";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
  title: "Terms of Use",
};

const TermsOfUse = () => {
  return (
    <>
      <Navbar />
      <LegalWrapper title="Terms of Use" lastUpdated="October 25, 2025">
        <section className="space-y-6">
          <p>
            By accessing <strong>CINEMATix</strong>, you agree to be bound by
            these Terms of Use. If you do not agree to these terms, please do
            not use our services.
          </p>

          <h3 className="text-xl font-bold text-white">
            1. Educational Purpose
          </h3>
          <p>
            CINEMATix is a personal portfolio project created for educational
            purposes. It is not a commercial product. The features provided are
            for demonstration of technical skills.
          </p>

          <h3 className="text-xl font-bold text-white">
            2. Movie Data & Attribution
          </h3>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="mb-2">
              This product uses the <strong>TMDB API</strong> but is not
              endorsed or certified by TMDB.
            </p>
            <p>
              All movie metadata, images, and content are provided by{" "}
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                className="text-primary hover:underline"
              >
                The Movie Database (TMDB)
              </a>
              . We do not claim ownership of any movie content displayed.
            </p>
          </div>

          <h3 className="text-xl font-bold text-white">3. User Conduct</h3>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5">
            <li>Use the service for any illegal purpose.</li>
            <li>Attempt to exploit, spam, or overload the API.</li>
            <li>Scrape or copy data from the website without permission.</li>
          </ul>

          <h3 className="text-xl font-bold text-white">4. Disclaimer</h3>
          <p>
            The service is provided "as is" without warranties of any kind. We
            do not guarantee that the service will be uninterrupted or
            error-free.
          </p>
        </section>
      </LegalWrapper>
    </>
  );
};

export default TermsOfUse;
