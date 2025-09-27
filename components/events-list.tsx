"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Star } from "lucide-react"
import { motion } from "framer-motion"

const events = [
  {
    id: 1,
    title: "Seminar Kepemimpinan Siswa 2025",
    category: "Seminar",
    date: "15 Februari 2025",
    time: "08:00 - 12:00 WIB",
    location: "Aula Utama SMANSAR",
    description:
      "Workshop intensif pengembangan jiwa kepemimpinan untuk siswa aktif organisasi dengan pembicara dari berbagai bidang",
    participants: "50 siswa",
    maxParticipants: "60 siswa",
    status: "Pendaftaran Dibuka",
    image: "/students-in-leadership-seminar.jpg",
    featured: true,
    price: "Gratis",
    organizer: "POSMAR & BK SMANSAR",
  },
  {
    id: 2,
    title: "Lomba Kreativitas POSMAR Cup 2025",
    category: "Lomba",
    date: "28 Februari 2025",
    time: "07:30 - 16:00 WIB",
    location: "Lapangan & Aula Sekolah",
    description: "Kompetisi seni, musik, dan kreativitas antar kelas dengan berbagai kategori lomba menarik",
    participants: "200 siswa",
    maxParticipants: "300 siswa",
    status: "Segera Dibuka",
    image: "/placeholder.svg?key=mjlxl",
    featured: true,
    price: "Rp 15.000/tim",
    organizer: "POSMAR",
  },
  {
    id: 3,
    title: "Bakti Sosial Ramadan Berbagi",
    category: "Sosial",
    date: "10 Maret 2025",
    time: "06:00 - 15:00 WIB",
    location: "Panti Asuhan Harapan Bangsa",
    description: "Kegiatan berbagi dan peduli sosial dalam menyambut bulan suci Ramadan bersama anak-anak panti asuhan",
    participants: "100 siswa",
    maxParticipants: "120 siswa",
    status: "Pendaftaran Dibuka",
    image: "/placeholder.svg?key=vgr5c",
    featured: false,
    price: "Gratis",
    organizer: "POSMAR & Rohis",
  },
  {
    id: 4,
    title: "Workshop Digital Marketing untuk Siswa",
    category: "Workshop",
    date: "20 Maret 2025",
    time: "13:00 - 17:00 WIB",
    location: "Lab Komputer SMANSAR",
    description:
      "Pelatihan praktis digital marketing dan entrepreneurship untuk mempersiapkan siswa menghadapi era digital",
    participants: "30 siswa",
    maxParticipants: "40 siswa",
    status: "Segera Dibuka",
    image: "/placeholder.svg?key=dgtmkt",
    featured: false,
    price: "Rp 25.000",
    organizer: "POSMAR & Alumni",
  },
  {
    id: 5,
    title: "Festival Seni Budaya Nusantara",
    category: "Festival",
    date: "5 April 2025",
    time: "08:00 - 20:00 WIB",
    location: "Halaman Sekolah",
    description: "Perayaan keberagaman budaya Indonesia melalui pertunjukan seni, pameran, dan kuliner tradisional",
    participants: "300 siswa",
    maxParticipants: "500 siswa",
    status: "Coming Soon",
    image: "/placeholder.svg?key=festival",
    featured: true,
    price: "Gratis",
    organizer: "POSMAR & Ekstrakurikuler",
  },
  {
    id: 6,
    title: "Seminar Motivasi 'Raih Mimpimu'",
    category: "Seminar",
    date: "18 April 2025",
    time: "09:00 - 11:30 WIB",
    location: "Aula Utama SMANSAR",
    description: "Seminar motivasi dengan pembicara inspiratif untuk membangun mental juara dan meraih cita-cita",
    participants: "150 siswa",
    maxParticipants: "200 siswa",
    status: "Coming Soon",
    image: "/motivational-learning-seminar-students.jpg",
    featured: false,
    price: "Gratis",
    organizer: "POSMAR & BK",
  },
]

const categories = ["Semua", "Seminar", "Lomba", "Sosial", "Workshop", "Festival"]

export function EventsList() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)

  const filteredEvents =
    selectedCategory === "Semua" ? events : events.filter((event) => event.category === selectedCategory)

  const featuredEvents = events.filter((event) => event.featured)
  const regularEvents = filteredEvents.filter((event) => !event.featured)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Daftar Event Terbaru</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Jangan lewatkan kesempatan untuk mengikuti berbagai kegiatan menarik yang telah kami persiapkan
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Events */}
        {selectedCategory === "Semua" && featuredEvents.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center gap-2"
            >
              <Star className="h-6 w-6 text-yellow-500" />
              Event Unggulan
            </motion.h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
                    <div className="relative">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500 text-yellow-50">
                          <Star className="h-3 w-3 mr-1" />
                          Unggulan
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant={
                            event.status === "Pendaftaran Dibuka"
                              ? "default"
                              : event.status === "Segera Dibuka"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {event.status}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{event.category}</Badge>
                        <span className="text-sm font-semibold text-primary">{event.price}</span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="text-base line-clamp-2">{event.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>
                            {event.participants}/{event.maxParticipants}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Daftar Sekarang
                        </Button>
                        <Button variant="outline" className="flex-1 bg-transparent">
                          Detail Event
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Events */}
        <div>
          {selectedCategory !== "Semua" && (
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8"
            >
              Event {selectedCategory}
            </motion.h3>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === "Semua" ? regularEvents : filteredEvents).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={
                          event.status === "Pendaftaran Dibuka"
                            ? "default"
                            : event.status === "Segera Dibuka"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {event.status}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{event.category}</Badge>
                      <span className="text-sm font-semibold text-primary">{event.price}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>
                          {event.participants}/{event.maxParticipants}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Lihat Detail
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <p className="text-lg text-muted-foreground">
              Belum ada event untuk kategori {selectedCategory.toLowerCase()}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
