import { Button } from "../../components/button/Button";

export const Silo = () => {
    const lampshade = "/images/silo_images/lampshade.png"

    return (
        <section className="silo_container">
            <div className="silo_content">
                <h3 className="silo_content_heading">
                    Product Silos
                </h3>
                <Button />
            </div>
            <img className="silo_image" src={lampshade} alt="Lampshade" />
        </section>
    );
}