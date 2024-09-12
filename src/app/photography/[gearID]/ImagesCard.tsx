import { FocusCards } from "@/components/ui/focus-card";
import imagesData from "@/data/images.json";

type GearID = keyof typeof imagesData.images;

export default function ImagesCard({ params }: { params: { gearID: GearID } }) {
  const { gearID } = params;
  // console.log(gearID);

  // Access the property using gearID
  const gearImages = imagesData.images[gearID];
  // console.log(gearImages);

  return <FocusCards cards={gearImages} />;
}
