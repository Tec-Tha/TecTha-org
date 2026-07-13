import Hero from "../components/home/Hero";
import LogoSlider from "../components/shared/LogoSlider";
import Overview from "../components/home/Overview";
import ServicesGrid from "../components/home/ServicesGrid";
import IndustriesScroll from "../components/home/IndustriesScroll";
import WhyUs from "../components/home/WhyUs";
import Statistics from "../components/home/Statistics";
import FeaturedWork from "../components/home/FeaturedWork";
import Innovation from "../components/home/Innovation";
import Testimonials from "../components/home/Testimonials";
import Insights from "../components/home/Insights";
import ContactCTA from "../components/home/ContactCTA";
import PageWrapper from "../components/layout/PageWrapper";

/**
 * Home — composes the full section sequence from the architecture
 * blueprint. Uses fullBleed on PageWrapper since Hero runs edge-to-edge
 * under the transparent navbar rather than clearing it with top padding.
 */

const Home = () => {
  return (
    <PageWrapper
      title="Home"
      description="Tec Tha — enterprise technology consulting for organizations that need systems to survive contact with reality."
      fullBleed
    >
      <Hero />
      <LogoSlider />
      <Overview />
      <ServicesGrid />
      <IndustriesScroll />
      <WhyUs />
      <Statistics />
      <FeaturedWork />
      <Innovation />
      <Testimonials />
      <Insights />
      <ContactCTA />
    </PageWrapper>
  );
};

export default Home;