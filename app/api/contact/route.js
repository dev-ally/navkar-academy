import { Resend } from "resend";
// import ContactTemplate from "@/components/email/ContactTemplate";
import { NextResponse } from "next/server";
import ContactTemplate from "@/components/email/ContactTemplate";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { firstname, lastname, email, phone, message } = await request.json();
  console.log("FIRSTNAME", firstname);
  console.log("LASTNAME", lastname);
  try {
    const { error } = await resend.emails.send({
      from: "Navkar Academy <contact@aryanshinde.in>",
      to: ["shindearyan179@gmail.com"],
      subject: "New Website Contact Enquiry",
      react: ContactTemplate({
        name: `${firstname} ${lastname}`,
        email,
        phone,
        message,
        u_user: "admin",
      }),
    });

    const { error: uerror } = await resend.emails.send({
      from: "Navkar Academy <contact@aryanshinde.in>",
      to: [email],
      subject: "Thank you for contacting Navkar Academy!",
      react: ContactTemplate({
        name: `${firstname} ${lastname}`,
        email,
        phone,
        message,
        u_user: "user",
      }),
    });

    console.log("ERROR", error, uerror);

    if (error || uerror) {
      return NextResponse.json({ error, status: 500 });
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error, status: 500 });
  }
}
