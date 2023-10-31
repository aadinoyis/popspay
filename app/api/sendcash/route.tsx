import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";
import { supabase } from "../../utils/Supabase";

export async function POST(req: Request) {
  try {
    const token = cookies().get("hanko")?.value;
    const payload = jose.decodeJwt(token ?? "");

    const userID = payload.sub;

    const { senderID, receiverEmail, amount } = await req.json();

    if (!userID) {
      return NextResponse.json({ message: 'user not found' }, { status: 200 });
    }

    if (userID !== senderID) {
      return NextResponse.json({ message: 'You are not authorized to perform this transaction' }, { status: 200 });
    }
    
    // Fetch sender and receiver data
    const { data: senderData, error: senderError } = await supabase
    .from('users')
    .select('email, user_id, balance')
    .eq('user_id', userID);

    const { data: receiverData, error: receiverError } = await supabase
      .from('users')
      .select('email, user_id, balance')
      .eq('email', receiverEmail);

    if (senderError || receiverError) {
      throw new Error('Error fetching user data');
    }

    if (senderData.length === 0 || receiverData.length === 0) {
      throw new Error('Sender or receiver not found');
    }

    const sender = senderData[0];
    const receiver = receiverData[0];

    // Calculate new balances
    const senderNewBalance = sender.balance - amount;
    const receiverNewBalance = receiver.balance + amount;

    // Update sender's balance
    const { error: senderUpdateError } = await supabase
      .from('users')
      .update({ balance: senderNewBalance })
      .eq('user_id', sender.user_id);

    if (senderUpdateError) {
      throw new Error('Error updating sender balance');
    }

    // Update receiver's balance
    const { error: receiverUpdateError } = await supabase
      .from('users')
      .update({ balance: receiverNewBalance })
      .eq('user_id', receiver.user_id);

    if (receiverUpdateError) {
      throw new Error('Error updating receiver balance');
    }

    return NextResponse.json({ message: 'Transaction was successful' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Transaction was not successful" }, { status: 404 });
  }
}