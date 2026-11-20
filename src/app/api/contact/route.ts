import { NextResponse } from "next/server";

const JAMBOT_WEBHOOK_URL = "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=concreteliftinginsurance.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, company, insuranceType, grossSales, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields: name and email are required." },
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

    // Forward to Jambot. A failed delivery is reported as a failure (502), never as success,
    // so the client can try its Netlify Forms fallback and only then show an error.
    let delivered = false;
    try {
      const upstream = await fetch(JAMBOT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form_name: "contact",
          name,
          email,
          phone: phone || "",
          company: company || "",
          insuranceType: insuranceType || "",
          grossSales: grossSales || "",
          message: message || "",
          source: "concreteliftinginsurance.com",
          timestamp: new Date().toISOString(),
        }),
      });
      // fetch() resolves on 4xx/5xx; only a 2xx means the lead was taken.
      delivered = upstream.ok;
      if (!delivered) console.error("Jambot webhook rejected contact lead:", upstream.status);
    } catch (webhookError) {
      console.error("Jambot webhook error:", webhookError);
    }

    if (!delivered) {
      return NextResponse.json(
        { error: "We could not deliver your message. Please try again or call 844-967-5247." },
        { status: 502 }
      );
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
