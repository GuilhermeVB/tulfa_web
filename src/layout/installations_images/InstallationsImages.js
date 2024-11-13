import { ShowCase } from "../../components/showcase/ShowCase";

export const InstallationsImages = () => {
    const hero_shot = "/images/showcase/installations.png"

    return (
        <>
            <ShowCase
                heading="Lorem Ipsum"
                image={hero_shot}
                section="installations"
                paragraph="Give your customers a clear view of how your furniture 
                fits into their space with precise dimensions and scale indicators."
                shortParagraph
            />
        </>
    );
}