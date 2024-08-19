'use client';

import React from 'react';
import AdminHeader from '../../components/AdminHeader';
import Footer from '../../components/Footer';
export default function TermsAndConditions() {
  return (
    <>
      <AdminHeader />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg mt-32">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">
            Terms and Conditions
          </h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              1. Introduction
            </h2>
            <p className="text-gray-700">
              Welcome to Carefinder! These terms and conditions outline the
              rules and regulations for the use of our website and services. By
              accessing or using Carefinder, you agree to comply with and be
              bound by these terms.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              2. User Agreement
            </h2>
            <p className="text-gray-700">
              By accessing this website, we assume you accept these terms and
              conditions. Do not continue to use Carefinder if you do not agree
              to all of the terms and conditions stated on this page.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              3. Cookies
            </h2>
            <p className="text-gray-700">
              We employ the use of cookies. By accessing Carefinder, you agreed
              to use cookies in agreement with our Privacy Policy.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              4. License
            </h2>
            <p className="text-gray-700">
              Unless otherwise stated, Carefinder and/or its licensors own the
              intellectual property rights for all material on Carefinder. All
              intellectual property rights are reserved. You may access this
              from Carefinder for your own personal use subjected to
              restrictions set in these terms and conditions.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              5. User Comments
            </h2>
            <p className="text-gray-700">
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              Carefinder does not filter, edit, publish or review Comments prior
              to their presence on the website. Comments do not reflect the
              views and opinions of Carefinder, its agents, and/or affiliates.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              6. Content Liability
            </h2>
            <p className="text-gray-700">
              We shall not be held responsible for any content that appears on
              your website. You agree to protect and defend us against all
              claims that are rising on your website. No link(s) should appear
              on any website that may be interpreted as libelous, obscene, or
              criminal.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              7. Your Privacy
            </h2>
            <p className="text-gray-700">Your data is safe with us.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              8. Reservation of Rights
            </h2>
            <p className="text-gray-700">
              We reserve the right to request that you remove all links or any
              particular link to our website. You approve to immediately remove
              all links to our website upon request.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              9. Changes to the Terms
            </h2>
            <p className="text-gray-700">
              Carefinder may revise these terms and conditions from time to
              time. By using this website, you agree to be bound by the current
              version of these terms and conditions.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
