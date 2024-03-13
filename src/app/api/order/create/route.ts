import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { v4 as uuid } from "uuid";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY!,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const totalAmount = Number(searchParams.get("amount")); // in paisa

  const amount = totalAmount * 100;
  const options = {
    amount: amount.toString(),
    currency: "INR",
    receipt: uuid(),
  };

  const order = await instance.orders.create(options);
  console.log(order, ": FROM create order page");
  return NextResponse.json({ message: "success", order });
}
