"use client"

import { motion } from "framer-motion"
import { Camera, ImageIcon, Calendar } from "lucide-react"

export function DocumentationHero() {
  return (
    <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Dokumentasi Kegiatan
            <span className="text-gradient block">POSMAR</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Koleksi momen berharga dari berbagai kegiatan dan prestasi yang telah dicapai bersama dalam perjalanan
            POSMAR SMANSAR
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">200+</h3>
              <p className="text-muted-foreground">Foto Kegiatan</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent">50+</h3>
              <p className="text-muted-foreground">Event Terdokumentasi</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">3</h3>
              <p className="text-muted-foreground">Tahun Perjalanan</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
