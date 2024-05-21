import dbInit from "@/dbInit";
import { orders } from "@/models/orders";
import { NextResponse } from "next/server";

export async function PUT(req: any) {
    try {
        await dbInit();

        // console.log("req.params:",await req.params);
        const url = new URL(req.url);
        const id = url.searchParams.get("id")
        const updatedOrder = await orders.findOneAndUpdate(
            { _id: id },
            { completed: true },
            { new: true }
        );

        return NextResponse.json(updatedOrder);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
