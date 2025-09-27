import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl">POSMAR SMANSAR</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-pretty leading-relaxed max-w-md">
              Organisasi Siswa Intra Sekolah yang berkomitmen mengembangkan potensi, kreativitas, dan kepemimpinan siswa
              SMANSAR melalui berbagai program inovatif.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/event"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Event
                </Link>
              </li>
              <li>
                <Link
                  href="/dokumentasi"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Dokumentasi
                </Link>
              </li>
              <li>
                <Link
                  href="/forum-aspirasi"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Forum Aspirasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">posmar@smansar.sch.id</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary-foreground/80 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  SMA Negeri Sariwangi
                  <br />
                  Jl. Pendidikan No. 123
                  <br />
                  Bandung, Jawa Barat
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 POSMAR SMANSAR. Dibuat dengan ❤️ untuk kemajuan siswa.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
