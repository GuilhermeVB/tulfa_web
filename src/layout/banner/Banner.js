import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Banner = () => {

    useGSAP(() => {
        gsap.timeline()
            .fromTo('.cta1_container',
                { opacity: 0, scale: 20 },
                { delay: 2, duration: 1, opacity: 1, scale: 1 }
            )
    })

    return (
        <section className="banner_container">
            <video className="banner_video" autoPlay muted loop>
                <source src="/images/banner/background.mp4" type="video/mp4" />
            </video>
        </section>
    );
}