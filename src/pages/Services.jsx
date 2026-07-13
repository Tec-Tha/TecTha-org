import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  ShieldCheck,
  Workflow,
  Boxes,
  LineChart,
  ArrowUpRight,
  Check,
} from "lucide-react";
import PageWrapper from "../components/layout/PageWrapper";
import SectionHeader from "../components/shared/SectionHeader";
import ContactCTA from "../components/home/ContactCTA";

/**
 * Services — Grid overview · Deep-dive · Process
 * The overview grid is a quick jump menu (scrolls to the matching
 * deep-dive via anchor); the process section is the one place on this
 * page where numbered steps are justified, since it's a real sequence.
 */

const SERVICES = [
  {
    id: "cloud",
    icon: Cloud,
    title: "Enterprise Software",
    summary: "Custom CRM, ERP, database architectures, and SaaS engines built with enterprise-grade durability.",
    details: [
      "Legacy ERP Migrations",
      "Custom Inventory Control",
      "Distributed Databases",
    ],
  },
  {
    id: "data",
    icon: Database,
    title: "AI Integration & Agentics",
    summary: "Deploying custom agent pipelines, secure data parsing, and predictive automation models.",
    details: [
      "Agentic Workflow Automation",
      "Predictive Inventory Systems",
      "Custom LLM Fine-Tuning",
    ],
  },
  {
    id: "ai",
    icon: Workflow,
    title: "Cloud & Infrastructure",
    summary: "Scalable multi-cloud engineering, continuous deployment paths, and state-of-the-art security compliance.",
    details: [
      "AWS / GCP Architecture",
      "Automated DevOps CI/CD",
      "Infrastructure as Code",
    ],
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "UI/UX & Product Design",
    summary: "Designing intuitive client dashboards, modern SaaS UI systems, and highly engaging user journeys.",
    details: [
      "Custom UX Auditing",
      "Global Design Systems",
      "Web & Mobile Interfaces",
    ],
  },
  {
    id: "platform",
    icon: Boxes,
    title: "Brand & Demand Strategy",
    summary: "Data-backed B2B positioning, lead capture funnels, and corporate identity expansion.",
    details: [
      "Corporate Re-Positioning",
      "B2B Demand Generation",
      "Account Based Marketing",
    ],
  },
  {
    id: "strategy",
    icon: LineChart,
    title: "Digital Advisory",
    summary: "IT audits, system feasibility studies, tech stack optimization, and cloud spend advisory.",
    details: [
      "Technical Audits",
      "Compute Resource Optimization",
      "Tech Feasibility Studies",
    ],
  },
];

const PROCESS = [
  { step: "01", title: "Discover", description: "Two weeks embedded with your team to understand the real constraints — technical, organizational, and political." },
  { step: "02", title: "Scope", description: "A fixed-scope plan with visible milestones. You see exactly what ships and when, before any commitment." },
  { step: "03", title: "Build", description: "Senior engineers deliver in two-week increments, with something demonstrable at the end of each one." },
  { step: "04", title: "Handover", description: "Documentation and training scoped to make your team self-sufficient — not dependent on us." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Services = () => {
  return (
    <PageWrapper
      title="Services"
      description="Cloud, data, AI, security, platform engineering, and digital strategy consulting."
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
            Services
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.08}
            className="mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--color-text-primary)]"
          >
            Bespoke Enterprise Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.16}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-text-secondary)]"
          >
           We design, develop, deploy, and verify complex technical systems for global operations.
          </motion.p>
        </div>
      </section>

      {/* Overview grid — jumps to the matching deep-dive below */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.a
                  key={service.id}
                  href={`#${service.id}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={(i % 3) * 0.08}
                  className="group flex flex-col justify-between rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(37,99,235,0.25)]"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-brand-50)] transition-colors duration-300 group-hover:bg-[color:var(--color-brand-600)] dark:bg-white/5">
                      <Icon className="h-5.5 w-5.5 text-[color:var(--color-brand-600)] transition-colors duration-300 group-hover:text-white dark:text-[color:var(--color-brand-400)]" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[color:var(--color-text-primary)]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                      {service.summary}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text-primary)]">
                    Read more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep-dive sections */}
      <section className="bg-[color:var(--color-bg-secondary)] py-20 md:py-28">
        <div className="mx-auto max-w-5xl space-y-6 px-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                id={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0}
                className="scroll-mt-28 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-8 md:p-10"
              >
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-brand-50)] dark:bg-white/5">
                    <Icon className="h-5.5 w-5.5 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-[color:var(--color-text-primary)]">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                      {service.summary}
                    </p>
                    <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2.5 text-sm text-[color:var(--color-text-secondary)]"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Process — numbered steps are justified here: it's a real sequence */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader overline="Process" title="How an engagement actually runs" align="left" />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-4">
            {PROCESS.map((phase, i) => (
              <motion.div
                key={phase.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={i * 0.1}
                className="relative rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-7"
              >
                <span className="text-3xl font-bold tracking-tight text-[color:var(--color-brand-500)]/40">
                  {phase.step}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[color:var(--color-text-primary)]">
                  {phase.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </PageWrapper>
  );
};

export default Services;