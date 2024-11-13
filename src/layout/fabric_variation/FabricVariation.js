export const FabricVariation = () => {
    const fabricLeft = "./images/fabric_variation/left.png"
    const fabricRight = "./images/fabric_variation/right.png"

    const fabricsOne = "./images/fabric_variation/fabrics_one.png"
    const fabricsTwo = "./images/fabric_variation/fabrics_two.png"
    const fabricsThree = "./images/fabric_variation/fabrics_three.png"

    return (
        <section className="fabricvariation_container">
            <div className="fabricvariation_left">
                <img src={fabricLeft} alt="Fabric" />
            </div>
            <div className="fabricvariation_right">
                <img src={fabricRight} alt="Fabric" />
                <div className="fabrics">
                    <button>
                        Prints <img src={fabricsOne} alt="First fabric" />
                    </button>
                    <button>
                        Leathers <img src={fabricsTwo} alt="Second fabric" />
                    </button>
                    <button className="fabrics_last">
                        Embroidery <img src={fabricsThree} alt="Three fabric" />
                    </button>
                </div>
            </div>
        </section>
    );
}