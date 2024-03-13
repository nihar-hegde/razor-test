"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductInterfaceI } from "@/constant";
import Image from "next/image";
import { Button } from "../ui/button";
import PaymentButton from "../PaymentButton";

const Productcard = ({ productData }: { productData: ProductInterfaceI }) => {
  const handleOnClick = () => {
    alert(productData.name);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{productData.name}</CardTitle>
        <CardDescription>{productData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={productData.image}
          alt={productData.name}
          width={50}
          height={50}
        />
        <p>₹ {productData.price}</p>
      </CardContent>
      <CardFooter>
        <PaymentButton amount={productData.price} />
      </CardFooter>
    </Card>
  );
};

export default Productcard;
