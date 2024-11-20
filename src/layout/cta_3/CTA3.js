import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const CTA3 = ({ refs }) => {

    useGSAP(() => {
        const [span1, span2, span3, span4] = refs.map((ref) => ref.current);

        const scroll1 = gsap.timeline({
            scrollTrigger: {
                trigger: span3,
                toggleActions: 'play none none reverse',
                start: 'start bottom',
                end: 'bottom top',
                markers: true
            }
        })
        const scroll2 = gsap.timeline({
            scrollTrigger: {
                trigger: span4,
                toggleActions: 'play none none reverse',
                start: 'start bottom',
                end: 'bottom top',
                markers: true
            }
        })
        const scroll3 = gsap.timeline({
            scrollTrigger: {
                trigger: span4,
                toggleActions: 'play none none reverse',
                start: 'bottom bottom',
                end: 'bottom top',
                markers: true
            }
        })

        scroll1
            .to(span1, {
                opacity: .6
            })
            .to(span2, {
                opacity: 1
            })

        scroll2
            .to(span2, {
                opacity: .6
            })
            .to(span3, {
                opacity: 1
            })

        scroll3
            .to(span3, {
                opacity: .6
            })
            .to(span4, {
                opacity: 1
            })
    })

    return (
        <section className="cta3_container">
            <p className="cta3_paragraph">
                <span ref={refs[0]} style={{ opacity: 1 }}>Lorem ipsum dolor sit amet. </span>
                <span ref={refs[1]} style={{ opacity: .6 }}>Quo odit atque ut architecto obcaecati rem vitae tempore </span>
                <span ref={refs[2]} style={{ opacity: .6 }}>non asperiores consequatur ut error facilis est architecto </span>
                <span ref={refs[3]} style={{ opacity: .6 }}>doloribus eos laborum praesentium! </span>
            </p>
        </section>
    );
}