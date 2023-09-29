import { Card } from "../components/Card/Card";
import { useImagesQuery } from "../queries/images";

export const Home = () => {
  const { data: images } = useImagesQuery();

  return (
    <section className="grid grid-cols-5 gap-3">
      {images?.map((image) => (
        <Card key={image.id} image={image} />
      ))}
    </section>
  );
};
