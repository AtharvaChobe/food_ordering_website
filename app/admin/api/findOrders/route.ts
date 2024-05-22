import dbInit from "@/dbInit";
import { orders } from "@/models/orders";
import { NextResponse } from "next/server";

export async function GET(req:any) {
    try {
        await dbInit();
        const res = await orders.find();
        return NextResponse.json(res);
    } catch (error) {
        return NextResponse.json({message:error})
    }
}