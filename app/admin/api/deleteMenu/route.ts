import dbInit from "@/dbInit"
import { menu } from "@/models/menu";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"


export async function DELETE(req: any) {
    const { userId } = auth();

    if (userId != process.env.ADMIN_ID) {
        return NextResponse.json("Unauthorized", { status: 401 });
    }
    try {
        await dbInit();
        const url = new URL(req.url);
        const id = url.searchParams.get("id")
        const res = await menu.findByIdAndDelete(id);
        return NextResponse.json({ res, message: "deleted" })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error })
    }
}