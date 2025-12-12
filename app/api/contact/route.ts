import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Chybí povinná pole" },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: "Hexado Kontakt <onboarding@resend.dev>", 
      // ⚠️ na free plánu MUSÍ být resend.dev
      to: ["support@hexado.pro"],
      replyTo: email as string,
      subject: `📩 Nová zpráva – ${name}`,
      html: `
        <h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>${message}</p>
      `,
    })

    return NextResponse.redirect(
      new URL("/kontakt?sent=1", req.url),
      303
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Nepodařilo se odeslat zprávu" },
      { status: 500 }
    )
  }
}
