import React from 'react';
import Link from 'next/link';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Carefinder Help Page</h1>
          <nav>
            <Link href="/" className="hover:underline mr-12">
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg">
            Welcome to the Carefinder Help Page! Here you&apos;ll find answers
            to frequently asked questions, guides on how to use our features,
            and ways to contact us for further support.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">General Questions</h3>
              <div className="mt-2">
                <p>
                  <strong>What is Carefinder?</strong>
                </p>
                <p>
                  Carefinder is a platform that allows users to search for
                  hospitals within Nigerian states, providing details such as
                  contact information and addresses.
                </p>
              </div>
              <div className="mt-2">
                <p>
                  <strong>How do I create an account?</strong>
                </p>
                <p>
                  Click on the &quot;Sign Up&quot; button at the top right
                  corner of the homepage and follow the instructions to create
                  an account.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Searching for Hospitals</h3>
              <div className="mt-2">
                <p>
                  <strong>
                    How do I search for hospitals by state and city?
                  </strong>
                </p>
                <p>
                  Use the search bar on the homepage, select your desired state
                  and city from the dropdown menus, and click
                  &quot;Search.&quot;
                </p>
              </div>
              <div className="mt-2">
                <p>
                  <strong>Can I filter search results?</strong>
                </p>
                <p>
                  Yes, you can filter results based on categories and other
                  criteria available on the search results page.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Adding and Managing Entries</h3>
              <div className="mt-2">
                <p>
                  <strong>How do I add a new hospital entry?</strong>
                </p>
                <p>
                  Sign Up as an admin and navigate to the &quot;Add
                  Hospital&quot; page from your dashboard, fill out the form
                  with the hospital details, and submit.
                </p>
              </div>
              <div className="mt-2">
                <p>
                  <strong>How can I edit or delete an existing entry?</strong>
                </p>
                <p>
                  Go to your profile, find the hospital entry you want to edit
                  or delete, and use the provided options to make changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">User Guides</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Getting Started</h3>
              <p className="mt-2">
                Follow our{' '}
                <Link
                  href="/getting-started"
                  className="text-blue-900 hover:underline"
                >
                  Getting Started Guide
                </Link>{' '}
                to learn how to use Carefinder for the first time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Using the Search Feature</h3>
              <p className="mt-2">
                Learn how to use the search feature effectively with our{' '}
                <Link
                  href="/search-guide"
                  className="text-blue-900 hover:underline"
                >
                  Search Guide
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Submitting New Entries</h3>
              <p className="mt-2">
                Find out how to submit new hospital entries with our{' '}
                <Link
                  href="/submission-guide"
                  className="text-blue-900 hover:underline"
                >
                  Submission Guide
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Troubleshooting</h2>
          <p className="text-lg">
            If you are experiencing issues with the search feature, ensure you
            have selected both the state and city correctly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg">
            If you need additional help or have any questions, please reach out
            to our support team at{' '}
            <Link
              href="mailto:priscaonyemaechi26@gmail.com"
              className="text-blue-900 hover:underline"
            >
              support@example.com
            </Link>{' '}
            or use the{' '}
            <Link
              href="/contact-form"
              className="text-blue-900 hover:underline"
            >
              contact form
            </Link>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Feedback and Suggestions
          </h2>
          <p className="text-lg">
            We value your feedback! Please let us know if you have any
            suggestions or comments to help us improve Carefinder through our{' '}
            <Link
              href="/feedback-form"
              className="text-blue-900 hover:underline"
            >
              Feedback Form
            </Link>
            .
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Carefinder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
