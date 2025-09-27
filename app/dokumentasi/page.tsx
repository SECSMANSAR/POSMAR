import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DocumentationHero } from "@/components/documentation-hero"
import { DocumentationGallery } from "@/components/documentation-gallery"

export default function DocumentationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DocumentationHero />
      <DocumentationGallery />
      <Footer />
    </main>
  )
}
