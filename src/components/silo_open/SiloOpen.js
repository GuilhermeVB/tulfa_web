import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoCloseCircle } from "react-icons/io5";

export const SiloOpen = ({ buttonClick, image }) => {
    let animation

    useGSAP(() => {
        animation = gsap.timeline()
            .from('.siloopen_container',
                { y: '100vh', duration: 1, ease: 'power2.out' }
            )
    })

    async function reverse() {
        await animation.reverse()
        buttonClick()
    }


    return (
        <div className="siloopen_container">
            <IoCloseCircle className="siloopen_icon" onClick={reverse} />
            <div className="siloopen_content">
                <h3 className="siloopen_content_heading">
                    Ultra-high-definition images of your furniture shot from different angles.
                </h3>
                <div className="siloopen_content_carousel">
                    <div className="siloopen_content_carousel_element short_element">
                        <img className="first_image" src={image} alt="Carousel content" />
                    </div>
                    <div className="siloopen_content_carousel_element short_element">
                        <img className="second_image" src={image} alt="Carousel content" />
                    </div>
                    <div className="siloopen_content_carousel_element large_element">
                        <img className="third_image" src={image} alt="Carousel content" />
                    </div>
                    <div className="siloopen_content_carousel_element short_element">
                        <img className="fourth_image" src={image} alt="Carousel content" />
                    </div>
                    <div className="siloopen_content_carousel_element short_element">
                        <img className="fifth_image" src={image} alt="Carousel content" />
                    </div>
                    <div className="siloopen_content_carousel_element large_element">
                        <img className="sixth_image" src={image} alt="Carousel content" />
                    </div>
                </div>
            </div>
        </div>
    );
}