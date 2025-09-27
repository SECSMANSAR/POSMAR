"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"

const events = [
  {
    id: 1,
    title: "Seminar Kepemimpinan Siswa",
    date: "15 Februari 2025",
    location: "Aula Utama",
    description: "Workshop pengembangan jiwa kepemimpinan untuk siswa aktif organisasi",
    participants: "50+ siswa",
    image: "/students-in-leadership-seminar.jpg",
  },
  {
    id: 2,
    title: "Lomba Kreativitas POSMAR",
    date: "28 Februari 2025",
    location: "Lapangan Sekolah",
    description: "Kompetisi seni, musik, dan kreativitas antar kelas untuk memeriahkan bulan organisasi",
    participants: "200+ siswa",
    image: "/placeholder-8w6rw.png",
  },
  {
    id: 3,
    title: "Bakti Sosial Ramadan",
    date: "10 Maret 2025",
    location: "Panti Asuhan Harapan",
    description: "Kegiatan berbagi dan peduli sosial dalam menyambut bulan suci Ramadan",
    participants: "100+ siswa",
    image: "/placeholder-zon4i.png",
  },
]

export function EventSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Event & Kegiatan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ikuti berbagai kegiatan menarik yang diselenggarakan POSMAR untuk mengembangkan potensi dan kreativitas
            siswa
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <ScrollReveal key={event.id} delay={index * 0.1}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <motion.img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Upcoming
                    </motion.div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{event.title}</CardTitle>
                    <CardDescription className="text-base">{event.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <motion.div
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.participants}</span>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        Lihat Detail
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
