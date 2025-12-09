"use client"

import { useState } from "react"
import { Menu, X, Trophy, Zap, Shield, Star, Rocket, Activity, Crown, Server, Car } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
              </nav>

              <div className="hidden md:flex items-center">
                <Button
                  className="bg-secondary text-secondary-foreground font-bold shadow-lg shadow-secondary/30 transition-all duration-200 cursor-pointer hover:bg-secondary/90 hover:shadow-secondary/50 hover:brightness-110"
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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
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
              <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary border-2 border-background" />
                  <div className="w-10 h-10 rounded-full bg-secondary border-2 border-background" />
                  <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-background" />
                  <div className="w-10 h-10 rounded-full bg-cyan-500 border-2 border-background" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">1 000+ hráčů</div>
                  <div className="text-sm text-muted-foreground">věří Hexado.pro</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
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
      <section id="services-section" className="container mx-auto px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-secondary blur-3xl" />
        </div>

        <div className="text-center mb-20 animate-fade-in">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 text-base px-6 py-2 font-semibold">
            <Server className="h-4 w-4 mr-2" />
            Naše Služby
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Hosting pro <span className="text-primary">každou hru</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Výběr z nejpopulárnějších herních platforem s vysokovýkonným hostingem a 24/7 podporou.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* FiveM Service Card */}
          <div className="group relative animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Card className="relative bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 h-full flex flex-col">
              <div className="p-8 space-y-6 flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">FiveM</h3>
                    <p className="text-sm text-muted-foreground">GTA V Roleplay</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Car className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="space-y-3 flex-grow">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">8GB RAM, 4 CPU cores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">100GB NVMe SSD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">Až 128 hráčů</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">DDoS ochrana</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50 mt-auto">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">$9.99</span>
                    <span className="text-muted-foreground text-sm">/měsíc</span>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/40">
                    Objednat
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Minecraft Service Card - Featured */}
          <div className="group relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-secondary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Card className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-secondary/50 overflow-hidden transition-all duration-300 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/30 h-full flex flex-col">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <Badge className="bg-secondary text-secondary-foreground text-base px-6 py-2 shadow-lg font-bold">
                  <Crown className="h-4 w-4 mr-2" />
                  Nejpopulárnější
                </Badge>
              </div>
              <div className="p-8 space-y-6 pt-12 flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">Minecraft</h3>
                    <p className="text-sm text-muted-foreground">Plugins & Mods</p>
                  </div>
                  <div className="p-3 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-colors">
                    <Trophy className="h-6 w-6 text-secondary" />
                  </div>
                </div>

                <div className="space-y-3 flex-grow">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground">4GB RAM, 2 CPU cores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground">60GB NVMe SSD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground">Až 30 hráčů</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground">1-click Installer</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50 mt-auto">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-secondary">$4.99</span>
                    <span className="text-muted-foreground text-sm">/měsíc</span>
                  </div>
                  <Button className="w-full bg-secondary text-secondary-foreground transition-all duration-200 hover:bg-secondary/80 hover:shadow-lg hover:shadow-secondary/40">
                    Objednat
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Discord Bots Service Card */}
          <div className="group relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Card className="relative bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 h-full flex flex-col">
              <div className="p-8 space-y-6 flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">Discord Boti</h3>
                    <p className="text-sm text-muted-foreground">Komunity Hosting</p>
                  </div>
                  <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <Trophy className="h-6 w-6 text-purple-500" />
                  </div>
                </div>

                <div className="space-y-3 flex-grow">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">Neomezené boty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">Vlastní proxy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">24/7 Podpora</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50 mt-auto">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-purple-500">$2.99</span>
                    <span className="text-muted-foreground text-sm">/měsíc</span>
                  </div>
                  <Button className="w-full bg-purple-500 text-white transition-all duration-200 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/40">
                    Objednat
                  </Button>
                </div>
              </div>
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

        {/* The pricing table was not updated, so it remains the same */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="bg-card border-border transition-all duration-200 group cursor-pointer hover:shadow-lg hover:shadow-primary/10">
            <CardContent className="p-8 space-y-6">
              <div>
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Minecraft Budget</Badge>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-card-foreground">4GB RAM</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">$4.99</span>
                    <span className="text-muted-foreground text-sm">/měsíc</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 py-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">2 CPU Jádra</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">60GB NVMe SSD</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">DDoS Ochrana</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Bezplatná Subdoména</span>
                </div>
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 cursor-pointer">
                Začít
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-secondary transition-all duration-200 group cursor-pointer relative hover:shadow-lg hover:shadow-secondary/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-secondary text-secondary-foreground">
                <Crown className="h-3 w-3 mr-1" />
                Nejpopulárnější
              </Badge>
            </div>
            <CardContent className="p-8 space-y-6">
              <div>
                <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-4">Minecraft Medium</Badge>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-card-foreground">6GB RAM</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-secondary">$7.99</span>
                    <span className="text-muted-foreground text-sm">/měsíc</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 py-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">3 CPU Jádra</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">80GB NVMe SSD</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">DDoS Ochrana</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">Prioritní Podpora</span>
                </div>
              </div>

              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 cursor-pointer">
                Začít
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border transition-all duration-200 group cursor-pointer hover:shadow-lg hover:shadow-primary/10">
            <CardContent className="p-8 space-y-6">
              <div>
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Minecraft Premium</Badge>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-card-foreground">8GB RAM</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">$9.99</span>
                    <span className="text-muted-foreground text-sm">/měsíc</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 py-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">4 CPU Jádra</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">120GB NVMe SSD</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">DDoS Ochrana</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">24/7 Prioritní Podpora</span>
                </div>
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 cursor-pointer">
                Začít
              </Button>
            </CardContent>
          </Card>
        </div>
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
              <Card className="bg-transparent border border-border/50 hover:border-primary/50 transition-all duration-200 group cursor-pointer">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-lg">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">99.9% Dostupnost</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Váš server běží nepřetržitě díky našim redundantním systémům a profesionální infrastruktuře.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-transparent border border-border/50 hover:border-secondary/50 transition-all duration-200 group cursor-pointer">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 text-lg">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">Maximální Bezpečnost</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Brány Fortinet, ochrana před DDoS a zašifrovaná připojení chrání vaše data před útoky.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-transparent border border-border/50 hover:border-primary/50 transition-all duration-200 group cursor-pointer">
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

              <Card className="bg-transparent border border-border/50 hover:border-secondary/50 transition-all duration-200 group cursor-pointer">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 text-lg">
                    <Rocket className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">Ultra-Rychlé Servery</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Konektivita 10Gb s procesory AMD Ryzen a NVMe SSD pro nejlepší výkon.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-transparent border border-border/50 hover:border-primary/50 transition-all duration-200 group cursor-pointer">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-lg">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">Bezplatná Subdoména</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Obdržíte vlastní subdoménu zahnutou v každém serveru bez dalších poplatků.
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
                src="/modern-gaming-server-room-data-center-colorful-led.jpg"
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
          <Card className="bg-transparent border border-border/50 hover:border-primary/50 transition-all duration-200 group cursor-pointer">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🎮</span>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground mb-1">Na jakém processoru běží Vaše servery?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Všechny naše servery běží na processoru R7 nebo R9 - záleží na lokalitě, nebo na balíčku.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-transparent border border-border/50 hover:border-secondary/50 transition-all duration-200 group cursor-pointer">
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

          <Card className="bg-transparent border border-border/50 hover:border-primary/50 transition-all duration-200 group cursor-pointer">
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

          <Card className="bg-transparent border border-border/50 hover:border-secondary/50 transition-all duration-200 group cursor-pointer">
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
                  <a href="#minecraft" className="hover:text-primary transition duration-200 cursor-pointer">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#fivem" className="hover:text-primary transition duration-200 cursor-pointer">
                    Server Administrace
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Společnost</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://status.hexado.pro" className="hover:text-primary transition duration-200 cursor-pointer">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition duration-200 cursor-pointer">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Leegal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://cdn.hexado.pro/legal/vop.pdf" className="hover:text-primary transition duration-200 cursor-pointer">
                    Všeobecné obchodní podmínky
                  </a>
                </li>
                <li>
                  <a href="http://cdn.hexado.pro/legal/gdpr.pdf" className="hover:text-primary transition duration-200 cursor-pointer">
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
              >
                Discord
              </a>
              <a
                href="https://www.instagram.com/hexado.pro"
                className="text-muted-foreground hover:text-primary transition duration-200 cursor-pointer text-sm"
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
