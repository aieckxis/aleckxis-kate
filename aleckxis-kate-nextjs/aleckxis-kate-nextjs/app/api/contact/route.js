import { Resend } from 'resend';

// Where messages should land — change this if you ever switch inboxes.
const TO_EMAIL = 'aleckxiskate@gmail.com';

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set.');
      return Response.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Please fill in all fields.' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      // Resend's shared test sender. Works out of the box without a
      // verified domain, but can only deliver to the account owner's
      // own email (aleckxiskate@gmail.com must be the Resend account
      // email, or the address you verified during signup).
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to send message.' },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return Response.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    );
  }
}
