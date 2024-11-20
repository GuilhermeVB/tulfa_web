import { useRef } from "react";

export const CTA1 = () => {
    const headingRef = useRef(null)

    return (
        <section className="cta1_container">
            <h1 ref={headingRef} className="cta1_heading">
                Introducing
            </h1>
        </section>
    );
}