import { motion } from "framer-motion";
import {
  Landmark,
  HeartPulse,
  ShoppingBag,
  Factory,
  Zap,
  Building2,
  ArrowUpRight,
  Check,
} from "lucide-react";
import PageWrapper from "../components/layout/PageWrapper";
import SectionHeader from "../components/shared/SectionHeader";
import ContactCTA from "../components/home/ContactCTA";

/**
 * Industries — Vertical cards · Case study previews
 * The Home page's IndustriesScroll is a horizontal teaser; this page is
 * the destination it points to — full depth per vertical, plus a proof
 * point tied to each one.
 */

const INDUSTRIES = [
  {
    id: "financial-services",
    icon: Landmark,
    name: "Financial Services",
    description:
      "Core modernization, risk platforms, and compliance-grade data architecture for banks and asset managers operating under continuous regulatory scrutiny.",
    capabilities: ["Core banking migration", "Risk & compliance platforms", "Real-time fraud detection"],
    caseStudy: { client: "Ferro Capital Partners", result: "6x faster risk modeling" },
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    description:
      "Challenge: HIPAA data routing. Solution: Secure HL7 APIs & encrypted data schemas.",
    capabilities: ["Clinical data interoperability", "Patient record unification", "Regulatory reporting automation"],
    caseStudy: { client: "Aurellia Health Network", result: "2.1M patient records unified" },
  },
  {
    id: "retail",
    icon: ShoppingBag,
    name: "Retail & Consumer",
    description:
      "Unified commerce, inventory, and personalization engines engineered to hold up during peak demand rather than degrade under it.",
    capabilities: ["Real-time inventory sync", "Personalization engines", "Checkout & payments resilience"],
    caseStudy: { client: "Solace Retail Group", result: "+22% conversion lift" },
  },
  {
    id: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    description:
      "Connected plant-floor data and predictive maintenance layered onto existing industrial systems without a rip-and-replace of working hardware.",
    capabilities: ["Plant-floor data integration", "Predictive maintenance models", "Supply chain visibility"],
    caseStudy: { client: "Northbridge Logistics", result: "38% faster fulfillment cycle" },
  },
  {
    id: "energy",
    icon: Zap,
    name: "Energy & Utilities",
    description:
      "Grid telemetry, load forecasting, and asset management platforms built for infrastructure with multi-decade operational lifecycles.",
    capabilities: ["Grid telemetry platforms", "Demand forecasting", "Asset lifecycle management"],
    caseStudy: { client: "Meridian Grid Cooperative", result: "31% reduction in unplanned outages" },
  },
  {
    id: "public-sector",
    icon: Building2,
    name: "Public Sector",
    description:
      "Citizen-facing digital services and legacy system modernization delivered under strict procurement, security, and accessibility standards.",
    capabilities: ["Citizen service portals", "Legacy system modernization", "Accessibility & compliance audits"],
    caseStudy: { client: "State Department of Revenue", result: "60% drop in support call volume" },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Industries = () => {
  return (
    <PageWrapper
      title="Industries"
      description="Deep, regulated-industry experience across financial services, healthcare, retail, manufacturing, energy, and public sector."
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
            Industries
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.08}
            className="mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--color-text-primary)]"
          >
            Sectors We Transform
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.16}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-text-secondary)]"
          >
            We deploy custom technological solutions tailored to solve specific regulatory and logistical challenges.
          </motion.p>
        </div>
      </section>

      {/* Vertical cards */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-6">
            {INDUSTRIES.map((industry, i) => {
              const Icon = industry.icon;
              const reversed = i % 2 === 1;
              return (
                <motion.article
                  key={industry.id}
                  id={industry.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={0}
                  className="scroll-mt-28 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-8 md:p-10"
                >
                  <div
                    className={`grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.3fr] md:gap-12 ${
                      reversed ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-brand-50)] dark:bg-white/5">
                        <Icon className="h-5.5 w-5.5 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                      </div>
                      <h2 className="mt-6 text-2xl font-semibold text-[color:var(--color-text-primary)]">
                        {industry.name}
                      </h2>
                      <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                        {industry.description}
                      </p>

                      <ul className="mt-6 space-y-2.5">
                        {industry.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="flex items-start gap-2.5 text-sm text-[color:var(--color-text-secondary)]"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Case study preview */}
                    <div className="flex flex-col justify-between rounded-2xl bg-[color:var(--color-bg-secondary)] p-7">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-text-muted)]">
                          Case study
                        </p>
                        <p className="mt-4 text-3xl font-bold tracking-tight text-[color:var(--color-text-primary)]">
                          {industry.caseStudy.result}
                        </p>
                        <p className="mt-4 text-sm text-[color:var(--color-text-secondary)]">
                          {industry.caseStudy.client}
                        </p>
                      </div>

                      <a
                        href="/contact"
                        className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text-primary)]"
                      >
                        Discuss a similar problem
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </PageWrapper>
  );
};

export default Industries;