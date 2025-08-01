import connectDB from "@/app/server/libs/connectDB";


export const GET = async (req) => {
  try {
    const db = await connectDB();
    const productCollection= db.collection("products");
    const products = await productCollection.find().toArray();

    return new Response(
      JSON.stringify({ res: products }), // wrap in an object for consistency
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("[GET_products_ERROR]:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch products" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};