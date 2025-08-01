import connectDB from "@/app/server/libs/connectDB";


export const GET = async (req) => {
  try {
    const db = await connectDB();
    const productCollection = db.collection("products");

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const pageSize = parseInt(searchParams.get("pageSize")) || 8;

    const skip = (page - 1) * pageSize;

    const products = await productCollection.find({})
      .skip(skip)
      .limit(pageSize)
      .toArray();

    const total = await productCollection.countDocuments();

    return new Response(
      JSON.stringify({ products, total }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("[GET_allproduct_ERROR]:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch products" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
