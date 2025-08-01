import connectDB from "@/app/server/libs/connectDB";
import { NextResponse } from "next/server";


export const POST = async (request) => {
  try {
    const db = await connectDB();
    const orderCollection = db.collection("orders");

    const body = await request.json();

    const { customer, items, total } = body;

    // Basic validation
    if (!customer?.name || !customer?.email || !Array.isArray(items) || items.length === 0 || !total) {
      return NextResponse.json({ error: "Invalid order data" }, { status: 400 });
    }

    const result = await orderCollection.insertOne({
      customer,
      items,
      total,
      status: "pending",
      createdAt: new Date()
    });

    return NextResponse.json(
      { message: "Order received", orderId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error storing order:", error);
    return NextResponse.json({ error: "Failed to store order" }, { status: 500 });
  }
};
