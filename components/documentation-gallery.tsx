"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, Users, X } from "lucide-react"

const photos = [
  {
    id: 1,
    title: "Pelantikan Pengurus POSMAR 2024",
    category: "Seminar",
    date: "15 Januari 2024",
    location: "Aula Utama SMANSAR",
    participants: "200 siswa",
    description: "Momen bersejarah pelantikan pengurus POSMAR periode 2024-2025 dengan penuh khidmat dan semangat",
    image: "/student-organization-inauguration-ceremony.jpg",
    height: "tall",
  },
  {
    id: 2,
    title: "Workshop Kreativitas Digital",
    category: "Lomba",
    date: "22 Januari 2024",
    location: "Lab Komputer",
    participants: "50 siswa",
    description: "Pelatihan desain grafis dan video editing untuk mengembangkan kreativitas siswa di era digital",
    image: "/placeholder.svg?key=d04u2",
    height: "medium",
  },
  {
    id: 3,
    title: "Bakti Sosial Lingkungan Hidup",
    category: "Sosial",
    date: "5 Februari 2024",
    location: "Taman Kota Bandung",
    participants: "100 siswa",
    description: "Kegiatan peduli lingkungan dengan penanaman pohon dan pembersihan area publik",
    image: "/placeholder.svg?key=a9mk4",
    height: "short",
  },
  {
    id: 4,
    title: "Seminar Motivasi 'Raih Prestasi'",
    category: "Seminar",
    date: "12 Februari 2024",
    location: "Aula Utama",
    participants: "300 siswa",
    description: "Seminar inspiratif dengan pembicara nasional tentang meraih prestasi dan membangun karakter",
    image: "/motivational-learning-seminar-students.jpg",
    height: "tall",
  },
  {
    id: 5,
    title: "Festival Seni Budaya Nusantara",
    category: "Lainnya",
    date: "20 Februari 2024",
    location: "Halaman Sekolah",
    participants: "400 siswa",
    description: "Perayaan keberagaman budaya Indonesia melalui tarian, musik, dan pameran seni tradisional",
    image: "/placeholder.svg?key=hpf2n",
    height: "medium",
  },
  {
    id: 6,
    title: "Kegiatan Ramadan Bersama",
    category: "Sosial",
    date: "15 Maret 2024",
    location: "Masjid Sekolah",
    participants: "250 siswa",
    description: "Berbuka puasa bersama dan kajian rohani dalam menyambut bulan suci Ramadan",
    image: "/placeholder.svg?key=fgaag",
    height: "short",
  },
  {
    id: 7,
    title: "Lomba Debat Antar Sekolah",
    category: "Lomba",
    date: "10 April 2024",
    location: "Aula Utama",
    participants: "80 siswa",
    description: "Kompetisi debat tingkat SMA se-Bandung dengan tema isu-isu kontemporer",
    image: "/placeholder.svg?key=debate",
    height: "medium",
  },
  {
    id: 8,
    title: "Workshop Kepemimpinan Muda",
    category: "Seminar",
    date: "25 April 2024",
    location: "Ruang Serbaguna",
    participants: "60 siswa",
    description: "Pelatihan soft skills dan kepemimpinan untuk mempersiapkan generasi pemimpin masa depan",
    image: "/students-in-leadership-seminar.jpg",
    height: "tall",
  },
  {
    id: 9,
    title: "Pentas Seni Akhir Tahun",
    category: "Lainnya",
    date: "15 Mei 2024",
    location: "Panggung Terbuka",
    participants: "500 siswa",
    description: "Pertunjukan seni spektakuler sebagai penutup kegiatan POSMAR tahun ajaran 2023-2024",
    image: "/placeholder.svg?key=pentas",
    height: "short",
  },
  {
    id: 10,
    title: "Baksos Panti Asuhan",
    category: "Sosial",
    date: "22 Mei 2024",
    location: "Panti Asuhan Harapan",
    participants: "75 siswa",
    description: "Kegiatan berbagi kasih dengan anak-anak panti asuhan melalui donasi dan hiburan",
    image: "/placeholder.svg?key=panti",
    height: "medium",
  },
  {
    id: 11,
    title: "Olimpiade Sains POSMAR",
    category: "Lomba",
    date: "5 Juni 2024",
    location: "Ruang Kelas",
    participants: "120 siswa",
    description: "Kompetisi akademik multi-bidang untuk mengasah kemampuan sains dan matematika siswa",
    image: "/placeholder.svg?key=olimpiade",
    height: "tall",
  },
  {
    id: 12,
    title: "Pelatihan Public Speaking",
    category: "Seminar",
    date: "18 Juni 2024",
    location: "Aula Kecil",
    participants: "40 siswa",
    description: "Workshop komunikasi efektif dan public speaking untuk meningkatkan kepercayaan diri",
    image: "/placeholder.svg?key=speaking",
    height: "short",
  },
]

const categories = ["Semua", "Seminar", "Lomba", "Sosial", "Lainnya"]

export function DocumentationGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null)
  const [filteredPhotos, setFilteredPhotos] = useState(photos)

  useEffect(() => {
    const filtered =
      selectedCategory === "Semua" ? photos : photos.filter((photo) => photo.category === selectedCategory)
    setFilteredPhotos(filtered)
  }, [selectedCategory])

  const getGridClass = (height: string) => {
    switch (height) {
      case "tall":
        return "row-span-2"
      case "short":
        return "row-span-1"
      default:
        return "row-span-1"
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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

        {/* Masonry Grid Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          <AnimatePresence mode="wait">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${getGridClass(photo.height)}`}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="mb-2 bg-white/20 text-white border-white/30">{photo.category}</Badge>
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2 text-balance">{photo.title}</h3>
                  <p className="text-sm text-white/80 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {photo.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPhotos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <p className="text-lg text-muted-foreground">
              Belum ada dokumentasi untuk kategori {selectedCategory.toLowerCase()}
            </p>
          </motion.div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedPhoto.image || "/placeholder.svg"}
                    alt={selectedPhoto.title}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => setSelectedPhoto(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{selectedPhoto.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-balance">{selectedPhoto.title}</h2>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{selectedPhoto.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{selectedPhoto.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedPhoto.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{selectedPhoto.participants}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
