"use client";

import { useState } from "react";
import {
  ChevronDown,
  Database,
  BarChart3,
  Brain,
  GraduationCap,
  User,
  TrendingUp,
  Heart,
  CheckCircle,
  AlertTriangle,
  Target,
  Settings,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function AssignmentShowcase() {
  const [activeSection, setActiveSection] = useState("cover");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-lg">
                Data Analytics Assignment
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Button
                variant={activeSection === "cover" ? "default" : "ghost"}
                onClick={() => scrollToSection("cover")}
                className="text-sm"
              >
                Cover
              </Button>
              <Button
                variant={activeSection === "section1" ? "default" : "ghost"}
                onClick={() => scrollToSection("section1")}
                className="text-sm"
              >
                Section 1
              </Button>
              <Button
                variant={activeSection === "section2" ? "default" : "ghost"}
                onClick={() => scrollToSection("section2")}
                className="text-sm"
              >
                Section 2
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Cover Page */}
      <section
        id="cover"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-12">
            <Badge variant="secondary" className="mb-6 text-sm px-6 py-2">
              BTEC Level 4 Higher Nationals in Information Technologies
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Data Analytics
              <span className="block text-blue-600">Assignment</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Comprehensive analysis of Artificial Intelligence applications,
              data preparation techniques, and predictive modeling for
              healthcare outcomes using machine learning algorithms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="text-left shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center space-x-3">
                  <User className="h-6 w-6 text-blue-600" />
                  <span className="text-xl">Student Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Name:</span>
                  <span className="font-semibold">Primqulov Diyorbek</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Student ID:</span>
                  <span className="font-semibold">240351</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Group ID:</span>
                  <span className="font-semibold">24-213</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Unit:</span>
                  <span className="font-semibold">Unit 12: Data Analytics</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-left shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
                <CardTitle className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-red-600" />
                  <span className="text-xl">Project Focus</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Dataset:</span>
                  <span className="font-semibold">
                    Heart Failure Clinical Records
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Objective:</span>
                  <span className="font-semibold">
                    Mortality Risk Prediction
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Methods:</span>
                  <span className="font-semibold">
                    Logistic & Linear Regression
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Submission:</span>
                  <span className="font-semibold">June 1, 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Project Overview
            </h2>
            <div className="space-y-4 text-left max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                Men sun'iy intellekt (AI) bo'limida amaliyot o'tayotgan talaba
                sifatida ma'lumotlarga asoslangan yechimlar ishlab chiqishga
                ixtisoslashgan kompaniyada ishlayapman. Ushbu topshiriqda
                AI'ning qo'llanilishi va afzalliklarini tadqiq qilaman, yuqori
                sifatli ma'lumotlarni tayyorlayman va bashoratli tahlil
                modellarini ishlab chiqaman.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Maqsadim – biznes jarayonlarini optimallashtirish uchun samarali
                AI yechimlarini taqdim etish va tashkilotning
                raqobatbardoshligini oshirishga hissa qo'shish. Hisobot AI'ning
                nazariy asoslari, ma'lumotlarni tayyorlash va amaliy modellarni
                sinashni o'z ichiga oladi.
              </p>
            </div>
          </div>

          <Button
            onClick={() => scrollToSection("section1")}
            size="lg"
            className="group text-lg px-8 py-4"
          >
            Explore Assignment
            <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Section 1: AI Fundamentals */}
      <section id="section1" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-lg px-6 py-2">
              1-Qism
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sun'iy Intellekt Asoslari
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AI tushunchalari, sanoat tarmoqlaridagi qo'llanilishi, foyda va
              xavf-xatarlarning keng qamrovli tahlili
            </p>
          </div>

          {/* Overview Cards */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <span>AI Asosiy Tushunchalari</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  A.P1 - Fundamental AI concepts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">AI Turlari</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Kuchsiz AI (Google Translate)</li>
                    <li>• Kuchli AI (Nazariy tushuncha)</li>
                    <li>• Reaktiv mashinalar (Deep Blue)</li>
                    <li>• Cheklangan xotira</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-sm mb-2">
                    AI Yondashuvlari
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Mashinaviy o'rganish</li>
                    <li>• Kompyuter ko'rishi</li>
                    <li>• Tabiiy tilni qayta ishlash</li>
                    <li>• Ekspert tizimlari</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span>Sanoat Qo'llanilishi</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  A.P2 - Industry applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Asosiy Sohalar</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Chakana savdo (Amazon)</li>
                    <li>• Transport (UPS ORION)</li>
                    <li>• Moliya (PayPal)</li>
                    <li>• Davlat xizmatlari</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-sm mb-2">Afzalliklar</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Samaradorlik oshishi</li>
                    <li>• Xarajatlar kamayishi</li>
                    <li>• Shaxsiylashtirish</li>
                    <li>• 24/7 xizmat</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  <span>Ta'sir Tahlili</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  A.M1 - Impact analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-green-700">
                    Ijobiy Ta'sirlar
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Amazon: 20% savdo oshishi</li>
                    <li>• UPS: 50M$ tejash</li>
                    <li>• PayPal: Xavfsizlik</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-red-700">
                    Xavf-xatarlar
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Ma'lumotlar xavfsizligi</li>
                    <li>• Algoritmik tarafkashlik</li>
                    <li>• Yuqori xarajatlar</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Target className="h-5 w-5 text-orange-600" />
                  <span>Keng Baholash</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  A.D1 - Comprehensive evaluation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">
                    Tahlil Natijalari
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Barcha sohalar tahlili</li>
                    <li>• Foyda-zarar baholash</li>
                    <li>• Kelajak istiqbollari</li>
                    <li>• Tavsiyalar</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-sm mb-2">Xulosa</h4>
                  <p className="text-xs text-gray-600">
                    AI texnologiyalari samaradorlikni oshiradi, lekin
                    xavf-xatarlarni nazorat qilish zarur.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Content */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Batafsil Ma'lumotlar
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <Card>
                <AccordionItem value="a-p1" className="border-none">
                  <CardHeader className="p-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <CardTitle className="flex items-center space-x-3 text-left">
                        <Brain className="h-6 w-6 text-purple-600 flex-shrink-0" />
                        <span>
                          A.P1: Sun'iy Intellektning Asosiy Tushunchalari
                        </span>
                      </CardTitle>
                    </AccordionTrigger>
                  </CardHeader>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                          Sun'iy intellekt kompyuter tizimlariga insoniy aqlga
                          xos vazifalarni bajarish imkonini beruvchi texnologiya
                          hisoblanadi. U ma'lumotlarni tahlil qilish,
                          qonuniyatlarni aniqlash va qaror qabul qilishni
                          avtomatlashtiradi. Masalan, mijozlar
                          xatti-harakatlarini tahlil qilib ularga
                          shaxsiylashtirilgan takliflar berish mumkin.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-purple-800">
                              AI Turlari
                            </h4>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                              <li>
                                <strong>Kuchsiz AI:</strong> Faqat muayyan
                                vazifalarni bajaradi, masalan Google Translate
                                matnni tarjima qiladi lekin boshqa sohalarda
                                ishlamaydi.
                              </li>
                              <li>
                                <strong>Kuchli AI:</strong> Insoniy aql
                                darajasida har qanday vazifani bajarishi mumkin,
                                ammo hozirda bu faqat nazariy tushuncha.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3 text-purple-800">
                              AI Kategoriyalari
                            </h4>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                              <li>
                                <strong>Reaktiv mashinalar:</strong> Faqat
                                hozirgi holatga javob beradi, masalan IBM'ning
                                Deep Blue shaxmat dasturi.
                              </li>
                              <li>
                                <strong>Cheklangan xotira:</strong> O'tmishdagi
                                ma'lumotlarni hisobga oladi, masalan avtonom
                                avtomobillarda yo'l harakati tahlili.
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-purple-800">
                            Sun'iy Intellekt Yo'nalishlari
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-purple-50 rounded-lg">
                              <h5 className="font-medium mb-2">
                                Mashinaviy O'rganish
                              </h5>
                              <p className="text-sm text-gray-600">
                                Ma'lumotlardan o'rganib bashorat qilish imkonini
                                beradi, masalan savdo prognozlari.
                              </p>
                            </div>
                            <div className="p-4 bg-purple-50 rounded-lg">
                              <h5 className="font-medium mb-2">
                                Kompyuter Ko'rishi
                              </h5>
                              <p className="text-sm text-gray-600">
                                Tasvirlarni tahlil qilish va tanib olish uchun
                                ishlatiladi, masalan yuzni aniqlash.
                              </p>
                            </div>
                            <div className="p-4 bg-purple-50 rounded-lg">
                              <h5 className="font-medium mb-2">
                                Tabiiy Tilni Qayta Ishlash
                              </h5>
                              <p className="text-sm text-gray-600">
                                Matn va nutqni tushunish imkonini beradi,
                                masalan chatbotlar.
                              </p>
                            </div>
                            <div className="p-4 bg-purple-50 rounded-lg">
                              <h5 className="font-medium mb-2">
                                Ekspert Tizimlari
                              </h5>
                              <p className="text-sm text-gray-600">
                                Muayyan sohada inson mutaxassislariga taqlid
                                qiladi, masalan tibbiy diagnostika.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card>
                <AccordionItem value="a-p2" className="border-none">
                  <CardHeader className="p-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <CardTitle className="flex items-center space-x-3 text-left">
                        <TrendingUp className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <span>
                          A.P2: Sun'iy Intellektning Sohalardagi Qo'llanilishi
                        </span>
                      </CardTitle>
                    </AccordionTrigger>
                  </CardHeader>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <div className="space-y-8">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="p-6 bg-green-50 rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                              <TrendingUp className="h-5 w-5 mr-2" />
                              Chakana Savdo
                            </h4>
                            <ul className="text-sm text-green-700 space-y-2">
                              <li>• Shaxsiylashtirilgan tavsiya tizimlari</li>
                              <li>• Chatbot mijozlarga xizmat ko'rsatish</li>
                              <li>• Inventar boshqaruvini optimallashtirish</li>
                              <li>• Amazon platformasida 20% savdo oshishi</li>
                            </ul>
                            <Badge variant="secondary" className="mt-3 text-xs">
                              Amazon Tavsiya Tizimi
                            </Badge>
                          </div>

                          <div className="p-6 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                              <BarChart className="h-5 w-5 mr-2" />
                              Transport va Logistika
                            </h4>
                            <ul className="text-sm text-blue-700 space-y-2">
                              <li>• Yo'nalishlarni optimallashtirish</li>
                              <li>• Avtonom transport vositalari</li>
                              <li>• Talabni bashorat qilish</li>
                              <li>• UPS yiliga 50 million dollar tejash</li>
                            </ul>
                            <Badge variant="secondary" className="mt-3 text-xs">
                              UPS ORION Tizimi
                            </Badge>
                          </div>

                          <div className="p-6 bg-orange-50 rounded-lg">
                            <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                              <Settings className="h-5 w-5 mr-2" />
                              Moliyaviy Xizmatlar
                            </h4>
                            <ul className="text-sm text-orange-700 space-y-2">
                              <li>• Firibgarlikni aniqlash</li>
                              <li>• Kredit riskini baholash</li>
                              <li>
                                • Shaxsiylashtirilgan moliyaviy maslahatlar
                              </li>
                              <li>• Real vaqtda xavfsizlik ta'minlash</li>
                            </ul>
                            <Badge variant="secondary" className="mt-3 text-xs">
                              PayPal Firibgarlik Aniqlash
                            </Badge>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-4 text-gray-800">
                            Batafsil Tahlil
                          </h4>
                          <div className="space-y-4">
                            <div className="p-4 bg-white rounded-lg border-l-4 border-green-500">
                              <h5 className="font-medium text-green-800 mb-2">
                                Chakana Savdo va Elektron Tijorat
                              </h5>
                              <p className="text-sm text-gray-700 mb-2">
                                AI mijozlarning xarid odatlarini tahlil qilib
                                shaxsiylashtirilgan takliflar beradi.
                                Amazon'ning tavsiya tizimi mijozlarning qidiruv
                                tarixiga asoslanib mahsulotlar taklif qiladi, bu
                                savdo hajmini oshiradi va mijozlar qoniqishini
                                yaxshilaydi.
                              </p>
                              <p className="text-sm text-gray-700">
                                Chatbotlar 24/7 mijozlarga xizmat ko'rsatib,
                                xizmat tezligini oshiradi va kompaniyaning
                                ishchi yukini kamaytiradi.
                              </p>
                            </div>

                            <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500">
                              <h5 className="font-medium text-blue-800 mb-2">
                                Transport va Logistika
                              </h5>
                              <p className="text-sm text-gray-700">
                                UPS'ning ORION tizimi yo'l harakati va ob-havo
                                ma'lumotlarini tahlil qilib eng qisqa
                                yo'nalishlarni aniqlaydi. Tesla'ning avtopilot
                                tizimi esa xavfsizlikni oshiradi va inson
                                xatolarini kamaytiradi.
                              </p>
                            </div>

                            <div className="p-4 bg-white rounded-lg border-l-4 border-orange-500">
                              <h5 className="font-medium text-orange-800 mb-2">
                                Moliyaviy Xizmatlar
                              </h5>
                              <p className="text-sm text-gray-700">
                                PayPal AI yordamida shubhali tranzaktsiyalarni
                                real vaqtda aniqlaydi. AI kredit riskini
                                baholashda ishlatiladi va mijozlarga
                                shaxsiylashtirilgan moliyaviy maslahatlar
                                beradi.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card>
                <AccordionItem value="a-m1" className="border-none">
                  <CardHeader className="p-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <CardTitle className="flex items-center space-x-3 text-left">
                        <BarChart3 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span>A.M1: Sanoatdagi Ta'sir Tahlili</span>
                      </CardTitle>
                    </AccordionTrigger>
                  </CardHeader>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-green-700 mb-4 flex items-center text-lg">
                              <CheckCircle className="h-5 w-5 mr-2" />
                              Ijobiy Ta'sirlar
                            </h4>
                            <div className="space-y-4">
                              <div className="p-4 bg-green-50 rounded-lg">
                                <h5 className="font-medium text-green-800 mb-2">
                                  Operatsion Samaradorlik
                                </h5>
                                <ul className="text-sm text-green-700 space-y-1">
                                  <li>
                                    • Xarajatlarni 20-30% gacha kamaytirish
                                  </li>
                                  <li>• Jarayonlarni avtomatlashtirish</li>
                                  <li>• Xatolarni minimallashtirishish</li>
                                </ul>
                              </div>
                              <div className="p-4 bg-green-50 rounded-lg">
                                <h5 className="font-medium text-green-800 mb-2">
                                  Mijozlar Tajribasi
                                </h5>
                                <ul className="text-sm text-green-700 space-y-1">
                                  <li>• 24/7 avtomatik xizmat ko'rsatish</li>
                                  <li>• Shaxsiylashtirilgan yondashuvlar</li>
                                  <li>• Tezkor javob berish</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-red-700 mb-4 flex items-center text-lg">
                              <AlertTriangle className="h-5 w-5 mr-2" />
                              Salbiy Ta'sirlar
                            </h4>
                            <div className="space-y-4">
                              <div className="p-4 bg-red-50 rounded-lg">
                                <h5 className="font-medium text-red-800 mb-2">
                                  Xavfsizlik Muammolari
                                </h5>
                                <ul className="text-sm text-red-700 space-y-1">
                                  <li>• Ma'lumotlar maxfiyligi buzilishi</li>
                                  <li>• GDPR qonunlarini buzish xavfi</li>
                                  <li>• Kiberxujumlar uchun nishon</li>
                                </ul>
                              </div>
                              <div className="p-4 bg-red-50 rounded-lg">
                                <h5 className="font-medium text-red-800 mb-2">
                                  Iqtisodiy Xavflar
                                </h5>
                                <ul className="text-sm text-red-700 space-y-1">
                                  <li>• Yuqori joriy etish xarajatlari</li>
                                  <li>• Ish o'rinlarini yo'qotish</li>
                                  <li>• Texnik qaramlik</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                  Soha
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                  AI Ilovasi
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                  Foyda
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                  Xavf
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                  Chakana Savdo
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                  Tavsiya tizimlari
                                </td>
                                <td className="px-6 py-4 text-sm text-green-600">
                                  20% savdo oshishi
                                </td>
                                <td className="px-6 py-4 text-sm text-red-600">
                                  Noto'g'ri tavsiyalar
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                  Transport
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                  Avtopilot tizimi
                                </td>
                                <td className="px-6 py-4 text-sm text-green-600">
                                  Xavfsizlik oshishi
                                </td>
                                <td className="px-6 py-4 text-sm text-red-600">
                                  Texnik nosozliklar
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                  Moliya
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                  Firibgarlik aniqlash
                                </td>
                                <td className="px-6 py-4 text-sm text-green-600">
                                  Real vaqt himoya
                                </td>
                                <td className="px-6 py-4 text-sm text-red-600">
                                  Algoritmik tarafkashlik
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card>
                <AccordionItem value="a-d1" className="border-none">
                  <CardHeader className="p-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <CardTitle className="flex items-center space-x-3 text-left">
                        <Target className="h-6 w-6 text-orange-600 flex-shrink-0" />
                        <span>A.D1: Keng Qamrovli Baholash</span>
                      </CardTitle>
                    </AccordionTrigger>
                  </CardHeader>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <div className="space-y-8">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          Sun'iy intellekt bugungi kunda ishlab chiqarishdan
                          tortib chakana savdo, logistika, moliyaviy xizmatlar
                          va davlat sektorigacha bo'lgan barcha sohalarda
                          inqilobiy o'zgarishlarni olib kelmoqda. Har bir sohada
                          AI'ning qo'llanilishi ma'lum darajada yutuqlar,
                          samaradorlik va foyda keltirgan bo'lsa-da, shu bilan
                          birga muhim xavf-xatar va salbiy oqibatlarni ham
                          keltirib chiqarmoqda.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="p-6 bg-blue-50 rounded-xl">
                            <h4 className="font-semibold text-blue-800 mb-4 text-lg">
                              Chakana Savdo
                            </h4>
                            <div className="space-y-3">
                              <p className="text-sm text-blue-700">
                                Amazon, Zalando, Walmart kabi kompaniyalar AI
                                orqali mijozlar xatti-harakatlarini o'rganib,
                                shaxsiylashtirilgan xizmat ko'rsatadi.
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-green-600 font-medium">
                                  ✓ 20% savdo oshishi
                                </span>
                                <span className="text-xs text-red-600 font-medium">
                                  ⚠ Ma'lumotlar xavfsizligi
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="p-6 bg-green-50 rounded-xl">
                            <h4 className="font-semibold text-green-800 mb-4 text-lg">
                              Transport
                            </h4>
                            <div className="space-y-3">
                              <p className="text-sm text-green-700">
                                UPS ORION tizimi va Tesla avtopiloti transport
                                samaradorligini sezilarli darajada oshiradi.
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-green-600 font-medium">
                                  ✓ 50M$ yoqilg'i tejash
                                </span>
                                <span className="text-xs text-red-600 font-medium">
                                  ⚠ Avtonom xatolari
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="p-6 bg-purple-50 rounded-xl">
                            <h4 className="font-semibold text-purple-800 mb-4 text-lg">
                              Moliya
                            </h4>
                            <div className="space-y-3">
                              <p className="text-sm text-purple-700">
                                PayPal va banklar AI orqali firibgarlik va
                                kredit riskini samarali aniqlaydi.
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-green-600 font-medium">
                                  ✓ Real vaqt himoya
                                </span>
                                <span className="text-xs text-red-600 font-medium">
                                  ⚠ Algoritmik tarafkashlik
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-xl">
                          <h4 className="font-semibold mb-4 text-xl text-gray-900">
                            Xulosa va Tavsiyalar
                          </h4>
                          <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                              Sun'iy intellekt texnologiyalarining barcha
                              sohalarda qo'llanilishi operatsion samaradorlikni
                              oshiradi, lekin u bilan bog'liq xavf-xatarlarni
                              nazorat qilish zarur. Baholash natijalari shuni
                              ko'rsatadiki, har bir sohada AI yordamida
                              erishilgan yutuqlar salbiy oqibatlar bilan
                              muvozanatli ko'rib chiqilishi kerak.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="p-4 bg-green-100 rounded-lg">
                                <h5 className="font-medium text-green-800 mb-2">
                                  Tavsiyalar
                                </h5>
                                <ul className="text-sm text-green-700 space-y-1">
                                  <li>
                                    • Axloqiy AI standartlarini ishlab chiqish
                                  </li>
                                  <li>
                                    • Ma'lumotlar xavfsizligini kuchaytirish
                                  </li>
                                  <li>• Xodimlarni qayta tayyorlash</li>
                                </ul>
                              </div>
                              <div className="p-4 bg-blue-100 rounded-lg">
                                <h5 className="font-medium text-blue-800 mb-2">
                                  Kelajak Istiqbollari
                                </h5>
                                <ul className="text-sm text-blue-700 space-y-1">
                                  <li>• AI va inson hamkorligi</li>
                                  <li>• Yangi ish o'rinlari yaratish</li>
                                  <li>
                                    • Innovatsion yechimlar ishlab chiqish
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Card>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 2: Data Analysis */}
      <section id="section2" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-lg px-6 py-2">
              2-Qism
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ma'lumotlar Tahlili va Modellashtirish
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Yurak yetishmovchiligi bashorati uchun ma'lumotlarni qayta ishlash
              va AI modellarini ishlab chiqish
            </p>
          </div>

          {/* Overview Cards */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Database className="h-5 w-5 text-blue-600" />
                  <span>Loyiha Maqsadi</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  B.P3 - Project objectives
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">
                    Dataset Ma'lumotlari
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• UCI Machine Learning Repository</li>
                    <li>• Heart Failure Clinical Records</li>
                    <li>• 299 bemor, 13 xususiyat</li>
                    <li>• death_event bashorati</li>
                  </ul>
                </div>
                <Separator />
                <div className="p-2 bg-blue-50 rounded">
                  <p className="text-xs text-blue-700">
                    Yurak yetishmovchiligi bemorlarining hayotda qolish
                    ehtimolini aniqlash
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Settings className="h-5 w-5 text-green-600" />
                  <span>Ma'lumot Tayyorlash</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  B.P4 - Data preparation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">
                    Jarayon Bosqichlari
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Tuzilgan CSV ma'lumotlari</li>
                    <li>• 0 yo'qolgan qiymatlar</li>
                    <li>• StandardScaler normalizatsiya</li>
                    <li>• 80/20 train/test bo'linish</li>
                  </ul>
                </div>
                <Separator />
                <div className="p-2 bg-green-50 rounded">
                  <p className="text-xs text-green-700">
                    Eng muhim: serum_creatinine, ejection_fraction, age
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <BarChart className="h-5 w-5 text-purple-600" />
                  <span>Model Optimallashtirish</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  B.M2 - Model optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">
                    Model Taqqoslash
                  </h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-green-100 rounded text-xs">
                      <div className="flex justify-between">
                        <span>To'liq Model</span>
                        <span className="font-bold">80%</span>
                      </div>
                    </div>
                    <div className="p-2 bg-blue-100 rounded text-xs">
                      <div className="flex justify-between">
                        <span>Sodda Model</span>
                        <span className="font-bold">63%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="p-2 bg-purple-50 rounded">
                  <p className="text-xs text-purple-700">
                    Python, sklearn, pandas, matplotlib, seaborn
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  <span>Model Baholash</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  B.D2 - Model evaluation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Natijalar</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Logistic Regression: 80% aniqlik</li>
                    <li>• Linear Regression: Past natija</li>
                    <li>• Confusion Matrix tahlili</li>
                    <li>• Precision, Recall, F1-score</li>
                  </ul>
                </div>
                <Separator />
                <div className="p-2 bg-orange-50 rounded">
                  <p className="text-xs text-orange-700">
                    Tibbiy AI ilovasi uchun yuqori precision muhim
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Content */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Batafsil Ma'lumotlar
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <Card>
                <AccordionItem value="b-p3" className="border-none">
                  <CardHeader className="p-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <CardTitle className="flex items-center space-x-3 text-left">
                        <Database className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span>
                          B.P3: Loyiha Maqsadi va Ma'lumotlar To'plami
                        </span>
                      </CardTitle>
                    </AccordionTrigger>
                  </CardHeader>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-blue-800">
                              Loyiha Maqsadi
                            </h4>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Mening sun'iy intellekt loyihamning asosiy maqsadi
                              — yurak yetishmovchiligi tashxisi qo'yilgan
                              bemorlarning klinik ma'lumotlari asosida ularning
                              hayotda qolish ehtimolini aniqlashdir.
                            </p>
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h5 className="font-medium text-blue-800 mb-2">
                                Asosiy Vazifalar
                              </h5>
                              <ul className="text-sm text-blue-700 space-y-1">
                                <li>• Klinik ma'lumotlarni tahlil qilish</li>
                                <li>• Bashorat modelini ishlab chiqish</li>
                                <li>
                                  • Shifokorlarga qaror qabul qilishda yordam
                                </li>
                                <li>• Davolash jarayonini tezlashtirish</li>
                              </ul>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3 text-blue-800">
                              Dataset Xususiyatlari
                            </h4>
                            <div className="space-y-3">
                              <div className="p-3 bg-gray-50 rounded">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-medium">
                                    Manba:
                                  </span>
                                  <span className="text-sm">
                                    UCI Machine Learning Repository
                                  </span>
                                </div>
                              </div>
                              <div className="p-3 bg-gray-50 rounded">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-medium">
                                    Nomi:
                                  </span>
                                  <span className="text-sm">
                                    Heart Failure Clinical Records
                                  </span>
                                </div>
                              </div>
                              <div className="p-3 bg-gray-50 rounded">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-medium">
                                    Hajmi:
                                  </span>
                                  <span className="text-sm">
                                    299 bemor, 13 xususiyat
                                  </span>
                                </div>
                              </div>
                              <div className="p-3 bg-gray-50 rounded">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-medium">
                                    Target:
                                  </span>
                                  <span className="text-sm">
                                    death_event (0/1)
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-blue-800">
                            Muhim Klinik Ko'rsatkichlar
                          </h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-red-50 rounded-lg">
                              <h5 className="font-medium text-red-800 mb-2">
                                serum_creatinine
                              </h5>
                              <p className="text-sm text-red-700">
                                Buyrak funksiyasini ko'rsatuvchi muhim
                                ko'rsatkich. Yuqori qiymatlar buyrak
                                yetishmovchiligini bildiradi.
                              </p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                              <h5 className="font-medium text-green-800 mb-2">
                                ejection_fraction
                              </h5>
                              <p className="text-sm text-green-700">
                                Yurakning chiqarish quvvati. Past qiymatlar
                                yurak yetishmovchiligini ko'rsatadi.
                              </p>
                            </div>
                            <div className="p-4 bg-orange-50 rounded-lg">
                              <h5 className="font-medium text-orange-800 mb-2">
                                age
                              </h5>
                              <p className="text-sm text-orange-700">
                                Bemorning yoshi. Katta yoshdagi bemorlar yuqori
                                xavf guruhida hisoblanadi.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-blue-50 rounded-xl">
                          <h4 className="font-semibold mb-3 text-blue-900">
                            Loyihaning Amaliy Ahamiyati
                          </h4>
                          <p className="text-blue-800 leading-relaxed">
                            Ushbu loyiha tibbiyot sohasida AI texnologiyalaridan
                            foydalanishning real misolidir. U nafaqat bemorlar
                            xavfini aniqlaydi, balki tibbiy xodimlarga sog'liqni
                            saqlashda ilg'or qarorlar qabul qilishda yordam
                            beradi. Bu esa sog'liqni saqlash xizmatlarining
                            samaradorligini oshiradi va bemorlar hayotini saqlab
                            qolishga xizmat qiladi.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card>
                <AccordionItem value="b-p4" className="border-none">
                  <CardHeader className="p-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <CardTitle className="flex items-center space-x-3 text-left">
                        <Settings className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <span>B.P4: Ma'lumotlarni Tayyorlash Jarayoni</span>
                      </CardTitle>
                    </AccordionTrigger>
                  </CardHeader>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-green-800">
                              Ma'lumotlar Tuzilishi
                            </h4>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Ma'lumotlar tuzilmali (structured data)
                              hisoblanadi. Har bir satr bitta bemorni
                              ifodalaydi, ustunlar esa ularning klinik belgilari
                              bo'yicha tahlil qilingan.
                            </p>
                            <div className="space-y-2">
                              <div className="p-3 bg-green-50 rounded">
                                <span className="text-sm font-medium text-green-800">
                                  Format:
                                </span>
                                <span className="text-sm text-green-700 ml-2">
                                  CSV (Comma Separated Values)
                                </span>
                              </div>
                              <div className="p-3 bg-green-50 rounded">
                                <span className="text-sm font-medium text-green-800">
                                  Kutubxona:
                                </span>
                                <span className="text-sm text-green-700 ml-2">
                                  pandas DataFrame
                                </span>
                              </div>
                              <div className="p-3 bg-green-50 rounded">
                                <span className="text-sm font-medium text-green-800">
                                  Yo'qolgan qiymatlar:
                                </span>
                                <span className="text-sm text-green-700 ml-2">
                                  0 (toza dataset)
                                </span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3 text-green-800">
                              Tayyorlash Bosqichlari
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                  1
                                </div>
                                <div>
                                  <h5 className="font-medium text-sm">
                                    Ma'lumotlarni Tekshirish
                                  </h5>
                                  <p className="text-xs text-gray-600">
                                    df.info() va df.isnull().sum() orqali
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                  2
                                </div>
                                <div>
                                  <h5 className="font-medium text-sm">
                                    Standartlashtirish
                                  </h5>
                                  <p className="text-xs text-gray-600">
                                    StandardScaler yordamida
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                  3
                                </div>
                                <div>
                                  <h5 className="font-medium text-sm">
                                    Ma'lumotlarni Bo'lish
                                  </h5>
                                  <p className="text-xs text-gray-600">
                                    80/20 train/test nisbatda
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                  4
                                </div>
                                <div>
                                  <h5 className="font-medium text-sm">
                                    Korrelatsion Tahlil
                                  </h5>
                                  <p className="text-xs text-gray-600">
                                    Muhim xususiyatlarni aniqlash
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-4 text-green-800">
                            Korrelatsion Tahlil Natijalari
                          </h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                              <h5 className="font-medium text-red-800 mb-2">
                                serum_creatinine
                              </h5>
                              <div className="text-sm text-red-700">
                                <span className="font-bold">
                                  Korrelatsiya: +0.29
                                </span>
                                <p className="mt-1">
                                  Yuqori qiymatlar vafot xavfini oshiradi
                                </p>
                              </div>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                              <h5 className="font-medium text-blue-800 mb-2">
                                ejection_fraction
                              </h5>
                              <div className="text-sm text-blue-700">
                                <span className="font-bold">
                                  Korrelatsiya: -0.27
                                </span>
                                <p className="mt-1">
                                  Past qiymatlar xavf darajasini oshiradi
                                </p>
                              </div>
                            </div>
                            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                              <h5 className="font-medium text-orange-800 mb-2">
                                age
                              </h5>
                              <div className="text-sm text-orange-700">
                                <span className="font-bold">
                                  Korrelatsiya: +0.25
                                </span>
                                <p className="mt-1">
                                  Yosh ortishi bilan xavf oshadi
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-xl">
                          <h4 className="font-semibold mb-3 text-gray-900">
                            Axloqiy va Xavfsizlik Masalalari
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            Yuqori sifatli AI model yaratishda axloqiy va
                            xavfsizlik masalalari ham e'tiborga olindi. Dataset
                            ochiq va anonimlashtirilgan bo'lsa-da, real dunyo
                            loyihalarida shaxsiy ma'lumotlar bilan ishlaganda
                            GDPR kabi qonunlar va maxfiylik siyosatlariga amal
                            qilish juda muhim. Ayniqsa tibbiyot sohasida bu
                            masala yanada muhim bo'ladi.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card>
                <AccordionItem value="b-m2" className="border-none">
                  <CardHeader className="p-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <CardTitle className="flex items-center space-x-3 text-left">
                        <BarChart className="h-6 w-6 text-purple-600 flex-shrink-0" />
                        <span>B.M2: Ma'lumotlarni Optimallashtirish</span>
                      </CardTitle>
                    </AccordionTrigger>
                  </CardHeader>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <div className="space-y-8">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          Sun'iy intellekt modelining aniq va samarali ishlashi
                          bevosita ma'lumotlar to'plamining sifati va to'g'ri
                          tayyorlanganligiga bog'liq. Shuning uchun men "Heart
                          Failure Clinical Records" to'plamiga chuqur tahliliy
                          yondashdim va uni optimallashtirish bo'yicha bir
                          nechta muhim amallarni bajardim.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold mb-4 text-purple-800">
                              Feature Selection Jarayoni
                            </h4>
                            <div className="space-y-4">
                              <div className="p-4 bg-purple-50 rounded-lg">
                                <h5 className="font-medium text-purple-800 mb-2">
                                  1. Korrelatsion Tahlil
                                </h5>
                                <p className="text-sm text-purple-700 mb-2">
                                  df.corr() funksiyasi orqali death_event bilan
                                  eng kuchli bog'liq ustunlar aniqlandi:
                                </p>
                                <ul className="text-xs text-purple-600 space-y-1">
                                  <li>• serum_creatinine (≈ +0.29)</li>
                                  <li>• ejection_fraction (≈ -0.27)</li>
                                  <li>• age (≈ +0.25)</li>
                                </ul>
                              </div>
                              <div className="p-4 bg-purple-50 rounded-lg">
                                <h5 className="font-medium text-purple-800 mb-2">
                                  2. Standartlashtirish
                                </h5>
                                <p className="text-sm text-purple-700">
                                  StandardScaler yordamida barcha ustunlar
                                  normallashtirildi (mean ≈ 0, std ≈ 1). Bu
                                  Logistic Regression kabi scale-sensitive
                                  algoritmlar uchun muhim.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-4 text-purple-800">
                              Vizualizatsiya va Tahlil
                            </h4>
                            <div className="space-y-4">
                              <div className="p-4 bg-blue-50 rounded-lg">
                                <h5 className="font-medium text-blue-800 mb-2">
                                  Taqsimot Diagrammalari
                                </h5>
                                <p className="text-sm text-blue-700 mb-2">
                                  sns.histplot() yordamida ejection_fraction va
                                  serum_creatinine uchun taqsimot grafiklari
                                  tuzildi:
                                </p>
                                <ul className="text-xs text-blue-600 space-y-1">
                                  <li>
                                    • ejection_fraction past → vafot holatlari
                                    ko'p
                                  </li>
                                  <li>
                                    • serum_creatinine yuqori → o'lim xavfi
                                    oshadi
                                  </li>
                                </ul>
                              </div>
                              <div className="p-4 bg-green-50 rounded-lg">
                                <h5 className="font-medium text-green-800 mb-2">
                                  Model Taqqoslash
                                </h5>
                                <div className="space-y-2">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm">
                                      To'liq model (13 ustun):
                                    </span>
                                    <Badge variant="default">80% aniqlik</Badge>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm">
                                      Sodda model (3 ustun):
                                    </span>
                                    <Badge variant="secondary">
                                      63% aniqlik
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border">
                          <h4 className="font-semibold mb-4 text-gray-900">
                            Soddalashtirilgan Model Baholash (3 ustun)
                          </h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-medium mb-3">
                                Tanlangan Xususiyatlar
                              </h5>
                              <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                  <span className="text-sm">
                                    ejection_fraction (yurak chiqarish foizi)
                                  </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                  <span className="text-sm">
                                    serum_creatinine (qon kreatin darajasi)
                                  </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                  <span className="text-sm">age (yosh)</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-3">
                                Model Natijalari
                              </h5>
                              <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                  <tbody className="space-y-1">
                                    <tr>
                                      <td className="py-1 font-medium">
                                        Accuracy:
                                      </td>
                                      <td className="py-1 text-right">0.63</td>
                                    </tr>
                                    <tr>
                                      <td className="py-1 font-medium">
                                        Precision (1):
                                      </td>
                                      <td className="py-1 text-right">0.64</td>
                                    </tr>
                                    <tr>
                                      <td className="py-1 font-medium">
                                        Recall (1):
                                      </td>
                                      <td className="py-1 text-right">0.28</td>
                                    </tr>
                                    <tr>
                                      <td className="py-1 font-medium">
                                        F1-score (1):
                                      </td>
                                      <td className="py-1 text-right">0.39</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-xl">
                          <h4 className="font-semibold mb-3 text-gray-900">
                            Xulosa
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            Bu tahlil shuni ko'rsatadiki, modelni
                            soddalashtirish (fewer features) odatda tezroq va
                            sodda model bersa ham, aniqroq prognoz uchun to'liq
                            va muvozanatli xususiyatlar to'plami ishlatish
                            zarur. Tibbiy AI ilovalarida aniqlik juda muhim
                            bo'lgani uchun, to'liq model afzalroq hisoblanadi.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card>
                <AccordionItem value="b-d2" className="border-none">
                  <CardHeader className="p-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <CardTitle className="flex items-center space-x-3 text-left">
                        <TrendingUp className="h-6 w-6 text-orange-600 flex-shrink-0" />
                        <span>B.D2: Model Samaradorligi va Baholash</span>
                      </CardTitle>
                    </AccordionTrigger>
                  </CardHeader>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <div className="space-y-8">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          Sun'iy intellekt modelining sifatini faqat uni qurish
                          bilan emas, balki uni real ma'lumotlar ustida qanday
                          ishlashini baholash orqali to'liq aniqlash mumkin. Men
                          bu baholashni ikki xil model asosida olib bordim:
                          to'liq dataset va soddalashtirilgan model.
                        </p>

                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold mb-4 text-orange-800">
                              Logistic Regression Natijalari
                            </h4>
                            <div className="space-y-4">
                              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                                <h5 className="font-medium text-green-800 mb-3">
                                  To'liq Model (13 xususiyat)
                                </h5>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="text-center p-2 bg-white rounded">
                                    <div className="text-lg font-bold text-green-600">
                                      80%
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      Accuracy
                                    </div>
                                  </div>
                                  <div className="text-center p-2 bg-white rounded">
                                    <div className="text-lg font-bold text-green-600">
                                      93%
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      Precision
                                    </div>
                                  </div>
                                  <div className="text-center p-2 bg-white rounded">
                                    <div className="text-lg font-bold text-orange-600">
                                      56%
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      Recall
                                    </div>
                                  </div>
                                  <div className="text-center p-2 bg-white rounded">
                                    <div className="text-lg font-bold text-blue-600">
                                      70%
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      F1-score
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                <h5 className="font-medium text-blue-800 mb-3">
                                  Sodda Model (3 xususiyat)
                                </h5>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="text-center p-2 bg-white rounded">
                                    <div className="text-lg font-bold text-blue-600">
                                      63%
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      Accuracy
                                    </div>
                                  </div>
                                  <div className="text-center p-2 bg-white rounded">
                                    <div className="text-lg font-bold text-blue-600">
                                      64%
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      Precision
                                    </div>
                                  </div>
                                  <div className="text-center p-2 bg-white rounded">
                                    <div className="text-lg font-bold text-red-600">
                                      28%
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      Recall
                                    </div>
                                  </div>
                                  <div className="text-center p-2 bg-white rounded">
                                    <div className="text-lg font-bold text-orange-600">
                                      39%
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      F1-score
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-4 text-orange-800">
                              Linear Regression Natijalari
                            </h4>
                            <div className="space-y-4">
                              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                                <h5 className="font-medium text-orange-800 mb-3">
                                  Simple Linear Regression
                                </h5>
                                <div className="space-y-2">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">
                                      MAE:
                                    </span>
                                    <span className="text-sm font-mono">
                                      67.18 kun
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">
                                      RMSE:
                                    </span>
                                    <span className="text-sm font-mono">
                                      75.23 kun
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">
                                      R²:
                                    </span>
                                    <span className="text-sm font-mono text-red-600">
                                      -0.03
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                                <h5 className="font-medium text-yellow-800 mb-3">
                                  Multiple Linear Regression
                                </h5>
                                <div className="space-y-2">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">
                                      MAE:
                                    </span>
                                    <span className="text-sm font-mono">
                                      64.94 kun
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">
                                      RMSE:
                                    </span>
                                    <span className="text-sm font-mono">
                                      74.98 kun
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">
                                      R²:
                                    </span>
                                    <span className="text-sm font-mono text-red-600">
                                      -0.02
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="p-4 bg-red-50 rounded-lg">
                                <h5 className="font-medium text-red-800 mb-2">
                                  Linear Regression Xulosasi
                                </h5>
                                <p className="text-sm text-red-700">
                                  Manfiy R² qiymatlari shuni ko'rsatadiki,
                                  linear regression bu masala uchun mos emas.
                                  Logistic regression binary classification
                                  uchun ancha samarali.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border">
                          <h4 className="font-semibold mb-4 text-gray-900">
                            Confusion Matrix (To'liq Model)
                          </h4>
                          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                            <div className="p-4 bg-green-100 rounded-lg text-center border-2 border-green-300">
                              <div className="text-2xl font-bold text-green-800">
                                31
                              </div>
                              <div className="text-sm font-medium text-green-700">
                                True Negative
                              </div>
                              <div className="text-xs text-green-600">
                                To'g'ri tirik deb bashorat
                              </div>
                            </div>
                            <div className="p-4 bg-red-100 rounded-lg text-center border-2 border-red-300">
                              <div className="text-2xl font-bold text-red-800">
                                4
                              </div>
                              <div className="text-sm font-medium text-red-700">
                                False Positive
                              </div>
                              <div className="text-xs text-red-600">
                                Noto'g'ri vafot bashorati
                              </div>
                            </div>
                            <div className="p-4 bg-red-100 rounded-lg text-center border-2 border-red-300">
                              <div className="text-2xl font-bold text-red-800">
                                18
                              </div>
                              <div className="text-sm font-medium text-red-700">
                                False Negative
                              </div>
                              <div className="text-xs text-red-600">
                                O'tkazib yuborilgan vafot
                              </div>
                            </div>
                            <div className="p-4 bg-green-100 rounded-lg text-center border-2 border-green-300">
                              <div className="text-2xl font-bold text-green-800">
                                7
                              </div>
                              <div className="text-sm font-medium text-green-700">
                                True Positive
                              </div>
                              <div className="text-xs text-green-600">
                                To'g'ri vafot bashorati
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h5 className="font-medium text-green-800 mb-3 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Kuchli Tomonlar
                            </h5>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>
                                • Yuqori precision (93%) - kam false positive
                              </li>
                              <li>• Yaxshi umumiy aniqlik (80%)</li>
                              <li>• Tushunarli va izohlanadigan natijalar</li>
                              <li>• Tibbiy amaliyot uchun mos</li>
                            </ul>
                          </div>

                          <div className="p-4 bg-red-50 rounded-lg">
                            <h5 className="font-medium text-red-800 mb-3 flex items-center">
                              <AlertTriangle className="h-4 w-4 mr-2" />
                              Cheklovlar
                            </h5>
                            <ul className="text-sm text-red-700 space-y-1">
                              <li>
                                • Past recall (56%) - ba'zi holatlar o'tkaziladi
                              </li>
                              <li>• Sinf nomutanosibligi muammosi</li>
                              <li>• 18 ta false negative holat</li>
                              <li>• Kichik dataset hajmi</li>
                            </ul>
                          </div>

                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h5 className="font-medium text-blue-800 mb-3 flex items-center">
                              <TrendingUp className="h-4 w-4 mr-2" />
                              Yaxshilash Tavsiyalari
                            </h5>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• SMOTE texnikasini qo'llash</li>
                              <li>• Cross-validation amalga oshirish</li>
                              <li>• Ensemble metodlardan foydalanish</li>
                              <li>• Ko'proq ma'lumot to'plash</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-xl">
                          <h4 className="font-semibold mb-3 text-gray-900">
                            Yakuniy Baholash
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            Baholash natijalari shuni ko'rsatadiki, modelni
                            to'liq ma'lumotlar bilan qurish natijalarni ancha
                            ishonchli qiladi. Ayniqsa sog'liq kabi hayotiy muhim
                            sohalarda noto'g'ri bashoratlar juda katta xavfga
                            olib keladi. Logistic regression binary
                            classification uchun linear regression'dan ancha
                            samarali ekanligini isbotladi. Model samaradorligi
                            nafaqat umumiy aniqlik, balki Precision, Recall va
                            F1-score orqali har tomonlama baholanishi zarur.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Card>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-6xl">
          <Card className="shadow-2xl">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
              <CardTitle className="text-3xl mb-2">Loyiha Xulosasi</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Erishilgan yutuqlar va amaliy ta'sirlar xulosasi
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ushbu keng qamrovli ma'lumotlar tahlili loyihasi sog'liqni
                  saqlashda sun'iy intellektning bashorat qilishdagi
                  qo'llanilishini muvaffaqiyatli namoyish etdi. Tizimli
                  ma'lumotlarni tayyorlash, xususiyatlarni ishlab chiqish va
                  modelni joriy etish orqali yurak yetishmovchiligi bemorlarida
                  o'lim xavfini 80% aniqlik bilan bashorat qila oladigan
                  logistik regressiya modelini ishlab chiqdik.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Loyiha klinik qaror qabul qilishda AI ning imkoniyatlari va
                  cheklovlarini ta'kidlaydi, ehtiyotkor model baholashning
                  muhimligini va sog'liqni saqlash AI ilovalarida doimiy
                  takomillashtirishning zarurligini ko'rsatadi.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-blue-50 rounded-xl">
                    <Database className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-blue-800">299</div>
                    <div className="text-sm text-blue-600">Bemor Yozuvi</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-xl">
                    <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-green-800">80%</div>
                    <div className="text-sm text-green-600">Model Aniqligi</div>
                  </div>
                  <div className="text-center p-6 bg-red-50 rounded-xl">
                    <Heart className="h-12 w-12 text-red-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-red-800">AI</div>
                    <div className="text-sm text-red-600">Tibbiy Ilova</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <h4 className="font-semibold text-xl text-gray-900 mb-4">
                    Kelajak Istiqbollari
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Katta hajmdagi ma'lumotlar bilan ishlash</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Real vaqt monitoring tizimlari</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Chuqur o'rganish modellarini qo'llash</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Shifokorlar bilan integratsiya</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Mobil ilovalar ishlab chiqish</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Xalqaro standartlarga moslash</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              BTEC Level 4 Data Analytics Assignment
            </h3>
            <p className="text-gray-400 text-lg">
              Topshirgan: Primqulov Diyorbek • Student ID: 240351 • Group:
              24-213 • 1-iyun, 2024
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Brain className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">AI Asoslari</h4>
              <p className="text-sm text-gray-400">
                Sun'iy intellekt tushunchalari va sanoat qo'llanilishining keng
                tahlili
              </p>
            </div>
            <div className="text-center">
              <Database className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Ma'lumotlar Tahlili</h4>
              <p className="text-sm text-gray-400">
                Yurak yetishmovchiligi ma'lumotlarini qayta ishlash va
                modellashtirish
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Bashorat Modeli</h4>
              <p className="text-sm text-gray-400">
                80% aniqlik bilan tibbiy bashorat qiluvchi AI model
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500 leading-relaxed max-w-4xl mx-auto">
              Ushbu topshiriq sog'liqni saqlash ma'lumotlari tahlilidagi AI va
              mashinaviy o'rganish usullarining amaliy qo'llanilishini namoyish
              etadi, texnik joriy etish va tanqidiy baholash ko'nikmalarini
              ko'rsatadi. Loyiha davomida Python, sklearn, pandas va boshqa
              zamonaviy texnologiyalardan foydalanildi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
