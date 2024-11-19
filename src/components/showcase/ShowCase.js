import { LuExpand } from "react-icons/lu";
import { Carousel } from "../carousel/Carousel";

export const ShowCase = ({ heading, asset, video, paragraph, section, shortParagraph, closeUp, buttonClick, children, carousel }) => {
    return (
        <section className="showcase_container">
            {children}
            <div className="content">
                <h4 className="content_text content_heading">
                    {heading}
                </h4>
            </div>
            {
                video ? (
                    <video className={`hero_shot ${section}`} autoPlay muted loop>
                        <source src={asset} type="video/mp4" />
                    </video>
                ) : (
                    <>
                        {
                            carousel ? (
                                <Carousel array={carousel} section={section} />
                            ) :
                                <img className={`hero_shot ${section}`} src={asset} alt="Hero shot" />
                        }
                        {
                            closeUp && (
                                <button className="closer_look" onClick={buttonClick}>
                                    Take a closer look
                                    <div className="closer_look_icon_container">
                                        <LuExpand className="closer_look_icon" />
                                    </div>
                                </button>
                            )
                        }
                    </>
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