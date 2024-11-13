import { ShowCase } from "../../components/showcase/ShowCase";

export const DimensionImages = () => {
    const hero_shot = "/images/showcase/dimension.png"

    return (
        <>
            <ShowCase
                heading="Lorem Ipsum"
                image={hero_shot}
                section="dimension"
                paragraph="Give your customers a clear view of how your furniture 
                fits into their space with precise dimensions and scale indicators."
                shortParagraph
            />
        </>
    );
}