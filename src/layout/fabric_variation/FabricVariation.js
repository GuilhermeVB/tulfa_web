export const FabricVariation = () => {
    const blueSofa = "./images/fabric_variation/blue_sofa.png"
    const graySofa = "./images/fabric_variation/gray_sofa.png"
    const violetSofa = "./images/fabric_variation/violet_sofa.png"

    return (
        <section className="fabricvariation_container">
            <div className="fabricvariation_left">
                <img src={blueSofa} alt="Fabric" />
            </div>
            <div className="fabricvariation_right">
                <img src={blueSofa} alt="Fabric" />
                <div className="fabrics">
                    <button className="fabrics_first">
                        Prints
                        <div className="fabrics_figure">
                            <img src={blueSofa} alt="First fabric" />
                        </div>
                    </button>
                    <button>
                        Leathers
                        <div className="fabrics_figure">
                            <img src={graySofa} alt="Second fabric" />
                        </div>
                    </button>
                    <button className="fabrics_last">
                        Embroidery
                        <div className="fabrics_figure">
                            <img src={violetSofa} alt="Three fabric" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}