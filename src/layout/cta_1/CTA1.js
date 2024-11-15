import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export const CTA1 = () => {
    const headingRef = useRef(null)

    useGSAP(() => {
        const heading = headingRef.current

        gsap.fromTo(heading, {

        }, {
            
        })
    })

    return (
        <section className="cta1_container">
            <h1 ref={headingRef} className="cta1_heading">
                Introducing
            </h1>
        </section>
    );
}