import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

import { ShowCase } from "../../components/showcase/ShowCase";

export const InstallationsImages = () => {
    const [installationsImages, setInstallationsImages] = useState([])

    useEffect(() => {
        setInstallationsImages([
            "/images/showcase/installations.jpg",
            "/images/showcase/installations_carousel/vetor1.jpg",
            "/images/showcase/installations_carousel/vetor2.jpg",
            "/images/showcase/installations_carousel/vetor3.jpg",
            "/images/showcase/installations_carousel/vetor4.jpg",
            "/images/showcase/installations_carousel/vetor5.jpg"
        ])
    }, [])

    return (
        <section style={{ position: 'relative' }}>
            <ShowCase
                heading="Lorem Ipsum"
                asset={installationsImages[0]}
                section="installations"
                paragraph="Give your customers a clear view of how your furniture 
                fits into their space with precise dimensions and scale indicators."
                shortParagraph
                carousel={installationsImages}
            >
                <div className="carousel_control">
                    <button className="carousel_button">
                        <IoArrowUpCircleOutline className="carousel_arrow" />
                    </button>
                    <button className="carousel_button">
                        <IoArrowDownCircleOutline className="carousel_arrow" />
                    </button>
                </div>
            </ShowCase>
        </section>
    );
}