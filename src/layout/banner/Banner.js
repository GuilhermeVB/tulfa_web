import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export const Banner = () => {
    return (
        <section className="banner_container">
            <video className="banner_video" autoPlay muted loop>
                <source src="/images/banner/background.mp4" type="video/mp4" />
            </video>
        </section>
    );
}