import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export const SizeVar = () => {
    const image1Ref = useRef(null)
    const image2Ref = useRef(null)
    const image3Ref = useRef(null)

    useGSAP(() => {
        const image1 = image1Ref.current
        const image2 = image2Ref.current
        const image3 = image3Ref.current

        const scroll1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".silo_container",
                toggleActions: 'play none none reverse',
                start: 'bottom bottom',
                end: 'bottom bottom',
                markers: true
            }
        })

        scroll1
            .fromTo('.slash', {
                y: '0vh'
            }, {
                y: '-100vh',
                duration: 1.5,
                ease: 'expo.out(1)'
            })

        /* 
    
        .fromTo(image3, {
            y: '100%'
        }, {
            y: '-50%',
            duration: 1.5,
            ease: 'expo.out(10)'
        }, "=-2")
        */

    })

    const object = './images/size_var/object.png'

    return (
        <section className="sizevar_container">
            <div ref={image1Ref} className="sizevar_images_large">
                <span className="sizevar_images_span">L</span>
                <img src={object} alt="" />
            </div>
            <div ref={image2Ref} className="sizevar_images_meddium">
                <span className="sizevar_images_span">M</span>
                <img src={object} alt="" />
            </div>
            <div ref={image3Ref} className="sizevar_images_small">
                <span className="sizevar_images_span">S</span>
                <img src={object} alt="" />
            </div>
            <span className="sizevar_span">
                Lorem Ipsum Dolor Sit Amet
            </span>
        </section>
    );
}