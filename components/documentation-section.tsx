"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"

const photos = [
  {
    id: 1,
    title: "Pelantikan Pengurus POSMAR 2024",
    image: "/student-organization-inauguration-ceremony.jpg",
  },
  {
    id: 2,
    title: "Workshop Kreativitas Siswa",
    image: "/placeholder-8ikt6.png",
  },
  {
    id: 3,
    title: "Bakti Sosial Lingkungan",
    image: "/placeholder-ll1l4.png",
  },
  {
    id: 4,
    title: "Seminar Motivasi Belajar",
    image: "/motivational-learning-seminar-students.jpg",
  },
  {
    id: 5,
    title: "Festival Seni Budaya",
    image: "/placeholder-t6tcl.png",
  },
  {
    id: 6,
    title: "Kegiatan Ramadan Bersama",
    image: "/placeholder-pn01c.png",
  },
]

export function DocumentationSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Dokumentasi Kegiatan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Lihat momen-momen berharga dari berbagai kegiatan yang telah dilaksanakan POSMAR
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {photos.map((photo, index) => (
            <ScrollReveal key={photo.id} delay={index * 0.1}>
              <motion.div
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img
                    src={photo.image || "/placeholder.svg"}
                    alt={photo.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-lg text-balance">{photo.title}</h3>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-primary/0"
                  whileHover={{ borderColor: "rgba(var(--primary), 0.3)" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/dokumentasi">
              <Button size="lg" className="group">
                Lihat Semua Dokumentasi
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
