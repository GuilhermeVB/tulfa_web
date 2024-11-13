import { Banner } from "./layout/banner/Banner";
import { CloseUpShots } from "./layout/closeup_shots/CloseUpShots";
import { ColorVariation } from "./layout/color_variation/ColorVariation";
import { CTA1 } from "./layout/cta_1/CTA1";
import { CTA2 } from "./layout/cta_2/CTA2";
import { CTA3 } from "./layout/cta_3/CTA3";
import { DimensionImages } from "./layout/dimension_images/DimensionImages";
import { FabricVariation } from "./layout/fabric_variation/FabricVariation";
import { FlatLay } from "./layout/flat_lay/FlatLay";
import { InstallationsImages } from "./layout/installations_images/InstallationsImages";
import { LifeStyleCta } from "./layout/lifestyle_cta/LifeStyleCta";
import { Silo } from "./layout/silo_images/Silo";
import { SizeVar } from "./layout/size_var/SizeVar";

export const App = () => {
  return (
    <div className="App">
      <Banner />
      <CTA1 />
      <CTA2 />
      <CTA3 />
      <Silo />
      <SizeVar />
      <ColorVariation />
      <FabricVariation />
      <LifeStyleCta />
      <CloseUpShots />
      <InstallationsImages />
      <DimensionImages />
      <FlatLay />
    </div>
  );
}