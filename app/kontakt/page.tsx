"use client"

import Link from "next/link"
import { Mail, Phone, ShieldAlert, FileText, ArrowLeft, Crown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <div className="relative">
      {/* jemný background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-96 w-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 h-96 w-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-24 max-w-6xl">
        {/* Back button */}
        <div className="mb-10">
          <Link href="https://hexado.pro">
            <Button
              variant="outline"
              className="bg-background/40 border-border/60 hover:border-secondary/60 hover:text-secondary hover:bg-background/60 rounded-xl"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zpět na Hexado.pro
            </Button>
          </Link>
        </div>

        {/* Header (NEŠAHÁM) */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Kontakt</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kontaktujte <span className="text-primary">Hexado</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Máte dotaz, potřebujete pomoc nebo řešíte fakturaci či reklamaci? Jsme tu pro vás.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT – méně boxů, víc "sections" */}
          <div className="space-y-10">
            {/* Podpora */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-secondary/15 flex items-center justify-center">
                  <Crown className="h-4 w-4 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Podpora</h3>
                <Badge className="bg-secondary/20 text-secondary border-secondary/30">Doporučeno</Badge>
              </div>

              <div className="rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 p-5">
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-secondary" />
                    <a className="hover:text-secondary transition-colors" href="mailto:support@hexado.pro">
                      support@hexado.pro
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-secondary" />
                    <a className="hover:text-secondary transition-colors" href="tel:+420910122780">
                      +420 910 122 780
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Reklamace + Legal v jednom méně-boxovaném bloku */}
            <div className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/60 p-6 space-y-6">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 space-y-2">
                  <h4 className="text-lg font-bold flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4 text-secondary" />
                    Reklamace
                  </h4>
                  <a className="text-sm text-muted-foreground hover:text-secondary transition-colors" href="mailto:reklamace@hexado.pro">
                    reklamace@hexado.pro
                  </a>
                </div>

                <div className="w-px bg-border/70 hidden sm:block" />

                <div className="flex-1 space-y-2">
                  <h4 className="text-lg font-bold flex items-center gap-2">
                    <FileText className="h-4 w-4 text-secondary" />
                    Právní & fakturační
                  </h4>
                  <a className="text-sm text-muted-foreground hover:text-secondary transition-colors" href="mailto:legal@hexado.pro">
                    legal@hexado.pro
                  </a>
                </div>
              </div>
            </div>

            {/* Poskytovatel služby – subtilnější */}
            <div className="rounded-2xl bg-card/30 backdrop-blur-sm border border-border/60 p-6">
              <h3 className="text-lg font-bold mb-3">Poskytovatel služby</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  <span className="text-foreground font-semibold">Jméno:</span> PhDr. Petr Balek
                </p>
                <p>
                  <span className="text-foreground font-semibold">IČO:</span> 72638699
                </p>
                <p>
                  <span className="text-foreground font-semibold">Sídlo:</span> třída Tomáše Baťi 955, 760 01 Zlín
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT – form ve “featured” card, víc žluté */}
          <Card className="bg-card/70 backdrop-blur-sm border-2 border-secondary/40 shadow-lg shadow-secondary/10 rounded-3xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Napište nám</h3>
                <Badge className="bg-secondary/20 text-secondary border-secondary/30">24/7</Badge>
              </div>

              <form className="space-y-4" method="POST" action="/api/contact">
                <div>
                  <label className="text-sm text-muted-foreground">Jméno</label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl bg-background/40 border border-border/70 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl bg-background/40 border border-border/70 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Zpráva</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="mt-1 w-full rounded-xl bg-background/40 border border-border/70 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl h-11 font-bold shadow-lg shadow-secondary/20"
                >
                  Odeslat zprávu
                </Button>

                <p className="text-xs text-muted-foreground mt-3">
                  Zprávy z formuláře jsou odesílány na <span className="text-secondary font-semibold">support@hexado.pro</span>.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

