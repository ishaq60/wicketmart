import connectDB from "@/app/server/libs/connectDB";



export const GET = async (req) => {
  try {
    const db = await connectDB();
    const usersCollection= db.collection("user");
    const users = await usersCollection.find().toArray();

    return new Response(
      JSON.stringify({ res: users }), // wrap in an object for consistency
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("[GET_userss_ERROR]:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch users" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};