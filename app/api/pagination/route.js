import connectDB from "@/app/server/libs/connectDB";

export const GET = async (req) => {
  try {
    const db = await connectDB();
    const productCollection = db.collection("products");

    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const pageSize = parseInt(searchParams.get("pageSize")) || 8;

    const category = searchParams.get("category") || "All";
    const rating = parseFloat(searchParams.get("rating")) || null;
    const minPrice = parseFloat(searchParams.get("minPrice")) || 0;
    const maxPrice = parseFloat(searchParams.get("maxPrice")) || Infinity;

    const skip = (page - 1) * pageSize;

    const filter = {};

    if (category && category !== "All") {
      filter.category = category;
    }

    if (minPrice > 0 || maxPrice !== Infinity) {
      filter.price = { $gte: minPrice, $lte: maxPrice };
    }

    if (rating !== null && !Number.isNaN(rating)) {
      filter.averageRating = rating;
    }

    console.log("Filter:", filter);

    const products = await productCollection
      .find(filter)
      .skip(skip)
      .limit(pageSize)
      .toArray();

    const total = await productCollection.countDocuments(filter);

    return new Response(
      JSON.stringify({ products, total }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("[GET_pagination_ERROR]:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch products" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
