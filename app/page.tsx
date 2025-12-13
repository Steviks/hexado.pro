"use client"

import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, Trophy, Zap, Shield, Rocket, Activity, Crown, Server, Car, ChevronDown } from "lucide-react"


type Plan = {
  name: string
  ramGb: number
  priceCzk: number
  ssdGb: number
  vcpu: number
  backups: number
  featured?: boolean
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 100 // 100px offset for fixed navbar
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const plans = useMemo<Plan[]>(
    () => [
      { name: "Dirt", ramGb: 1, priceCzk: 30, ssdGb: 15, vcpu: 1, backups: 10 },
      { name: "Grass", ramGb: 2, priceCzk: 60, ssdGb: 30, vcpu: 2, backups: 10 },
      { name: "Wood", ramGb: 3, priceCzk: 90, ssdGb: 45, vcpu: 3, backups: 10 },
      { name: "Stone", ramGb: 4, priceCzk: 120, ssdGb: 60, vcpu: 4, backups: 15 },
      { name: "Coal", ramGb: 6, priceCzk: 180, ssdGb: 90, vcpu: 4, backups: 15 },
      { name: "Iron", ramGb: 8, priceCzk: 240, ssdGb: 120, vcpu: 5, backups: 15, featured: true },
      { name: "Gold", ramGb: 12, priceCzk: 360, ssdGb: 180, vcpu: 6, backups: 15 },
      { name: "Diamond", ramGb: 16, priceCzk: 480, ssdGb: 240, vcpu: 8, backups: 20 },
      { name: "Netherite", ramGb: 24, priceCzk: 720, ssdGb: 360, vcpu: 10, backups: 20 },
      { name: "Bedrock", ramGb: 32, priceCzk: 960, ssdGb: 480, vcpu: 12, backups: 20 },
    ],
    []
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div className="bg-background/40 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-primary/5">
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/images/1.png" alt="Hexado" className="h-8 w-auto" />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
                <a
                  onClick={() => handleSmoothScroll("pricing")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                >
                  Ceník
                </a>
                <a
                  onClick={() => handleSmoothScroll("services-section")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                >
                  Služby
                </a>
                <a
                  onClick={() => handleSmoothScroll("why-us-section")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                >
                  O nás
                </a>
                <a
                  href="../kontakt"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                >
                  Kontakt
                </a>
              </nav>

              <div className="hidden md:flex items-center">
                <Button
                  className="bg-secondary text-secondary-foreground font-bold shadow-lg shadow-secondary/30 transition-all duration-200 cursor-pointer hover:bg-secondary/90 hover:shadow-secondary/50 hover:brightness-110"
                  target="_blank"
                  onClick={() => (window.location.href = "#")}
                >
                  Administrace
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="md:hidden mt-4 pt-4 border-t border-border/50 flex flex-col gap-4">
                <a
                  onClick={() => handleSmoothScroll("pricing")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer block"
                >
                  Ceník
                </a>
                <a
                  onClick={() => handleSmoothScroll("services-section")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer block"
                >
                  Služby
                </a>
                <a
                  onClick={() => handleSmoothScroll("why-us-section")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer block"
                >
                  O nás
                </a>
                <a
                  href="../kontakt"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt
                </a>
                <Button
                  className="bg-secondary text-secondary-foreground font-bold shadow-lg shadow-secondary/30 transition-all duration-200 cursor-pointer hover:bg-secondary/90 hover:shadow-secondary/50 hover:brightness-110 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    window.location.href = "#"
                  }}
                >
                  Administrace
                </Button>
              </nav>
            )}
          </div>
        </div>
      </header>

            {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 animate-fade-in-up">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* LEFT */}
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 text-base px-6 py-2">
                  🚀 Herní Hosting Nové Generace
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance leading-tight">
                  Spusťte svůj <span className="text-primary">herní server</span> během sekundy
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
                  Bleskurychle, bezpečně a bez starostí. Tisíce hráčů věří Hexado.pro.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground text-lg px-8 h-14 rounded-xl shadow-lg font-bold transition-all duration-200 cursor-pointer hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/40 hover:brightness-110"
                  onClick={() => (window.location.href = "#")}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Vytvořit Server
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-14 rounded-xl border-2 font-bold bg-background/50 transition-all duration-200 cursor-pointer hover:bg-background/80 hover:border-primary hover:text-primary hover:shadow-lg hover:brightness-110"
                  onClick={() => handleSmoothScroll("services-section")}
                >
                  Zjistit Více
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 pt-4 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {["/avatars/1mc.png", "/avatars/2mc.png", "/avatars/3mc.png", "/avatars/4mc.png"].map((src, i) => (
                    <div
                      key={src}
                      className="w-12 h-12 rounded-full border-2 border-background shadow-sm bg-background overflow-hidden"
                      style={{ zIndex: 10 - i }}
                    >
                      <img
                        src={src}
                        alt={`Hráč ${i + 1}`}
                        className="w-full h-full object-contain scale-125"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <div className="text-lg font-bold text-foreground">1 000+ hráčů</div>
                  <div className="text-sm text-muted-foreground">věří Hexado.pro</div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/minecraft-gaming-server-colorful-kids-playing.jpg"
                  alt="Hosting herního serveru"
                  className="w-full h-auto"
                />
                <div className="absolute top-6 right-6 bg-secondary/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <Trophy className="h-8 w-8 text-secondary-foreground" />
                </div>
                <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services-section" className="relative py-24 px-4 overflow-hidden">
        {/* background glow */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-secondary/40 blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative">
          {/* Headline */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="inline-flex items-center gap-2 bg-primary/10 text-primary border-primary/30 px-5 py-2 rounded-full">
              <Server className="h-4 w-4" />
              <span className="font-semibold tracking-wide">Naše služby</span>
            </Badge>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-balance">
              Hosting pro <span className="text-primary">každou hru</span>
            </h2>

            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Nejpopulárnější herní platformy na jednom místě – stabilní servery, rychlé nasazení a podpora, která
              odpovídá během pár minut.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* FiveM */}
            <Card className="group relative rounded-3xl bg-card/90 border border-border/60 shadow-[0_24px_60px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold">FiveM</h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">GTA V Roleplay servery</p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Car className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-5">
                  Ideální pro RP komunity, economy servery i akční frakční servery. Plná podpora custom skriptů a pluginů.
                </p>

                <ul className="space-y-3 text-sm text-muted-foreground flex-1">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Optimalizace pro stabilní FPS a nízký ping</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Podpora whitelistu, queue a anti-cheatu</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Rychlé zálohy a obnova serveru</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button className="w-full bg-primary text-primary-foreground font-semibold rounded-2xl h-11 hover:bg-primary/90">
                    Spustit FiveM server
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Minecraft – zvýrazněná karta */}
            <Card className="group relative rounded-3xl bg-card/95 border-2 border-secondary shadow-[0_30px_80px_rgba(0,0,0,0.9)] scale-[1.02] md:scale-105 md:-translate-y-2 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_36px_90px_rgba(0,0,0,1)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold">
                  <Crown className="h-3 w-3" />
                  Nejpopulárnější
                </Badge>
              </div>

              <CardContent className="p-8 pt-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold">Minecraft</h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                      Survival, Skyblock &amp; modpacky
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-secondary/15 flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-secondary" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-5">
                  Od malého survival serveru s kamarády po velkou veřejnou síť. Podpora Paper, Purpur, Forge i dalších
                  platforem.
                </p>

                <ul className="space-y-3 text-sm text-muted-foreground flex-1">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>1-click instalace pluginů a modpacků</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>Automatické zálohy světa a konfigurací</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>Připravené presety pro různé typy serverů</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button className="w-full bg-secondary text-secondary-foreground font-semibold rounded-2xl h-11 hover:bg-secondary/90">
                    Spustit Minecraft server
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Discord boti */}
            <Card className="group relative rounded-3xl bg-card/90 border border-border/60 shadow-[0_24px_60px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold">Discord boti</h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">Hosting pro komunity</p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-purple-500/15 flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-purple-400" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-5">
                  Spolehlivý hosting pro moderaci, hudební i custom utility boty. Ideální pro herní servery i velké komunity.
                </p>

                <ul className="space-y-3 text-sm text-muted-foreground flex-1">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>Non-stop běh botů bez restartů</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>Možnost hostingu více botů na jednom účtu</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>Logy a monitoring pro ladění a debugging</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button className="w-full bg-purple-500 text-white font-semibold rounded-2xl h-11 hover:bg-purple-600">
                    Spustit Discord bota
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<section id="pricing" className="container mx-auto px-4 py-16">
  <div className="text-center mb-16 animate-fade-in">
    <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-4">Ceník</Badge>
    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
      Plány <span className="text-secondary">Hostingu</span>
    </h2>
    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
      Vyberte si plán, který nejlépe odpovídá vašim potřebám.
    </p>
  </div>

  {/*
    DATA – všechny plány z tabulky
    (kdybyste chtěl změnit featured 3, upravte featuredPlans níže)
  */}
  {(() => {
    const allPlans = [
      { name: "Dirt", ramGb: 1, price: "30 Kč", vcpu: "1 vCPU", ssd: "15GB NVMe SSD", backups: "10x Záloha" },
      { name: "Grass", ramGb: 2, price: "60 Kč", vcpu: "2 vCPU", ssd: "30GB NVMe SSD", backups: "10x Záloha" },
      { name: "Wood", ramGb: 3, price: "90 Kč", vcpu: "3 vCPU", ssd: "45GB NVMe SSD", backups: "10x Záloha" },
      { name: "Stone", ramGb: 4, price: "120 Kč", vcpu: "4 vCPU", ssd: "60GB NVMe SSD", backups: "15x Záloha" },
      { name: "Coal", ramGb: 6, price: "180 Kč", vcpu: "4 vCPU", ssd: "90GB NVMe SSD", backups: "15x Záloha" },
      { name: "Iron", ramGb: 8, price: "240 Kč", vcpu: "5 vCPU", ssd: "120GB NVMe SSD", backups: "15x Záloha", featured: true },
      { name: "Gold", ramGb: 12, price: "360 Kč", vcpu: "6 vCPU", ssd: "180GB NVMe SSD", backups: "15x Záloha" },
      { name: "Diamond", ramGb: 16, price: "480 Kč", vcpu: "8 vCPU", ssd: "240GB NVMe SSD", backups: "20x Záloha" },
      { name: "Netherite", ramGb: 24, price: "720 Kč", vcpu: "10 vCPU", ssd: "360GB NVMe SSD", backups: "20x Záloha" },
      { name: "Bedrock", ramGb: 32, price: "960 Kč", vcpu: "12 vCPU", ssd: "480GB NVMe SSD", backups: "20x Záloha" },
    ]

    // Ty 3 nahoře:
    const featuredPlans = ["Wood", "Iron", "Diamond"]
    const topPlans = allPlans.filter((p) => featuredPlans.includes(p.name))
    const otherPlans = allPlans.filter((p) => !featuredPlans.includes(p.name))

    const PlanCard = ({
      plan,
      variant,
      popular,
    }: {
      plan: (typeof allPlans)[number]
      variant: "primary" | "secondary"
      popular?: boolean
    }) => {
      const isSecondary = variant === "secondary"
      return (
        <Card
          className={[
            "group relative rounded-3xl bg-card/90 border border-border/60 shadow-[0_24px_60px_rgba(0,0,0,0.6)]",
            "transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)]",
            popular
              ? "bg-card/95 border-2 border-secondary shadow-[0_30px_80px_rgba(0,0,0,0.9)] scale-[1.02] md:scale-105 md:-translate-y-2 hover:-translate-y-3 hover:shadow-[0_36px_90px_rgba(0,0,0,1)]"
              : "",
          ].join(" ")}
        >
          {popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold">
                <Crown className="h-3 w-3" />
                Nejpopulárnější
              </Badge>
            </div>
          )}

          <CardContent className={["p-8 space-y-6 h-full flex flex-col", popular ? "pt-10" : ""].join(" ")}>
            <div>
              <Badge
                className={[
                  "mb-4",
                  isSecondary ? "bg-secondary/20 text-secondary border-secondary/30" : "bg-primary/20 text-primary border-primary/30",
                ].join(" ")}
              >
                Minecraft {plan.name}
              </Badge>

              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-card-foreground">{plan.ramGb}GB RAM</h3>
                <div className="flex items-baseline gap-2">
                  <span className={["text-4xl font-bold", isSecondary ? "text-secondary" : "text-primary"].join(" ")}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">/měsíc</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 py-4 border-t border-border flex-1">
              <div className="flex items-center gap-2 text-sm">
                <div className={["h-1.5 w-1.5 rounded-full", isSecondary ? "bg-secondary" : "bg-primary"].join(" ")} />
                <span className="text-muted-foreground">{plan.vcpu}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className={["h-1.5 w-1.5 rounded-full", isSecondary ? "bg-secondary" : "bg-primary"].join(" ")} />
                <span className="text-muted-foreground">{plan.ssd}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className={["h-1.5 w-1.5 rounded-full", isSecondary ? "bg-secondary" : "bg-primary"].join(" ")} />
                <span className="text-muted-foreground">Neomezené databáze a sloty</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className={["h-1.5 w-1.5 rounded-full", isSecondary ? "bg-secondary" : "bg-primary"].join(" ")} />
                <span className="text-muted-foreground">{plan.backups}</span>
              </div>
            </div>

            <Button
              className={[
                "w-full rounded-2xl h-11 font-semibold mt-auto transition-all duration-200 cursor-pointer",
                isSecondary
                  ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90",
              ].join(" ")}
            >
              Začít
            </Button>
          </CardContent>
        </Card>
      )
    }

    // Mapujeme top 3: Wood (primary), Iron (secondary + popular), Diamond (primary)
    const topOrdered = [
      topPlans.find((p) => p.name === "Wood")!,
      topPlans.find((p) => p.name === "Iron")!,
      topPlans.find((p) => p.name === "Diamond")!,
    ].filter(Boolean)

    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* TOP 3 */}
        <div className="grid md:grid-cols-3 gap-6">
          <PlanCard plan={topOrdered[0]} variant="primary" />
          <PlanCard plan={topOrdered[1]} variant="secondary" popular />
          <PlanCard plan={topOrdered[2]} variant="primary" />
        </div>

        {/* DROPDOWN / accordion */}
        <details className="group">
          <summary className="list-none cursor-pointer select-none">
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-3 rounded-2xl border border-border/60 bg-card/60 backdrop-blur px-5 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-200 group-open:border-secondary/60 group-open:shadow-[0_22px_60px_rgba(0,0,0,0.55)]">
                <span className="text-sm font-semibold text-muted-foreground group-open:text-foreground transition-colors">
                  Zobrazit všechny plány
                </span>
                <span className="text-xs text-muted-foreground">
                  ({otherPlans.length} dalších)
                </span>
                <span className="ml-1 inline-flex items-center justify-center">
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 ease-out group-open:rotate-180" />
                </span>
              </div>
            </div>
          </summary>

          <div className="mt-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPlans.map((p) => (
                <PlanCard
                  key={p.name}
                  plan={p}
                  variant="primary"
                />
              ))}
            </div>

            <div className="pt-6 flex justify-center">
              <span className="text-xs text-muted-foreground">
                Tip: Iron zůstává „Nejpopulárnější“ a top 3 jsou zobrazené nahoře.
              </span>
            </div>
          </div>
        </details>
      </div>
    )
  })()}
</section>


      {/* Why Us Section */}
      <section id="why-us-section" className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 text-base px-4 py-2">
                <Trophy className="h-4 w-4 mr-2" />
                Proč Nás Zvolit?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
                Nejlepší <span className="text-secondary">hosting herních serverů</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Poskytujeme profesionální hosting s nejnovějším hardwarem a 24/7 podporou.
              </p>
            </div>

            <div className="space-y-4">
              <Card
                  className="
                    bg-card/40
                    border border-border/40
                    transition-all duration-300
                    cursor-pointer
                    hover:-translate-y-1
                    hover:bg-card/60
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                  "
                >

                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-lg">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">99.9% Dostupnost</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Váš server běží nepřetržitě díky našim systémům a profesionální infrastruktuře.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card
                  className="
                    bg-card/40
                    border border-border/40
                    transition-all duration-300
                    cursor-pointer
                    hover:-translate-y-1
                    hover:bg-card/60
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                  "
                >
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 text-lg">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">Maximální Bezpečnost</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Nejlepší DDOS ochrana herních serverů na českém trhu.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card
                  className="
                    bg-card/40
                    border border-border/40
                    transition-all duration-300
                    cursor-pointer
                    hover:-translate-y-1
                    hover:bg-card/60
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                  "
                >
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-lg">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">Okamžité Nastavení</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Servery jsou připraveny za 60 sekund. Žádné čekání, jen skok do akce!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card
                  className="
                    bg-card/40
                    border border-border/40
                    transition-all duration-300
                    cursor-pointer
                    hover:-translate-y-1
                    hover:bg-card/60
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                  "
                >
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 text-lg">
                    <Rocket className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">Ultra-Rychlé Servery</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Moderní servery v Pražském datacentru s procesory AMD Ryzen 7 a NVMe SSD pro nejlepší výkon.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
              <img
                src="/dc.jpg"
                alt="Infrastruktura herního serveru"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-8 py-6 rounded-2xl shadow-2xl border-2 border-background">
              <div className="text-5xl font-bold">100+</div>
              <div className="text-sm opacity-90">Spokojených Klientů</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-4">Často Kladené Otázky</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Máte <span className="text-secondary">Otázky</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Odpovědi na nejčastější otázky od našich klientů.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <Card
                  className="
                    bg-card/40
                    border border-border/40
                    transition-all duration-300
                    cursor-pointer
                    hover:-translate-y-1
                    hover:bg-card/60
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                  "
                >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🎮</span>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground mb-1">Na jakém processoru běží Vaše servery?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Všechny naše servery běží na processoru R7 nebo R9 - v Pražském datacentru, nebo na balíčku.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

              <Card
                  className="
                    bg-card/40
                    border border-border/40
                    transition-all duration-300
                    cursor-pointer
                    hover:-translate-y-1
                    hover:bg-card/60
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                  "
                >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">💳</span>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground mb-1">Jaké máte způsoby platby?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Přijímáme všechny kreditní karty, PayPal a bankovní převody. Vyberte si, co vám vyhovuje.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
              <Card
                  className="
                    bg-card/40
                    border border-border/40
                    transition-all duration-300
                    cursor-pointer
                    hover:-translate-y-1
                    hover:bg-card/60
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                  "
                >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">📞</span>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground mb-1">Dostanete podporu?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ano! Máme 24/7 podporu přes ticket v administraci a email. Jsme tu pro vás kdykoliv je potřebujete.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

              <Card
                  className="
                    bg-card/40
                    border border-border/40
                    transition-all duration-300
                    cursor-pointer
                    hover:-translate-y-1
                    hover:bg-card/60
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                  "
                >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🚀</span>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground mb-1">Jak rychlé je nastavení?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Váš server je připraven za 60 sekund! Stačí se registrovat, zakoupit službu a váš herní server je živý.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/1.png" alt="Hexado" className="h-8 w-auto" />
              </div>
              <p className="text-muted-foreground text-sm">Rychlé, spolehlivé a profesionální řešení pro vaše herní servery.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Administrace</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#minecraft" className="hover:text-primary transition duration-200 cursor-pointer" target="_blank">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="https://panel.hexado.pro"
                    className="hover:text-primary transition duration-200 cursor-pointer"
                    target="_blank"
                  >
                    Server Administrace
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Společnost</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://status.hexado.pro" className="hover:text-primary transition duration-200 cursor-pointer" target="_blank">
                    Status
                  </a>
                </li>
                <li>
                  <a href="../kontakt" className="hover:text-primary transition duration-200 cursor-pointer" target="_blank">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://cdn.hexado.pro/legal/vop.pdf"
                    className="hover:text-primary transition duration-200 cursor-pointer"
                    target="_blank"
                  >
                    Všeobecné obchodní podmínky
                  </a>
                </li>
                <li>
                  <a
                    href="http://cdn.hexado.pro/legal/gdpr.pdf"
                    className="hover:text-primary transition duration-200 cursor-pointer"
                    target="_blank"
                  >
                    Zásady ochrany osobních údajů
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2025 Hexado.pro. Všechna práva vyhrazena.</p>
            <div className="flex gap-4">
              <a
                href="https://discord.com/invite/E43Qf2Dgu9"
                className="text-muted-foreground hover:text-primary transition duration-200 cursor-pointer text-sm"
                target="_blank"
              >
                Discord
              </a>
              <a
                href="https://www.instagram.com/hexado.pro"
                className="text-muted-foreground hover:text-primary transition duration-200 cursor-pointer text-sm"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
