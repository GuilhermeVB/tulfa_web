import { useEffect, useState } from "react";

import { CloseUpOpen } from "../../components/closeup_open/CloseUpOpen";
import { ShowCase } from "../../components/showcase/ShowCase"

export const CloseUpShots = () => {
    const [sliderStatus, setSliderStatus] = useState(false)
    const [openImages, setOpenImages] = useState([])

    useEffect(() => {
        setOpenImages([
            "/images/showcase/closeup.jpg",
            "/images/showcase/closeup_open/vetor1.jpg",
            "/images/showcase/closeup_open/vetor2.jpg",
            "/images/showcase/closeup_open/vetor3.jpg",
            "/images/showcase/closeup_open/vetor4.jpg",
            "/images/showcase/closeup_open/vetor5.jpg",
            "/images/showcase/closeup_open/vetor6.jpg",
            "/images/showcase/closeup_open/vetor2.jpg"
        ])
    }, [])

    function toggleStatus() {
        setSliderStatus(!sliderStatus)
    }

    return (
        <>
            <ShowCase
                heading="Close Up Shots"
                asset={openImages[0]}
                section="closeup"
                paragraph="Lorem ipsum dolor sit amet consectetur. Augue elementum morbi in ac.
                Leo eu elit nibh nunc vitae eget massa sed sed. Sit sed aliquam sit nulla eget."
                closeUp
                buttonClick={toggleStatus}
            >
                {
                    sliderStatus && <CloseUpOpen vetorImages={openImages} close={toggleStatus} />
                }
            </ShowCase>
        </>
    );
}