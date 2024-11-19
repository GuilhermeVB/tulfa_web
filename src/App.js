import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { Banner } from "./layout/banner/Banner";
import { CloseUpShots } from "./layout/closeup_shots/CloseUpShots";
import { ColorVariation } from "./layout/color_variation/ColorVariation";
import { CTA1 } from "./layout/cta_1/CTA1";
import { CTA2 } from "./layout/cta_2/CTA2";
import { CTA3 } from "./layout/cta_3/CTA3";
import { DimensionImages } from "./layout/dimension_images/DimensionImages";
import { FabricVariation } from "./layout/fabric_variation/FabricVariation";
import { FlatLay } from "./layout/flat_lay/FlatLay";
import { InstallationsImages } from "./layout/installations_images/InstallationsImages";
import { LifeStyleCta } from "./layout/lifestyle_cta/LifeStyleCta";
import { Silo } from "./layout/silo_images/Silo";
import { SizeVar } from "./layout/size_var/SizeVar";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const App = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  useGSAP(() => {
    const sections = sectionRefs.map((ref) => ref.current);
    let isScrolling = false;

    const scrollToSection = (index) => {
      if (isScrolling) return;
      isScrolling = true;

      if (index < 0 || index >= sections.length) {
        isScrolling = false;
        return;
      }

      gsap.to(window, {
        scrollTo: {
          y: sections[index],
          autoKill: false,
        },
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          isScrolling = false;
        },
      });
    };

    window.addEventListener("wheel", (event) => {
      const currentIndex = sections.findIndex((section) => section === document.querySelector(".active"));

      if (event.deltaY > 0) {
        if (currentIndex < sections.length - 1) {
          scrollToSection(currentIndex + 1);
        }
      } else {
        if (currentIndex > 0) {
          scrollToSection(currentIndex - 1);
        }
      }
    });

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => section.classList.add("active"),
        onLeave: () => section.classList.remove("active"),
        onEnterBack: () => section.classList.add("active"),
        onLeaveBack: () => section.classList.remove("active"),
      });
    });
  });

  return (
    <div className="App">
      <div ref={sectionRefs[0]} className="introdution">
        <Banner />
        <CTA1 />
      </div>
      <div ref={sectionRefs[1]}>
        <CTA2 />
      </div>
      <div ref={sectionRefs[2]}>
        <CTA3 />
      </div>
      <div ref={sectionRefs[3]}>
        <Silo />
      </div>
      <div className="slash">
        <div ref={sectionRefs[4]}>
          <SizeVar />
        </div>
        <div ref={sectionRefs[5]}>
          <ColorVariation />
        </div>
        <div ref={sectionRefs[6]}>
          <FabricVariation />
        </div>
        <div ref={sectionRefs[7]}>
          <LifeStyleCta />
        </div>
        <div ref={sectionRefs[8]}>
          <CloseUpShots />
        </div>
        <div ref={sectionRefs[9]}>
          <InstallationsImages />
        </div>
        <div ref={sectionRefs[10]}>
          <DimensionImages />
        </div>
        <div ref={sectionRefs[11]}>
          <FlatLay />
        </div>
      </div>
    </div>
  );
}