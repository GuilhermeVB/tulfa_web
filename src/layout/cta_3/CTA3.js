import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export const CTA3 = () => {
    const span1Ref = useRef(null)
    const span2Ref = useRef(null)
    const span3Ref = useRef(null)
    const span4Ref = useRef(null)

    useGSAP(() => {
        const span1 = span1Ref.current
        const span2 = span2Ref.current
        const span3 = span3Ref.current
        const span4 = span4Ref.current

        const scroll1 = gsap.timeline({
            scrollTrigger: {
                trigger: span2,
                toggleActions: 'play none none reverse',
                start: 'center 75%',
                end: 'center 75%',
                markers: true
            }
        })
        const scroll2 = gsap.timeline({
            scrollTrigger: {
                trigger: span3,
                toggleActions: 'play none none reverse',
                start: 'center 75%',
                end: 'center 75%',
                markers: true
            }
        })
        const scroll3 = gsap.timeline({
            scrollTrigger: {
                trigger: span4,
                toggleActions: 'play none none reverse',
                start: 'center 75%',
                end: 'center 75%',
                markers: true
            }
        })

        scroll1
            .fromTo(span1, {
                opacity: 1
            }, {
                opacity: .6
            })
            .fromTo(span2, {
                opacity: .6
            }, {
                opacity: 1
            })

        scroll2
            .fromTo(span2, {
                opacity: 1
            }, {
                opacity: .6
            })
            .fromTo(span3, {
                opacity: .6
            }, {
                opacity: 1
            })

        scroll3
            .fromTo(span3, {
                opacity: 1
            }, {
                opacity: .6
            })
            .fromTo(span4, {
                opacity: .6
            }, {
                opacity: 1
            })
    })

    return (
        <section className="cta3_container">
            <p className="cta3_paragraph">
                <span ref={span1Ref} style={{ opacity: 1 }}>Lorem ipsum dolor sit amet. </span>
                <span ref={span2Ref} style={{ opacity: .6 }}>Quo odit atque ut architecto obcaecati rem vitae tempore </span>
                <span ref={span3Ref} style={{ opacity: .6 }}>non asperiores consequatur ut error facilis est architecto </span>
                <span ref={span4Ref} style={{ opacity: .6 }}>doloribus eos laborum praesentium! </span>
            </p>
        </section>
    );
}