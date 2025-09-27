"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Users, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"

const values = [
  {
    icon: Target,
    title: "Visi",
    description:
      "Menjadi organisasi siswa yang unggul, kreatif, dan berprestasi dalam mengembangkan potensi siswa SMANSAR",
  },
  {
    icon: Heart,
    title: "Misi",
    description: "Memfasilitasi pengembangan bakat, minat, dan kreativitas siswa melalui berbagai program inovatif",
  },
  {
    icon: Users,
    title: "Kebersamaan",
    description: "Membangun solidaritas dan kekeluargaan antar siswa dalam satu wadah organisasi yang harmonis",
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    description: "Menghadirkan ide-ide segar dan program-program kreatif untuk kemajuan sekolah dan siswa",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Tentang POSMAR</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            POSMAR (Pengurus Organisasi Siswa Mandiri dan Responsif) adalah organisasi siswa SMANSAR yang berkomitmen
            untuk menjadi wadah pengembangan potensi, kreativitas, dan kepemimpinan siswa melalui berbagai program yang
            inovatif dan bermanfaat.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 group border-0 shadow-md">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <value.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <motion.h3
                      className="text-xl font-bold mb-4 group-hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {value.title}
                    </motion.h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{value.description}</p>
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
