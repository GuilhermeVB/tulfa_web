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
  const scrollingRef = useRef(false);
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
    useRef(null)
  ];

  const cta3SpanRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const offsets = [
    0,
    -1500,
    -155,
    -500,
    -361,
    -201,
    -420,
    0,
    0,
    0,
    0,
    300,
    0,
  ];

  let activeIndex = 0;

  useGSAP(() => {
    const sections = [
      sectionRefs[0].current,
      sectionRefs[1].current,
      sectionRefs[2].current,
      ...cta3SpanRefs.map((ref) => ref.current),
      ...sectionRefs.slice(4).map((ref) => ref.current),
    ];

    const scrollToSection = (index) => {
      if (scrollingRef.current) return;
      scrollingRef.current = true;

      if (index < 0 || index >= sections.length) {
        scrollingRef.current = false;
        return;
      }

      const offset = offsets[index] || 0;

      gsap.to(window, {
        scrollTo: {
          y: sections[index].offsetTop + offset,
          autoKill: false,
        },
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          scrollingRef.current = false
          activeIndex = index
        },
      });

      sections.forEach((section, i) => {
        if (i === activeIndex) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    };

    window.addEventListener("wheel", (event) => {
      if (scrollingRef.current) return;

      const currentIndex = activeIndex;

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

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          if (index === activeIndex) return;
          section.classList.add("active");
          activeIndex = index;
        },
        onLeave: () => section.classList.remove("active"),
        onEnterBack: () => {
          if (index === activeIndex) return;
          section.classList.add("active");
          activeIndex = index;
        },
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
      <div ref={sectionRefs[1]} style={{height: '1px'}} />
      <div ref={sectionRefs[2]}>
        <CTA2 />
      </div>
      <div ref={sectionRefs[3]}>
        <CTA3 refs={cta3SpanRefs} />
      </div>
      <div ref={sectionRefs[4]}>
        <Silo />
      </div>
      <div ref={sectionRefs[5]}>
        <SizeVar />
      </div>
      <div ref={sectionRefs[6]}>
        <ColorVariation />
      </div>
      <div ref={sectionRefs[7]}>
        <FabricVariation />
      </div>
      <div ref={sectionRefs[8]}>
        <LifeStyleCta />
      </div>
      <div ref={sectionRefs[9]}>
        <CloseUpShots />
      </div>
      <div>
        <InstallationsImages />
      </div>
      <div>
        <DimensionImages />
      </div>
      <div>
        <FlatLay />
      </div>
    </div>
  );
}