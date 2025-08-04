import connectDB from '@/app/server/libs/connectDB';
import { NextResponse } from 'next/server';


export async function POST(req) {
  try {
    const db = await connectDB();
    const productCollection = db.collection('products');

    const body = await req.json();

 

    const result = await productCollection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: 'Product added!', productId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error adding product' },
      { status: 500 }
    );
  }
}



