'use client'

import CTASection from '@/components/CTASection';
import CustomersSection from '@/components/CustomersSection';
import EventsSection from '@/components/EventsSection';
import FAQSection from '@/components/FAQSection';
import FeaturesSection from '@/components/FeaturesSection';
import HeroSection from '@/components/HeroSection';
import InvestorsSection from '@/components/InvestorsSection';
import LanternSection from '@/components/LanternSection';
import LoadScreen from '@/components/LoadScreen';
import QuoteSection from '@/components/QuoteSection';
import SliderSection from '@/components/SliderSection';
import StatsSection from '@/components/StatsSection';
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    // Remove h-reveal and p-reveal attributes from all elements on mobile
    if (window.innerWidth <= 767) {
      const elements = document.querySelectorAll("[h-reveal], [p-reveal]");
      elements.forEach((element) => {
        element.removeAttribute("h-reveal");
        element.removeAttribute("p-reveal");
      });
    }
  }, []);

  return (
    <>
      <LoadScreen />
      <HeroSection />
      <FeaturesSection />
      <SliderSection />
      <StatsSection />
      <CustomersSection />
      <QuoteSection />
      <InvestorsSection />
      <CTASection />
      <EventsSection />
      <LanternSection />
      <FAQSection />
    </>
  )
}