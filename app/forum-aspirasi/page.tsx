"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Send, Shield, Users, Clock } from "lucide-react"

export default function ForumAspirasi() {
  const [formData, setFormData] = useState({
    nama: "",
    kelas: "",
    kategori: "",
    judul: "",
    aspirasi: "",
    anonim: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Save to localStorage (mock database)
    const aspirations = JSON.parse(localStorage.getItem("aspirations") || "[]")
    const newAspiration = {
      id: Date.now(),
      ...formData,
      tanggal: new Date().toISOString(),
      status: "pending",
    }
    aspirations.push(newAspiration)
    localStorage.setItem("aspirations", JSON.stringify(aspirations))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({
      nama: "",
      kelas: "",
      kategori: "",
      judul: "",
      aspirasi: "",
      anonim: false,
    })
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                Forum Aspirasi Siswa
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Forum Aspirasi Siswa
                <span className="block text-primary">SMANSAR</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Sampaikan aspirasi, saran, dan masukan Anda untuk kemajuan sekolah. Suara Anda adalah bagian penting
                dari perubahan positif.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">150+</h3>
                    <p className="text-slate-600">Aspirasi Diterima</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">100%</h3>
                    <p className="text-slate-600">Privasi Terjamin</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">24 Jam</h3>
                    <p className="text-slate-600">Respon Maksimal</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Aspirasi Berhasil Dikirim!</h3>
                    <p className="text-slate-600 mb-6">
                      Terima kasih atas aspirasi Anda. Tim OSIS akan meninjau dan merespons dalam 24 jam.
                    </p>
                    <Button onClick={() => setSubmitted(false)} className="bg-primary hover:bg-primary/90">
                      Kirim Aspirasi Lain
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-900">Sampaikan Aspirasi Anda</CardTitle>
                    <CardDescription>
                      Isi form di bawah ini untuk menyampaikan aspirasi, saran, atau masukan Anda
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nama">Nama Lengkap</Label>
                          <Input
                            id="nama"
                            value={formData.nama}
                            onChange={(e) => handleInputChange("nama", e.target.value)}
                            placeholder="Masukkan nama lengkap"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="kelas">Kelas</Label>
                          <Select value={formData.kelas} onValueChange={(value) => handleInputChange("kelas", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih kelas" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="X-1">X-1</SelectItem>
                              <SelectItem value="X-2">X-2</SelectItem>
                              <SelectItem value="X-3">X-3</SelectItem>
                              <SelectItem value="XI-IPA-1">XI IPA 1</SelectItem>
                              <SelectItem value="XI-IPA-2">XI IPA 2</SelectItem>
                              <SelectItem value="XI-IPS-1">XI IPS 1</SelectItem>
                              <SelectItem value="XII-IPA-1">XII IPA 1</SelectItem>
                              <SelectItem value="XII-IPA-2">XII IPA 2</SelectItem>
                              <SelectItem value="XII-IPS-1">XII IPS 1</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="kategori">Kategori Aspirasi</Label>
                        <Select
                          value={formData.kategori}
                          onValueChange={(value) => handleInputChange("kategori", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih kategori" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fasilitas">Fasilitas Sekolah</SelectItem>
                            <SelectItem value="kegiatan">Kegiatan OSIS</SelectItem>
                            <SelectItem value="pembelajaran">Pembelajaran</SelectItem>
                            <SelectItem value="ekstrakurikuler">Ekstrakurikuler</SelectItem>
                            <SelectItem value="kantin">Kantin</SelectItem>
                            <SelectItem value="lainnya">Lainnya</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="judul">Judul Aspirasi</Label>
                        <Input
                          id="judul"
                          value={formData.judul}
                          onChange={(e) => handleInputChange("judul", e.target.value)}
                          placeholder="Ringkasan singkat aspirasi Anda"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="aspirasi">Detail Aspirasi</Label>
                        <Textarea
                          id="aspirasi"
                          value={formData.aspirasi}
                          onChange={(e) => handleInputChange("aspirasi", e.target.value)}
                          placeholder="Jelaskan aspirasi Anda secara detail..."
                          rows={6}
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="anonim"
                          checked={formData.anonim}
                          onChange={(e) => handleInputChange("anonim", e.target.checked)}
                          className="rounded border-gray-300"
                        />
                        <Label htmlFor="anonim" className="text-sm">
                          Kirim sebagai anonim (nama tidak akan ditampilkan)
                        </Label>
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Kirim Aspirasi
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 px-4 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Komitmen Kami untuk Aspirasi Anda</h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Setiap aspirasi yang masuk akan ditinjau dengan serius oleh tim OSIS. Kami berkomitmen untuk memberikan
                respons dan tindak lanjut yang tepat.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-slate-800 p-6 rounded-lg">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Privasi Terjamin</h3>
                  <p className="text-slate-300 text-sm">
                    Data pribadi Anda akan dijaga kerahasiaannya dan hanya diakses oleh tim OSIS yang berwenang.
                  </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <Clock className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Respons Cepat</h3>
                  <p className="text-slate-300 text-sm">
                    Tim OSIS akan merespons aspirasi Anda maksimal dalam 24 jam setelah diterima.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
