"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, MessageSquare, Clock, Eye, CheckCircle, Filter, Search, LogOut } from "lucide-react"

interface Aspiration {
  id: number
  nama: string
  kelas: string
  kategori: string
  judul: string
  aspirasi: string
  anonim: boolean
  tanggal: string
  status: "pending" | "reviewed" | "resolved"
}

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({ username: "", password: "" })
  const [aspirations, setAspirations] = useState<Aspiration[]>([])
  const [filteredAspirations, setFilteredAspirations] = useState<Aspiration[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Check if already logged in
    const adminLoggedIn = localStorage.getItem("adminLoggedIn")
    if (adminLoggedIn === "true") {
      setIsLoggedIn(true)
      loadAspirations()
    }
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      loadAspirations()
    }
  }, [isLoggedIn])

  useEffect(() => {
    filterAspirations()
  }, [aspirations, selectedCategory, selectedStatus, searchTerm])

  const loadAspirations = () => {
    const stored = localStorage.getItem("aspirations")
    if (stored) {
      setAspirations(JSON.parse(stored))
    }
  }

  const filterAspirations = () => {
    let filtered = aspirations

    if (selectedCategory !== "all") {
      filtered = filtered.filter((asp) => asp.kategori === selectedCategory)
    }

    if (selectedStatus !== "all") {
      filtered = filtered.filter((asp) => asp.status === selectedStatus)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (asp) =>
          asp.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
          asp.aspirasi.toLowerCase().includes(searchTerm.toLowerCase()) ||
          asp.nama.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredAspirations(filtered)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication (in real app, this would be secure)
    if (loginData.username === "osis" && loginData.password === "admin123") {
      setIsLoggedIn(true)
      localStorage.setItem("adminLoggedIn", "true")
      loadAspirations()
    } else {
      alert("Username atau password salah!")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem("adminLoggedIn")
    setLoginData({ username: "", password: "" })
  }

  const updateAspirationStatus = (id: number, status: "pending" | "reviewed" | "resolved") => {
    const updated = aspirations.map((asp) => (asp.id === id ? { ...asp, status } : asp))
    setAspirations(updated)
    localStorage.setItem("aspirations", JSON.stringify(updated))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "reviewed":
        return "bg-blue-100 text-blue-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Menunggu"
      case "reviewed":
        return "Ditinjau"
      case "resolved":
        return "Selesai"
      default:
        return status
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Admin OSIS</CardTitle>
              <CardDescription>Masuk untuk mengakses dashboard aspirasi siswa</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={loginData.username}
                    onChange={(e) => setLoginData((prev) => ({ ...prev, username: e.target.value }))}
                    placeholder="Masukkan username"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                    placeholder="Masukkan password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Shield className="w-4 h-4 mr-2" />
                  Masuk
                </Button>
              </form>
              <div className="mt-4 p-3 bg-slate-50 rounded-lg text-sm text-slate-600">
                <p>
                  <strong>Demo Login:</strong>
                </p>
                <p>Username: osis</p>
                <p>Password: admin123</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Dashboard Admin OSIS</h1>
                <p className="text-sm text-slate-600">Kelola aspirasi siswa SMANSAR</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Keluar
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Aspirasi</p>
                  <p className="text-2xl font-bold text-slate-900">{aspirations.length}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Menunggu</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {aspirations.filter((a) => a.status === "pending").length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Ditinjau</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {aspirations.filter((a) => a.status === "reviewed").length}
                  </p>
                </div>
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Selesai</p>
                  <p className="text-2xl font-bold text-green-600">
                    {aspirations.filter((a) => a.status === "resolved").length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Filter Aspirasi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label>Cari</Label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <Input
                    placeholder="Cari aspirasi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Kategori</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Kategori</SelectItem>
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
                <Label>Status</Label>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Status</SelectItem>
                    <SelectItem value="pending">Menunggu</SelectItem>
                    <SelectItem value="reviewed">Ditinjau</SelectItem>
                    <SelectItem value="resolved">Selesai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button
                  onClick={() => {
                    setSelectedCategory("all")
                    setSelectedStatus("all")
                    setSearchTerm("")
                  }}
                  variant="outline"
                  className="w-full"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Reset Filter
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Aspirations List */}
        <div className="space-y-4">
          {filteredAspirations.length === 0 ? (
            <Card>
              <CardContent className="pt-8 pb-8 text-center">
                <MessageSquare className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Tidak ada aspirasi</h3>
                <p className="text-slate-600">
                  {aspirations.length === 0
                    ? "Belum ada aspirasi yang masuk."
                    : "Tidak ada aspirasi yang sesuai dengan filter."}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredAspirations.map((aspiration) => (
              <motion.div
                key={aspiration.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {aspiration.kategori}
                          </Badge>
                          <Badge className={`text-xs ${getStatusColor(aspiration.status)}`}>
                            {getStatusText(aspiration.status)}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg mb-1">{aspiration.judul}</CardTitle>
                        <CardDescription>
                          {aspiration.anonim ? "Anonim" : aspiration.nama} • {aspiration.kelas} •{" "}
                          {new Date(aspiration.tanggal).toLocaleDateString("id-ID")}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Select
                          value={aspiration.status}
                          onValueChange={(value: "pending" | "reviewed" | "resolved") =>
                            updateAspirationStatus(aspiration.id, value)
                          }
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Menunggu</SelectItem>
                            <SelectItem value="reviewed">Ditinjau</SelectItem>
                            <SelectItem value="resolved">Selesai</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 whitespace-pre-wrap">{aspiration.aspirasi}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </main>
    </div>
  )
}
