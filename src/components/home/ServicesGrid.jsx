import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  ShieldCheck,
  Workflow,
  Boxes,
  LineChart,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

/**
 * ServicesGrid — Home Section 4
 * Uniform 3x2 grid, scannable by design — unlike Innovation's asymmetric
 * bento layout, every cell here carries equal weight because services
 * are meant to be compared, not ranked.
 */

const SERVICES = [
  {
    icon: Cloud,
    title: "Enterprise Software",
    description:
      "Custom CRM, ERP, database architectures, and SaaS engines built with enterprise-grade durability.",
  },
  {
    icon: Database,
    title: "AI Integration & Agentics",
    description:
      "Deploying custom agent pipelines, secure data parsing, and predictive automation models.",
  },
  {
    icon: Workflow,
    title: "Cloud & Infrastructure",
    description:
      "Scalable multi-cloud engineering, continuous deployment paths, and state-of-the-art security compliance.",
  },
  {
    icon: ShieldCheck,
    title: "UI/UX & Product Design",
    description:
      "Designing intuitive client dashboards, modern SaaS UI systems, and highly engaging user journeys.",
  },
  {
    icon: Boxes,
    title: "Brand & Demand Strategy",
    description:
      "Data-backed B2B positioning, lead capture funnels, and corporate identity expansion.",
  },
  {
    icon: LineChart,
    title: "Digital Advisory",
    description:
      "IT audits, system feasibility studies, tech stack optimization, and cloud spend advisory.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const ServicesGrid = () => {
  return (
    <section className="bg-[color:var(--color-bg-secondary)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          overline="Services"
          title={
            <>
              Six practices, one
              <br className="hidden sm:block" /> delivery standard.
            </>
          }
          subtitle="Each service is staffed and scoped independently, but every engagement runs on the same delivery discipline."
          align="left"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={(i % 3) * 0.08}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(37,99,235,0.25)]"
              >
                {/* Gradient border reveal on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    padding: 1,
                    background:
                      "linear-gradient(135deg, #2563EB, #7C3AED)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                  aria-hidden="true"
                />

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-brand-50)] transition-colors duration-300 group-hover:bg-[color:var(--color-brand-600)] dark:bg-white/5">
                    <Icon className="h-5.5 w-5.5 text-[color:var(--color-brand-600)] transition-colors duration-300 group-hover:text-white dark:text-[color:var(--color-brand-400)]" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[color:var(--color-text-primary)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                    {service.description}
                  </p>
                </div>

                <a
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text-primary)]"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;