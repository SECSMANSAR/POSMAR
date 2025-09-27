"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 border border-primary-foreground/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border border-primary-foreground/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ScrollReveal className="lg:col-span-2" direction="up">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center space-x-2 mb-4">
                <motion.div
                  className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center hover-glow"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-primary font-bold text-sm">P</span>
                </motion.div>
                <span className="font-bold text-xl">POSMAR SMANSAR</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 text-pretty leading-relaxed max-w-md">
                Organisasi Siswa Intra Sekolah yang berkomitmen mengembangkan potensi, kreativitas, dan kepemimpinan
                siswa SMANSAR melalui berbagai program inovatif.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <h3 className="font-semibold text-lg mb-4">Menu Utama</h3>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Beranda" },
                  { href: "/event", label: "Event" },
                  { href: "/dokumentasi", label: "Dokumentasi" },
                  { href: "/forum-aspirasi", label: "Forum Aspirasi" },
                ].map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Link
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div>
              <h3 className="font-semibold text-lg mb-4">Kontak Kami</h3>
              <ul className="space-y-3">
                {[
                  { icon: Mail, text: "posmar@smansar.sch.id" },
                  { icon: Phone, text: "+62 812-3456-7890" },
                  {
                    icon: MapPin,
                    text: "SMA Negeri Sariwangi\nJl. Pendidikan No. 123\nBandung, Jawa Barat",
                    multiline: true,
                  },
                ].map((contact, index) => (
                  <motion.li
                    key={index}
                    className={`flex items-${contact.multiline ? "start" : "center"} space-x-2`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                      <contact.icon
                        className={`h-4 w-4 text-primary-foreground/80 ${contact.multiline ? "mt-0.5" : ""}`}
                      />
                    </motion.div>
                    <span className="text-primary-foreground/80 text-sm whitespace-pre-line">{contact.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <motion.div
          className="border-t border-primary-foreground/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.p
            className="text-primary-foreground/80 text-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            © 2025 POSMAR SMANSAR. Dibuat dengan{" "}
            <motion.span
              className="text-red-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              ❤️
            </motion.span>{" "}
            untuk kemajuan siswa.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
