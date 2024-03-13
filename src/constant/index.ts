export interface ProductInterfaceI {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const productData = [
  {
    id: 123,
    name: "Cool honey",
    description: "A very cool honey to drink",
    price: 2000,
    image: "/honey1.jpg",
  },
  {
    id: 1234,
    name: "Cool honey 2",
    description: "A very cool honey to use 2",
    price: 500,
    image: "/honey2.jpg",
  },
];
