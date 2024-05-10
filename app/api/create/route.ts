import dbInit from "@/dbInit";
import { menu } from "@/models/menu";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    try {
        await dbInit();
        const { title, details, price, image } = await req.json();
        const res = await menu.create({ title, details, price, image });
        return NextResponse.json({ message: "menu posted" });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error });
    }
}
