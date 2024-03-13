import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import crypto from "crypto";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY!,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the body once

    const { razorpayOrderId, razorpaySignature, razorpayPaymentId } = body;

    const verifyingData = razorpayOrderId + "|" + razorpayPaymentId;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_APT_SECRET!)
      .update(verifyingData)
      .digest("hex");

    const isAuthentic = expectedSignature === razorpaySignature;

    if (!isAuthentic) {
      return NextResponse.json(
        { message: "invalid payment signature", error: true },
        { status: 400 }
      );
    }

    // connect db and update data
    console.log("DOne from verify route");
    return NextResponse.json(
      { message: "payment success", error: false },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error verifying payment:-", error);
    return NextResponse.json(
      { message: "Error verifying payment", error: true },
      { status: 500 }
    );
  }
}
