import { NextResponse } from "next/server";

const JAMBOT_WEBHOOK_URL = "https://social.jam-bot.com/api/leads/webhook/netlify?tenant=josh&site=concreteliftinginsurance";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, company, insuranceType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // Forward to Jambot
    try {
      await fetch(JAMBOT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || "",
          company: company || "",
          insuranceType: insuranceType || "",
          message,
          source: "concreteliftinginsurance.com",
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (webhookError) {
      console.error("Jambot webhook error:", webhookError);
      // Continue even if webhook fails - don't block the user
    }

    // Log the contact submission
    console.log("Contact form submission:", {
      name,
      email,
      phone: phone || "",
      company: company || "",
      insuranceType: insuranceType || "",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry. We will contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request. Please try again." },
      { status: 500 }
    );
  }
}
