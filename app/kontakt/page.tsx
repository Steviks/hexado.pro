"use client"

import Link from "next/link"
import { Mail, Phone, ArrowLeft, ShieldAlert, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        {/* Back */}
        <Link
          href="https://hexado.pro"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Zpět na Hexado.pro
        </Link>

        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">Kontakt</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kontaktujte <span className="text-primary">Hexado</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Máte dotaz, potřebujete pomoc nebo řešíte fakturaci či reklamaci? Jsme tu pro vás.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <div className="space-y-12">
            {/* Podpora */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Podpora</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:support@hexado.pro" className="hover:text-primary transition-colors">
                    support@hexado.pro
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+420910122780" className="hover:text-primary transition-colors">
                    +420 910 122 780
                  </a>
                </div>
              </div>
            </section>

            {/* Reklamace + Legal (legal je pod reklamace) */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Reklamace & právní záležitosti</h3>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="h-4 w-4 text-secondary" />
                  <a href="mailto:reklamace@hexado.pro" className="hover:text-secondary transition-colors">
                    reklamace@hexado.pro
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-secondary" />
                  <a href="mailto:legal@hexado.pro" className="hover:text-secondary transition-colors">
                    legal@hexado.pro
                  </a>
                </div>
              </div>
            </section>

            {/* Provider */}
            <section className="text-sm text-muted-foreground space-y-1 pt-6 border-t border-border">
              <p className="font-semibold text-foreground">Poskytovatel služby</p>
              <p>PhDr. Petr Balek</p>
              <p>IČO: 72638699</p>
              <p>třída Tomáše Baťi 955, 760 01 Zlín</p>
            </section>
          </div>

          {/* RIGHT – Form */}
          <Card className="rounded-3xl bg-card/90 border border-border/60 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Napište nám</h3>

              <form method="POST" action="/api/contact" className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">Jméno</label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl bg-background border border-border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl bg-background border border-border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Zpráva</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="mt-1 w-full rounded-xl bg-background border border-border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <Button className="w-full bg-primary text-primary-foreground font-semibold rounded-xl h-11 hover:bg-primary/90">
                  Odeslat zprávu
                </Button>

                <p className="text-xs text-muted-foreground pt-2">
                  Zprávy z formuláře jsou odesílány na{" "}
                  <span className="text-primary font-medium">support@hexado.pro</span>.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
