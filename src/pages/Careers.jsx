import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  GraduationCap,
  Globe2,
  PiggyBank,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import PageWrapper from "../components/layout/PageWrapper";
import SectionHeader from "../components/shared/SectionHeader";
import ContactCTA from "../components/home/ContactCTA";

/**
 * Careers — Culture · Open Roles · Benefits · Apply
 * Practical rather than aspirational: benefits are concrete, roles are
 * filterable by department, and the apply flow is a direct mailto rather
 * than a fake multi-step form (no ATS exists yet for this fictional site).
 */

const BENEFITS = [
  {
    icon: PiggyBank,
    title: "Equity from day one",
    description: "Every full-time hire receives equity, not just leadership.",
  },
  {
    icon: Heart,
    title: "Full health coverage",
    description: "Medical, dental, and vision covered in full for you and dependents.",
  },
  {
    icon: GraduationCap,
    title: "Learning budget",
    description: "$3,000 a year for courses, conferences, or certifications, no approval chain.",
  },
  {
    icon: Globe2,
    title: "Work from any hub",
    description: "Rotate between our six delivery hubs, or work remote within your region.",
  },
];

const DEPARTMENTS = ["All", "Engineering", "Data", "Design", "Operations"];

const OPEN_ROLES = [
  { title: "Senior Platform Engineer", department: "Engineering", location: "Remote — EMEA", type: "Full-time" },
  { title: "Staff Data Engineer", department: "Data", location: "Singapore", type: "Full-time" },
  { title: "Cloud Security Architect", department: "Engineering", location: "Remote — Americas", type: "Full-time" },
  { title: "Product Designer, Platforms", department: "Design", location: "London", type: "Full-time" },
  { title: "Delivery Lead", department: "Operations", location: "Bengaluru", type: "Full-time" },
  { title: "Machine Learning Engineer", department: "Data", location: "Remote — Global", type: "Contract" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Careers = () => {
  const [activeDept, setActiveDept] = useState("All");

  const filteredRoles = useMemo(
    () =>
      activeDept === "All"
        ? OPEN_ROLES
        : OPEN_ROLES.filter((role) => role.department === activeDept),
    [activeDept]
  );

  return (
    <PageWrapper
      title="Careers"
      description="Open roles, benefits, and culture at Tec Tha's enterprise technology consulting practice."
    >
      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]"
          >
            Careers
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.08}
            className="mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--color-text-primary)]"
          >
            Work that ships, on teams that stay small.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.16}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-text-secondary)]"
          >
            We hire senior people and trust them with real scope. If you'd
            rather own a hard problem than sit in a review queue, this is
            probably the right room.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[color:var(--color-bg-secondary)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader overline="Benefits" title="What you get, concretely" align="left" />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={i * 0.08}
                  className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] dark:bg-white/5">
                    <Icon className="h-5 w-5 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-[color:var(--color-text-primary)]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader overline="Open Roles" title="Current openings" align="left" />

          <div className="mt-10 flex flex-wrap gap-2">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeDept === dept
                    ? "border-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white"
                    : "border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] hover:border-[color:var(--color-brand-500)]"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="mt-8 divide-y divide-[color:var(--color-border)] rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)]">
            {filteredRoles.map((role) => (
              <a
                key={role.title}
                href={`mailto:careers@Tec Tha.example?subject=${encodeURIComponent(
                  `Application: ${role.title}`
                )}`}
                className="group flex flex-col gap-3 p-6 transition-colors duration-200 hover:bg-[color:var(--color-bg-secondary)] sm:flex-row sm:items-center sm:justify-between sm:p-7"
              >
                <div>
                  <p className="text-lg font-semibold text-[color:var(--color-text-primary)]">
                    {role.title}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[color:var(--color-text-muted)]">
                    <span>{role.department}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {role.location}
                    </span>
                    <span>{role.type}</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text-primary)]">
                  Apply
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            ))}

            {filteredRoles.length === 0 && (
              <p className="p-8 text-center text-sm text-[color:var(--color-text-muted)]">
                No open roles in this department right now.
              </p>
            )}
          </div>

          <p className="mt-6 text-sm text-[color:var(--color-text-muted)]">
            Don't see the right fit?{" "}
            <a
              href="mailto:careers@Tec Tha.example?subject=General%20Interest"
              className="font-medium text-[color:var(--color-brand-600)] underline underline-offset-4 dark:text-[color:var(--color-brand-400)]"
            >
              Reach out anyway
            </a>
            .
          </p>
        </div>
      </section>

      <ContactCTA />
    </PageWrapper>
  );
};

export default Careers;