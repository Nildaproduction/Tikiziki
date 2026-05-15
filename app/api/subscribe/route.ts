import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email, country, postalCode } = await req.json()

    if (!email) {
      return NextResponse.json(
        { error: "Email required" },
        { status: 400 }
      )
    }

    // Store subscriber + send welcome email
    const result = await resend.emails.send({
      from: "Tiki Ziki <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to Tiki Ziki Club 🔥",
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>Welcome to Tiki Ziki Club</h2>
          <p>You’re now subscribed for exclusive drops, music, and updates.</p>

          <hr/>

          <p><b>Your details:</b></p>
          <p>Email: ${email}</p>
          <p>Country: ${country || "N/A"}</p>
          <p>Postal Code: ${postalCode || "N/A"}</p>

          <br/>
          <p>Follow Tiki Ziki for updates 🔥</p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      id: result.data?.id,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
