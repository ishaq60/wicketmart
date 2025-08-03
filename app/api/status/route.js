
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import connectDB from "@/app/server/libs/connectDB";

/**
 * PATCH /api/status
 * Expects JSON body: { id: "orderId", status: "newStatus" }
 * Updates the status of an order by ID.
 */
export const PATCH = async (request) => {
  try {
    const db = await connectDB();
    const orderCollection = db.collection("orders");

    const { id, status } = await request.json();

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid order ID" }, { status: 400 });
    }

    if (!status) {
      return NextResponse.json({ error: "Status is required" }, { status: 400 });
    }

    const result = await orderCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: status } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Status updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating order status:", error);
    return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
  }
};

/**
 * DELETE /api/status
 * Expects JSON body: { id: "orderId" }
 * Deletes an order by ID.
 */
export const DELETE = async (request) => {
  try {
    const db = await connectDB();
    const orderCollection = db.collection("orders");

    const { id } = await request.json();

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid o
