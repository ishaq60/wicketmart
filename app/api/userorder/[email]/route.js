import connectDB from "@/app/server/libs/connectDB";

export async function GET(req, context) {
  const { email } = await context.params; // ✅ await for App Router

  try {
    const db = await connectDB();
    const Ordercollection = db.collection("orders");

    const order = await Ordercollection.find({ "customer.email": email }).toArray();

    if (!order || order.length === 0) {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching order by email:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
