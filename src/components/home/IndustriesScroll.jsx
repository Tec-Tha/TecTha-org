import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

/**
 * IndustriesScroll — Home Section 5
 * Pins the section and translates a horizontal track as the user scrolls
 * vertically, turning six industry verticals into one continuous pass.
 * Falls back to native horizontal overflow scroll below lg (pinning a
 * short viewport on mobile fights the user rather than helping them).
 */

const INDUSTRIES = [
  {
    id: "fin-services",
    index: "01",
    name: "Financial Services",
    description:
      "Core modernization, risk platforms, and compliance-grade data architecture for banks and asset managers.",
  },
  {
    id: "healthcare",
    index: "02",
    name: "Healthcare",
    description:
      "Interoperable patient data systems and clinical workflow tooling built for regulated environments.",
  },
  {
    id: "retail",
    index: "03",
    name: "Retail & Consumer",
    description:
      "Unified commerce, inventory, and personalization engines that hold up during peak demand.",
  },
  {
    id: "manufacturing",
    index: "04",
    name: "Manufacturing",
    description:
      "Connected plant-floor data and predictive maintenance layered onto existing industrial systems.",
  },
  {
    id: "energy",
    index: "05",
    name: "Energy & Utilities",
    description:
      "Grid telemetry, forecasting, and asset management platforms built for long operational lifecycles.",
  },
  {
    id: "public-sector",
    index: "06",
    name: "Public Sector",
    description:
      "Citizen-facing services and legacy system modernization delivered under strict procurement standards.",
  },
];

const IndustriesScroll = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const distance = track.scrollWidth - section.offsetWidth;
      if (distance <= 0) return;

      const tween = gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[color:var(--color-bg-primary)] py-28 md:py-0 md:min-h-screen md:flex md:items-center"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            overline="Industries"
            title={
              <>
                Sectors We Transform
                <br className="hidden sm:block" /> 
              </>
            }
            subtitle="We deploy custom technological solutions tailored to solve specific regulatory and logistical challenges."
            align="left"
          />
        </div>

        <div
          ref={trackRef}
          className="mt-14 flex gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden md:mt-16 md:px-0"
        >
          <div className="w-[2px] shrink-0 md:hidden" aria-hidden="true" />
          {INDUSTRIES.map((industry) => (
            <article
              key={industry.id}
              className="group w-[280px] shrink-0 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--color-brand-500)]/40 hover:shadow-[0_24px_48px_-24px_rgba(37,99,235,0.25)] sm:w-[320px] md:ml-6 md:first:ml-6 lg:w-[360px]"
            >
              <span className="text-sm font-semibold tracking-wide text-[color:var(--color-brand-500)]">
                {industry.index}
              </span>

              <h3 className="mt-6 text-2xl font-semibold text-[color:var(--color-text-primary)]">
                {industry.name}
              </h3>

              <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                {industry.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text-secondary)] transition-colors duration-300 group-hover:text-[color:var(--color-brand-600)]">
                Explore
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
          <div className="w-[2px] shrink-0 md:mr-6" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default IndustriesScroll;