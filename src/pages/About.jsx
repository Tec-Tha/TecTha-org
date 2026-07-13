import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import PageWrapper from "../components/layout/PageWrapper";
import SectionHeader from "../components/shared/SectionHeader";
import ContactCTA from "../components/home/ContactCTA";

gsap.registerPlugin(ScrollTrigger);

/**
 * About — Story · Team · Values · Timeline · Culture
 * The one page where the firm talks about itself rather than its clients'
 * outcomes, so it runs quieter and more editorial than Home: fewer cards,
 * more prose, one signature scroll moment (the timeline line-draw).
 */

const VALUES = [
  {
    icon: Compass,
    title: "Scope for reality",
    description:
      "We recommend what survives your constraints, not what looks best in a proposal.",
  },
  {
    icon: ShieldCheck,
    title: "Own the outcome",
    description:
      "Accountability doesn't end at handover. We stay reachable long after the invoice is paid.",
  },
  {
    icon: HeartHandshake,
    title: "Say the hard thing early",
    description:
      "A difficult truth in week two is cheaper than a surprise in month eight.",
  },
  {
    icon: Sparkles,
    title: "Leave people more capable",
    description:
      "Every engagement should make your internal team more self-sufficient, not less.",
  },
];

const TIMELINE = [
  { year: "2007", label: "Founded", detail: "Started as a three-person systems integration practice." },
  { year: "2012", label: "First enterprise contract", detail: "Delivered a core banking migration for a regional lender." },
  { year: "2016", label: "Data & Analytics practice launched", detail: "Formalized data engineering as a standalone discipline." },
  { year: "2020", label: "Expanded to 12 countries", detail: "Opened delivery hubs to support round-the-clock engagements." },
  { year: "2024", label: "Applied AI practice launched", detail: "Began scoping production AI systems with measurable guardrails." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const About = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    const section = timelineRef.current;
    if (!line || !section) return;

    const tween = gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.5,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <PageWrapper
      title="About"
      description="Story, values, and history behind Tec Tha's enterprise technology consulting practice."
    >
      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]"
          >
            Our Story
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.08}
            className="mt-5 max-w-3xl text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--color-text-primary)]"
          >
            Started by engineers who were tired of watching good strategy
            die in implementation.
          </motion.h1>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.16}
              className="text-lg leading-relaxed text-[color:var(--color-text-secondary)]"
            >
              Tec Tha started in 2007 as a three-person team subcontracting
              on systems integration work for larger consultancies. What we
              kept seeing was the same gap, again and again: a well-argued
              strategy deck, and then a year of quiet failure to actually
              build the thing it described.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.22}
              className="text-lg leading-relaxed text-[color:var(--color-text-secondary)]"
            >
              So we built a firm around the opposite bet: senior engineers
              stay on an engagement from the first scoping conversation
              through the last line of shipped code. No handoff, no
              slide-deck-to-backlog translation loss.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[color:var(--color-bg-secondary)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            overline="Values"
            title="What we hold each other to"
            align="left"
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
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
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline — signature scroll moment: line draws down as the page scrolls */}
      <section ref={timelineRef} className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader overline="History" title="Two decades, in five moments" align="left" />

          <div className="relative mt-16 pl-10">
            <div className="absolute left-[7px] top-1 bottom-1 w-[2px] bg-[color:var(--color-border)]" />
            <div
              ref={lineRef}
              className="absolute left-[7px] top-1 bottom-1 w-[2px] origin-top bg-gradient-to-b from-[#2563EB] to-[#7C3AED]"
            />

            <div className="space-y-14">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={i * 0.05}
                  className="relative"
                >
                  <div className="absolute -left-10 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[color:var(--color-bg-primary)]">
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED]" />
                  </div>
                  <p className="text-sm font-semibold text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-[color:var(--color-text-primary)]">
                    {item.label}
                  </h3>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-[color:var(--color-bg-secondary)] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]">
              Culture
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-snug text-[color:var(--color-text-primary)] md:text-4xl">
              Senior by default, not by exception
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
              We keep teams small and staff them with people who've shipped
              this kind of system before — not because junior talent isn't
              capable, but because clients are paying for judgment under
              ambiguity, and that's earned, not assigned.
            </p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
              That shapes how we hire, how engagements are staffed, and how
              long people tend to stay.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.12}
            className="grid grid-cols-2 gap-4"
          >
            {["19 yrs avg. tenure", "40+ engineers", "6 delivery hubs", "0 layers of handoff"].map(
              (stat) => (
                <div
                  key={stat}
                  className="flex aspect-square flex-col justify-end rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-6"
                >
                  <p className="text-sm font-medium text-[color:var(--color-text-secondary)]">
                    {stat}
                  </p>
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </PageWrapper>
  );
};

export default About;