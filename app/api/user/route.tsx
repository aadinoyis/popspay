import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";
import { supabase } from "../../utils/Supabase";

export async function POST(req: Request) {
  try {
    const token = cookies().get("hanko")?.value;
    const payload = jose.decodeJwt(token ?? "");

    const userID = payload.sub;

    const { email } = await req.json();
    if (!userID) {
      return NextResponse.json({ message: 'user not found' }, { status: 200 });
    }
    // Create a new user if the user is not found
    const { data, error } = await supabase
    .from('users')
    .upsert({ user_id: userID, email: email })
    .select()

    console.log({ message: userID, email: email })
    return NextResponse.json({ message: data, email: email }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
}

export async function GET(req: Request) {
  try {
    const token = cookies().get("hanko")?.value;
    const payload = jose.decodeJwt(token ?? "");

    const userID = payload.sub;
    const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('user_id', userID);

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
}

// export async function GET(req: Request) {
//   const token = cookies().get("hanko")?.value;
//   const payload = jose.decodeJwt(token ?? "");

//   const userID = payload.sub;

//   if (userID) {
//     // Create a new user if the user is not found
//     const { data, error } = await supabase
//     .from('users')
//     .select('*')
//     .eq('user_id', userID);

//     return NextResponse.json({ message: data }, { status: 200 });
//   } else {
//     return NextResponse.json({ error: "Not Found" }, { status: 404 });
//   }
// }

// {"message":"302bf13e-4ad2-4e74-bc4f-e40941d93d4d"}