"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Trophy } from "lucide-react"

export function EventsHero() {
  return (
    <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Event & Kegiatan
            <span className="text-gradient block">POSMAR</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dalam berbagai kegiatan menarik yang dirancang untuk mengembangkan potensi, kreativitas, dan
            kepemimpinan siswa SMANSAR
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">25+</h3>
              <p className="text-muted-foreground">Event per Tahun</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent">500+</h3>
              <p className="text-muted-foreground">Siswa Terlibat</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">15+</h3>
              <p className="text-muted-foreground">Prestasi Diraih</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
