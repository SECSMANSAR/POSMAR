import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EventsHero } from "@/components/events-hero"
import { EventsList } from "@/components/events-list"
import { EventsStats } from "@/components/events-stats"

export default function EventPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <EventsHero />
      <EventsStats />
      <EventsList />
      <Footer />
    </main>
  )
}
