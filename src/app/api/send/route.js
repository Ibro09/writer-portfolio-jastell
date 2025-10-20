import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Configure mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use any SMTP provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Compose the email
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'ibsalam24@gmail.com', // receiver email (your email)
      subject: `New Message from ${name}`,
      text: message,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true, info });
  } catch (err) {
    console.error("Mail error:", err);
    return Response.json({ success: false, error: err.message });
  }
}
