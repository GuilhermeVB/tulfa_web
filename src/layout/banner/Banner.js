import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Banner = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.timeline({
            scrollTrigger: {
                trigger: ".cta1_container",
                start: "top top", 
                end: "bottom top", 
                onEnter: () => { 
                    gsap.fromTo(
                        '.cta1_container',
                        { opacity: 0, scale: 20 },
                        { duration: 1, opacity: 1, scale: 1 }
                    );
                },
                once: true, 
            }
        });
    });

    return (
        <section className="banner_container">
            <video className="banner_video" autoPlay muted loop>
                <source src="/images/banner/background.mp4" type="video/mp4" />
            </video>
            <div className="cta1_container" />
        </section>
    );
};