import { ShowCase } from "../../components/showcase/ShowCase"

export const CloseUpShots = () => {
    const hero_shot = "/images/showcase/closeup.jpg"

    return (
        <>
            <ShowCase
                heading="Close Up Shots"
                asset={hero_shot}
                section="closeup"
                paragraph="Lorem ipsum dolor sit amet consectetur. Augue elementum morbi in ac.
                Leo eu elit nibh nunc vitae eget massa sed sed. Sit sed aliquam sit nulla eget."
            />
        </>
    );
}