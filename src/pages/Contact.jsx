import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Loader2,
} from "lucide-react";
import PageWrapper from "../components/layout/PageWrapper";
import SectionHeader from "../components/shared/SectionHeader";

/**
 * Contact — Form · Offices · Map · Social
 * The form is the primary action; offices and social links are secondary
 * paths for people who'd rather not fill out a form. Map is an abstract
 * illustrated locator rather than an embedded Google Maps iframe, since
 * that would need a real API key and real office coordinates neither of
 * which exist for this fictional company.
 */

const OFFICES = [
  { city: "London", address: "14 Fenwick Street, London EC2A 4DP, UK", timezone: "GMT+0" },
  { city: "Singapore", address: "88 Market Street, #24-01, Singapore 048948", timezone: "GMT+8" },
  { city: "New York", address: "225 Liberty Street, New York, NY 10281, USA", timezone: "GMT-5" },
  { city: "Bengaluru", address: "Prestige Tech Park, Bengaluru 560103, India", timezone: "GMT+5:30" },
];

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "X (Twitter)", href: "https://twitter.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const inputClasses =
  "w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] px-4 py-3 text-sm text-[color:var(--color-text-primary)] placeholder:text-[color:var(--color-text-muted)] transition-colors duration-200 focus:border-[color:var(--color-brand-500)] focus:outline-none";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | submitted

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Wire up to a real endpoint (form service, serverless function, CRM) when one exists.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("submitted");
  };

  return (
    <PageWrapper
      title="Contact"
      description="Get in touch with Tec Tha — offices, contact form, and direct lines."
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            overline="Contact"
            title="Tell us what you're working on"
            subtitle="A person reads every message here — usually within one business day."
            align="left"
          />

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
            >
              {status === "submitted" ? (
                <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-brand-50)] dark:bg-white/5">
                    <Mail className="h-6 w-6 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[color:var(--color-text-primary)]">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-[color:var(--color-text-secondary)]">
                    Thanks for reaching out. Expect a reply within one
                    business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-[color:var(--color-text-primary)]">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange("name")}
                        placeholder="Jordan Reyes"
                        className={`${inputClasses} mt-2`}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-[color:var(--color-text-primary)]">
                        Work email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange("email")}
                        placeholder="jordan@company.com"
                        className={`${inputClasses} mt-2`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-[color:var(--color-text-primary)]">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange("company")}
                      placeholder="Company name"
                      className={`${inputClasses} mt-2`}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-[color:var(--color-text-primary)]">
                      What are you working on?
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder="A sentence or two is plenty to start."
                      className={`${inputClasses} mt-2 resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-7 py-4 text-sm font-semibold text-white shadow-[0_0_32px_-10px_rgba(99,102,241,0.6)] transition-shadow duration-300 hover:shadow-[0_0_44px_-8px_rgba(99,102,241,0.75)] disabled:opacity-70 sm:w-auto"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Direct lines + abstract locator */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.12}
              className="space-y-6"
            >
              <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-text-muted)]">
                  Direct
                </p>
                <div className="mt-5 space-y-4">
                  <a href="mailto:hello@Tec Tha.example" className="flex items-center gap-3 text-sm text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]">
                    <Mail className="h-4 w-4 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                    hello@Tec Tha.example
                  </a>
                  <a href="tel:+18005550142" className="flex items-center gap-3 text-sm text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]">
                    <Phone className="h-4 w-4 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                    +1 (800) 555-0142
                  </a>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-[color:var(--color-border)] pt-6">
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

              {/* Abstract locator graphic — no external map API dependency */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-secondary)]">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                  aria-hidden="true"
                />
                {[
                  { top: "30%", left: "22%" },
                  { top: "55%", left: "68%" },
                  { top: "70%", left: "38%" },
                  { top: "40%", left: "80%" },
                ].map((pos, i) => (
                  <span
                    key={i}
                    style={{ top: pos.top, left: pos.left }}
                    className="absolute flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED]"
                  >
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#2563EB]/50" />
                  </span>
                ))}
                <p className="absolute bottom-4 left-4 text-xs font-medium text-[color:var(--color-text-muted)]">
                  4 delivery hubs shown
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-[color:var(--color-bg-secondary)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader overline="Offices" title="Where to find us" align="left" />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((office, i) => (
              <motion.div
                key={office.city}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={i * 0.08}
                className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-7"
              >
                <MapPin className="h-5 w-5 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                <h3 className="mt-5 text-lg font-semibold text-[color:var(--color-text-primary)]">
                  {office.city}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                  {office.address}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[color:var(--color-text-muted)]">
                  {office.timezone}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;