import dbInit from "@/dbInit";
import { menu } from "@/models/menu";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PUT(req: any) {
    const { userId } = auth();

    if (userId != process.env.ADMIN_ID) {
        return NextResponse.json("Unauthorized", { status: 401 });
    }
    
    try {
        await dbInit();
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        const { title, details, price, image } = await req.json();
        const res = await menu.findByIdAndUpdate(id, { title, details, price, image });
        return NextResponse.json(res);
    } catch (error) {
        return NextResponse.json(error)
    }
}