import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs" // <-- důležité na Vercelu
export const dynamic = "force-dynamic" // aby se to nikdy necacheovalo

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY")
      return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    const formData = await req.formData()
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Chybí povinná pole" }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: "Hexado Kontakt <onboarding@resend.dev>", // free plan OK
      to: ["nejstevereal@gmail.com"],
      replyTo: String(email),
      subject: `📩 Nová zpráva – ${String(name)}`,
      html: `
        <h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${String(name)}</p>
        <p><strong>Email:</strong> ${String(email)}</p>
        <hr />
        <p>${String(message)}</p>
      `,
    })

    if (error) {
      console.error("RESEND ERROR:", error)
      return NextResponse.json({ error: "Resend error", details: error }, { status: 500 })
    }

    console.log("Email sent:", data)

    return NextResponse.redirect(new URL("/kontakt?sent=1", req.url), 303)
  } catch (err) {
    console.error("CONTACT API ERROR:", err)
    return NextResponse.json({ error: "Nepodařilo se odeslat zprávu" }, { status: 500 })
  }
}


