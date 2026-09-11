import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/mail";
import { appendContactRow } from "@/lib/sheets";

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.firstName || !data.lastName || !data.email) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    const results = await Promise.allSettled([
      sendContactNotification(data),
      appendContactRow(data),
    ]);

    const failures = results.filter((r) => r.status === "rejected");
    if (failures.length === results.length) {
      // Both integrations failed
      console.error("Contact form: both notifications failed", failures);
      return NextResponse.json(
        { error: "Something went wrong submitting your request. Please try again or call us directly." },
        { status: 500 }
      );
    }

    if (failures.length > 0) {
      console.error("Contact form: partial failure", failures);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}
