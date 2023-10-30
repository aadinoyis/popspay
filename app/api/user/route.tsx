import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";
import { supabase } from "@/app/utils/Supabase";

export async function POST(req: Request) {
  const token = cookies().get("hanko")?.value;
  const payload = jose.decodeJwt(token ?? "");

  const userID = payload.sub;

  const { email } = await req.json();
  if (userID) {
    
    if (typeof email !== "string" || email.length === 0) {
      throw new Error("That can't be an email");
    }

    // Create a new user if the user is not found
    const { data, error } = await supabase
    .from('users')
    .upsert({ user_id: userID, email: email })
    .select()

    return NextResponse.json({ message: data }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
}

export async function GET(req: Request) {
  const token = cookies().get("hanko")?.value;
  const payload = jose.decodeJwt(token ?? "");

  const userID = payload.sub;

  if (userID) {
    // Create a new user if the user is not found
    const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('user_id', userID);

    return NextResponse.json({ message: data }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
}