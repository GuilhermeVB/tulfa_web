import { IoClose } from "react-icons/io5";

export const CloseUpOpen = ({ vetorImages, close }) => {
    const bannerOpen = "/images/showcase/closeup_open/banner.jpg"

    return (
        <div className="closeupopen_container">
            <div className="closeupopen_background">
                <img className="closeupopen_background_image" src={vetorImages[0]} alt="" />

                <div className="closeupopen_content">
                    <div className="closeupopen_content_banner">
                        <div className="closeupopen_content_banner_icon_container" onClick={close}>
                            <IoClose className="closeupopen_content_banner_icon" />
                        </div>
                        <img className="closeupopen_content_banner_image" src={bannerOpen} alt="Room banner" />
                    </div>
                    <div className="closeupopen_content_heading_container">
                        <h3 className="closeupopen_content_heading">
                            Lorem ipsum dolor sit amet consectetur. Morbi id eget elementum ornare.
                        </h3>
                    </div>
                    <div className="closeupopen_content_vetor">
                        {
                            vetorImages.map((image, index) => {
                                return <img key={index} className={`closeupopen_content_vetor_image vetor_image_${index}`} src={image} alt="Close up" />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}