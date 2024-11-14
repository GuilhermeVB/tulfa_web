import { ShowCase } from "../../components/showcase/ShowCase";

export const InstallationsImages = () => {
    const hero_shot = "/images/showcase/installations.jpg"

    return (
        <>
            <ShowCase
                heading="Lorem Ipsum"
                asset={hero_shot}
                section="installations"
                paragraph="Give your customers a clear view of how your furniture 
                fits into their space with precise dimensions and scale indicators."
                shortParagraph
            />
        </>
    );
}