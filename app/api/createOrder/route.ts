import dbInit from "@/dbInit";
import { orders } from "@/models/orders";
import { NextResponse } from "next/server";

export async function POST(req:any) {
    try {
        await dbInit();
        const { fullname, phone, address, userId, products, totalAmount } = await req.json();
        const newOrder = await orders.create({ 
            fullname, 
            phone, 
            address, 
            userId, 
            products, 
            totalAmount,
            completed: false
        });
        return NextResponse.json(newOrder);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
