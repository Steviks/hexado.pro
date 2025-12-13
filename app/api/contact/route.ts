import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  try {
    // 1️⃣ ENV check
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY")
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    // 2️⃣ Form data
    const formData = await req.formData()
    const nameRaw = formData.get("name")
    const emailRaw = formData.get("email")
    const messageRaw = formData.get("message")

    if (!nameRaw || !emailRaw || !messageRaw) {
      return NextResponse.json(
        { error: "Chybí povinná pole" },
        { status: 400 }
      )
    }

    const name = String(nameRaw).trim()
    const email = String(emailRaw).trim()
    const message = String(messageRaw).trim()

    // 3️⃣ Email validace (nutné kvůli replyTo)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Neplatný email" },
        { status: 400 }
      )
    }

    // 4️⃣ Odeslání emailu přes Resend
    const { data, error } = await resend.emails.send({
      from: "Hexado Kontakt <onboarding@resend.dev>", // free plan OK
      to: ["nejstevereal@gmail.com"], // TESTING MODE
      replyTo: `${name} <${email}>`,
      subject: `📩 Nová zpráva – ${name}`,
      html: `
        <h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    if (error) {
      console.error("RESEND ERROR:", error)
      return NextResponse.json(
        { error: "Resend error", details: error },
        { status: 500 }
      )
    }

    console.log("Email sent:", data)

    // 5️⃣ Redirect po úspěchu
    return NextResponse.redirect(
      new URL("/kontakt?sent=1", req.url),
      303
    )
  } catch (err) {
    console.error("CONTACT API ERROR:", err)
    return NextResponse.json(
      { error: "Nepodařilo se odeslat zprávu" },
      { status: 500 }
    )
  }
}
