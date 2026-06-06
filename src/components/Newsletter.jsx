import React from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h1>Never Miss an Opportunity to Learn</h1>

        <p>
          Subscribe to our newsletter and receive weekly curated articles,
          learning tips, and exclusive resources directly to your inbox.
        </p>

        <div className="newsletter-form">
          <div className="newsletter-input">
            <Mail size={22} color="black"/>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <button>
            Subscribe
            <ArrowRight size={20} />
          </button>
        </div>

        <small>
          No spam, just valuable content. Unsubscribe anytime.
        </small>
      </div>
    </section>
  );
}