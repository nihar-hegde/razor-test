import Productcard from "@/components/cards/product-card";
import { productData } from "@/constant";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-2  items-center justify-center p-24">
      {productData.map((item) => (
        <Productcard key={item.id} productData={item} />
      ))}
    </main>
  );
}
