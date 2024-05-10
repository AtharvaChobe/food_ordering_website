import dbInit from "@/dbInit";
import { menu } from "@/models/menu";
import { NextResponse } from "next/server";


export async function GET(req:any){
    try {
        await dbInit();
        const res = await menu.find();
        return NextResponse.json(res);
    } catch (error) {
        return NextResponse.json({error})
    }
}