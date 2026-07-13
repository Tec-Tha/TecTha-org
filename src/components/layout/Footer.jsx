import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Twitter, Github } from "lucide-react";
 
/**
 * Footer — closes every page. Four link columns, a lightweight newsletter
 * form, and legal/copyright. Deliberately calm relative to the rest of the
 * site — no gradients or motion here, just structure.
 */
 
const FOOTER_COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Insights", to: "/insights" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Cloud & Infrastructure", to: "/services#cloud" },
      { label: "Data & Analytics", to: "/services#data" },
      { label: "AI Transformation", to: "/services#ai" },
      { label: "Security & Compliance", to: "/services#security" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Financial Services", to: "/industries#financial-services" },
      { label: "Healthcare", to: "/industries#healthcare" },
      { label: "Retail & Consumer", to: "/industries#retail" },
      { label: "Public Sector", to: "/industries#public-sector" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Security", to: "/security" },
    ],
  },
];
 
const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "X (Twitter)", href: "https://twitter.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];
 
const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitted
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Wire up to a real subscription endpoint when one exists.
    setStatus("submitted");
    setEmail("");
  };
 
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-bold tracking-tight text-[color:var(--color-text-primary)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-sm font-extrabold text-white">
                V
              </span>
              Tec Tha
            </Link>
 
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
              Enterprise technology consulting for organizations that need
              systems to survive contact with reality.
            </p>
 
            <form onSubmit={handleSubmit} className="mt-8 max-w-sm">
              <label
                htmlFor="footer-newsletter-email"
                className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-text-muted)]"
              >
                Get occasional insights, no noise
              </label>
              <div className="mt-3 flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-1.5 pl-4">
                <input
                  id="footer-newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-transparent text-sm text-[color:var(--color-text-primary)] placeholder:text-[color:var(--color-text-muted)] focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white transition-transform duration-300 hover:scale-105"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p
                className="mt-2 min-h-[1rem] text-xs text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]"
                role="status"
              >
                {status === "submitted" && "Subscribed — welcome aboard."}
              </p>
            </form>
          </div>
 
          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 md:col-span-8">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.heading}>
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-text-muted)]">
                  {column.heading}
                </p>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-[color:var(--color-text-secondary)] transition-colors duration-200 hover:text-[color:var(--color-text-primary)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
 
        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-6 border-t border-[color:var(--color-border)] pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-[color:var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} Tec Tha. All rights reserved.
          </p>
 
          <div className="flex items-center gap-4">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] transition-colors duration-200 hover:border-[color:var(--color-brand-500)] hover:text-[color:var(--color-brand-600)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;