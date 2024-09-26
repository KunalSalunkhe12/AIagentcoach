import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = "https://cfkdwcrvjjpprhbmzzxz.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  const { email, userId } = await request.json();

  console.log("Subscribing user:", email, userId);

  try {
    // Here you would typically add the email to your newsletter service
    // For this example, we'll just update the user's status in Supabase

    // const { data, error } = await supabase
    //   .from("user")
    //   .update({ subscribed_to_newsletter: true })
    //   .eq("user_id", userId);

    // if (error) throw error;

    return NextResponse.json({
      message: "Successfully subscribed to newsletter",
    });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      { error: "Failed to subscribe to newsletter" },
      { status: 500 }
    );
  }
}
