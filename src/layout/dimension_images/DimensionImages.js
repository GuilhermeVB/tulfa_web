import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";

import { ShowCase } from "../../components/showcase/ShowCase";
import { useEffect, useState } from "react";

export const DimensionImages = () => {
    const [dimensionImages, setDimensionImages] = useState([])

    useEffect(() => {
        setDimensionImages([
            "/images/showcase/dimension.jpg",
            "/images/showcase/dimension_carousel/vetor1.jpg",
            "/images/showcase/dimension_carousel/vetor2.jpg",
            "/images/showcase/dimension_carousel/vetor3.jpg",
            "/images/showcase/dimension_carousel/vetor4.jpg",
            "/images/showcase/dimension_carousel/vetor5.jpg"
        ])
    }, [])

    return (
        <>
            <ShowCase
                heading="Lorem Ipsum"
                asset={dimensionImages[0]}
                section="dimension"
                paragraph="Give your customers a clear view of how your furniture 
                fits into their space with precise dimensions and scale indicators."
                shortParagraph
                carousel={dimensionImages}
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
        </>
    );
}