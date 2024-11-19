export const Carousel = ({array, section}) => {

    return (
        <div className={`carousel_container hero_shot ${section}`}>
            {
                array.map((image, index) => {
                    return <img className={`carousel_element hero_shot ${section}`} key={index} src={image} alt="Carousel source" />
                })
            }
        </div>
    );
}