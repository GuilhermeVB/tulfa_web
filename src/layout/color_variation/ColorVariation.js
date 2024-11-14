export const ColorVariation = () => {
    const orangeSofa = "./images/color_variation/orange_sofa.png"

    return (
        <section className="colorvariation_container">
            <div className="colorvariation_left">
                <img src={orangeSofa} alt="Sofa" />
            </div>
            <div className="colorvariation_left_filter">
                <button className="colorvariation_left_filter_one">
                    <div className="first_semi_circulo" />
                </button>
                <button className="colorvariation_left_filter_two">
                    <div className="second_semi_circulo" />
                </button>
                <button className="colorvariation_left_filter_three">
                    <div className="third_semi_circulo" />
                </button>
            </div>
            <div className="colorvariation_right">
                <img src={orangeSofa} alt="Sofa zoom" />
            </div>
        </section>
    );
}