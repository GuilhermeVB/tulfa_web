import { useRef } from "react";

export const SizeVar = () => {
    const image1Ref = useRef(null)
    const image2Ref = useRef(null)
    const image3Ref = useRef(null)

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