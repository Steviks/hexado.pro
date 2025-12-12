
"use client"

import { Mail, Phone, ShieldAlert, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
          Kontakt
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Kontaktujte <span className="text-primary">Hexado</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Máte dotaz, potřebujete pomoc nebo řešíte fakturaci či reklamaci?
          Jsme tu pro vás.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* LEFT – kontaktní informace */}
        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Podpora</h3>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@hexado.pro</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+420 910 122 780</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-bold">Reklamace</h3>
              <div className="flex items-center gap-3 text-sm">
                <ShieldAlert className="h-4 w-4 text-secondary" />
                <span>reklamace@hexado.pro</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-bold">Právní & fakturační záležitosti</h3>
              <div className="flex items-center gap-3 text-sm">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span>legal@hexado.pro</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 text-sm text-muted-foreground space-y-1">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Poskytovatel služby
              </h3>
              <p><strong>Jméno:</strong> PhDr. Petr Balek</p>
              <p><strong>IČO:</strong> 72638699</p>
              <p>
                <strong>Sídlo:</strong> třída Tomáše Baťi 955,<br />
                760 01 Zlín
              </p>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT – kontaktní formulář */}
        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">
              Napište nám
            </h3>

            <form
              className="space-y-4"
              method="POST"
              action="/api/contact"
            >
              <div>
                <label className="text-sm text-muted-foreground">
                  Jméno
                </label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg bg-background border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg bg-background border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground">
                  Zpráva
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-lg bg-background border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Odeslat zprávu
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              Zprávy z formuláře jsou odesílány na <strong>support@hexado.pro</strong>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
