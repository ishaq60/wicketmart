import connectDB from "@/app/server/libs/connectDB";


export const GET = async (req) => {
  try {
    const db = await connectDB();
    const productCollection= db.collection("products");
    const doctors = await productCollection.find().toArray();

    return new Response(
      JSON.stringify({ res: doctors }), // wrap in an object for consistency
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("[GET_DOCTORS_ERROR]:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch doctors" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};