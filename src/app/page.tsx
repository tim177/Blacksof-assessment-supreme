"use client";

import { useRef } from "react";
import Logo from "@/components/logo";
import VideoBackground from "@/components/VideoBackground";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import VehicleSectionScroll from "@/components/vehicle-section-scroll";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/footer";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="relative bg-black text-white">
      <VideoBackground />

      <div className="relative z-10">
        <div className="bg-white h-24 ">
          <Logo />
        </div>
        <HeroSection />
        <SolutionsSection />

        {/* No margin/padding between these sections */}
        <div className="relative px-32 bg-black/90">
          <VehicleSectionScroll
            title="Passenger vehicles"
            description="Revving up innovation from interior to exterior."
            imageSrc={[
              { id: 1, src: "/images/Passenger Alpha 1.png" },
              { id: 2, src: "/images/Cabin.png" },
              { id: 3, src: "/images/Exterior.png" },
            ]}
          />

          {/* Negative margin to remove space between sections */}
          <div className="-mt-96">
            <VehicleSectionScroll
              title="Commercial vehicles"
              description="Advancing engineering for heavy-duty vehicles."
              imageSrc={[
                { id: 1, src: "/images/Commercial 3.png" },
                { id: 2, src: "/images/Trunk.png" },

                { id: 3, src: "/images/Front.png" },
              ]}
            />
          </div>
        </div>

        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
