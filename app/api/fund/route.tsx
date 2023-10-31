import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";
import { supabase } from "../../utils/Supabase";

export async function POST(req: Request) {
  try {
    const token = cookies().get("hanko")?.value;
    const payload = jose.decodeJwt(token ?? "");

    const userID = payload.sub;

    const { ref, email, amount } = await req.json();

    if (!userID) {
      return NextResponse.json({ message: 'user not found' }, { status: 200 });
    }

    if (!userID && !ref && !amount) {
      return NextResponse.json({ message: 'You are not authorized to perform this transaction' }, { status: 200 });
    }
    
    // Fetch sender and receiver data
    const { data: senderData, error: senderError } = await supabase
    .from('users')
    .select('email, user_id, balance')
    .eq('email', email);

    if (senderError) {
      throw new Error('Error fetching user data');
    }

    const sender = senderData[0];

    // Calculate new balances
    const senderNewBalance = parseFloat(sender.balance) + parseFloat(amount);

    // Update sender's balance
    const { error: senderUpdateError } = await supabase
      .from('users')
      .update({ balance: senderNewBalance })
      .eq('email', sender.email);

    if (senderUpdateError) {
      throw new Error('Error updating sender balance');
    }

    return NextResponse.json({ message: 'Account funded successful' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Account failed to get fund" }, { status: 404 });
  }
}