import { FocusCards } from "@/components/ui/focus-card";
import imagesData from "@/data/images.json";

type GearID = keyof typeof imagesData.images;

export default function ImagesCard({ params }: { params: { gearID: GearID } }) {
  const { gearID } = params;
  // console.log(gearID);

  // Access the property using gearID
  const gearImages = imagesData.images[gearID];
  // console.log(gearImages);
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://firebasestorage.googleapis.com/v0/b/testauth-99b64.appspot.com/o/images%2Fpixel%2FDSC06079.JPG?alt=media&token=18fe988e-a8cf-42a8-af2b-e4e53de197b0",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://firebasestorage.googleapis.com/v0/b/testauth-99b64.appspot.com/o/images%2Fpixel%2FDSC06089.JPG?alt=media&token=c66fa7e6-de9c-4dc5-bea5-f23d73042a7d",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
