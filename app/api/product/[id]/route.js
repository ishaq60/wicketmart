import connectDB from "@/app/server/libs/connectDB";
import { ObjectId } from "mongodb";

export async function GET(req, context) {
  const { id } = context.params; // ✅ remove `await`

  try {
    const db = await connectDB();
    const ProductCollection = db.collection("products");

    const product = await ProductCollection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
