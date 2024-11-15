import { useState } from "react";

import { CloseUpOpen } from "../../components/closeup_open/CloseUpOpen";
import { ShowCase } from "../../components/showcase/ShowCase"

export const CloseUpShots = () => {
    const [sliderStatus, setSliderStatus] = useState(false)

    function toggleStatus() {
        setSliderStatus(!sliderStatus)
    }

    return (
        <>
            <ShowCase
                heading="Close Up Shots"
                asset="/images/showcase/closeup.jpg"
                section="closeup"
                paragraph="Lorem ipsum dolor sit amet consectetur. Augue elementum morbi in ac.
                Leo eu elit nibh nunc vitae eget massa sed sed. Sit sed aliquam sit nulla eget."
                closeUp
                buttonClick={toggleStatus}
            >
                {
                    sliderStatus && <CloseUpOpen />
                }
            </ShowCase>
        </>
    );
}