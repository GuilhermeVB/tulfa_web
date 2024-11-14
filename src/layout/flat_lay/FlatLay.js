import { ShowCase } from "../../components/showcase/ShowCase";

export const FlatLay = () => {
    const hero_shot = "/images/showcase/flatlay.mp4"

    return (
        <>
            <ShowCase
                heading="Lorem Ipsum"
                asset={hero_shot}
                video
                section="flatlay"
                paragraph="Lorem ipsum dolor sit amet consectetur. Augue elementum morbi in ac.
                Leo eu elit nibh nunc vitae eget massa sed sed. Sit sed aliquam sit nulla eget."
            />
        </>
    );
}