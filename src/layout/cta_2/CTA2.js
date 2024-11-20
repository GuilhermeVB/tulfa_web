import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export const CTA2 = () => {
    const containerRef = useRef(null)
    const headingRef = useRef(null)
    const imageRef = useRef(null)


    useGSAP(() => {
        const container = containerRef.current
        const heading = headingRef.current
        const image = imageRef.current

        const scroll = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
                markers: true
            }
        })

        scroll
            .fromTo(heading, {
                opacity: 0,
                y: '100vh',
            }, {
                duration: 1.5,
                opacity: 1,
                y: '0vh',
                ease: 'expo.out(1)'
            })
            .fromTo(image, {
                opacity: 0,
                y: '100vh',
            }, {
                duration: 1.5,
                opacity: 1,
                y: '0vh',
                ease: 'expo.out(1)'
            })
    })

    return (
        <section ref={containerRef} className="cta2_container">
            <h2 ref={headingRef} className="cta2_heading">
                Virtual Product Photography
            </h2>
            <img ref={imageRef} src="/images/cta_2/sofa.png" alt="Sofa" />
        </section>
    );
}