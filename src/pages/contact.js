import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="mx-auto my-auto">
        <h1 className="text-6xl font-bold">Contact Us</h1>
      </section>
    </Layout>
  );
}

export default ContactPage;
