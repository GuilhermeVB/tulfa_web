export const ShowCase = ({ heading, asset, video, paragraph, section, shortParagraph }) => {

    return (
        <section className="showcase_container">
            <div className="content">
                <h4 className="content_text">
                    {heading}
                </h4>
            </div>
            {
                video ? (
                    <video className={`hero_shot ${section}`} autoPlay muted loop>
                        <source src={asset} type="video/mp4" />
                    </video>
                ) : (
                    <img className={`hero_shot ${section}`} src={asset} alt="Hero shot" />
                )
            }
            <div className="content">
                <p className={`content_text ${shortParagraph && 'short_paragraph'}`}>
                    {paragraph}
                </p>
            </div>
        </section>
    );
}