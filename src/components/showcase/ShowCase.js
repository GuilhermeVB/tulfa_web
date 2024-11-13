export const ShowCase = ({ heading, image, paragraph, section, shortParagraph }) => {

    return (
        <section className="showcase_container">
            <div className="content">
                <h4 className="content_text">
                    {heading}
                </h4>
            </div>
            <img className={`hero_shot ${section}`} src={image} alt="Hero shot" />
            <div className="content">
                <p className={`content_text ${shortParagraph && 'short_paragraph'}`}>
                    {paragraph}
                </p>
            </div>
        </section>
    );
}