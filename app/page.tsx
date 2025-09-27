import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { EventSection } from "@/components/event-section"
import { DocumentationSection } from "@/components/documentation-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"

export default function HomePage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <EventSection />
        <DocumentationSection />
        <AboutSection />
        <Footer />
      </main>
    </PageTransition>
  )
}
