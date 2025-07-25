import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CafePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-amber-900">قهوة التراث</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-stone-700 hover:text-amber-900 transition-colors">
                Home
              </Link>
              <Link href="#story" className="text-stone-700 hover:text-amber-900 transition-colors">
                Our Story
              </Link>
              <Link href="#menu" className="text-stone-700 hover:text-amber-900 transition-colors">
                Menu
              </Link>
              <Link href="#gallery" className="text-stone-700 hover:text-amber-900 transition-colors">
                Gallery
              </Link>
              <Link href="#visit" className="text-stone-700 hover:text-amber-900 transition-colors">
                Visit Us
              </Link>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Reserve Table</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-stone-900/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Café Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Where Dates Meet Design</h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">A Taste of Emirati Soul</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Explore Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-900 px-8 py-3 bg-transparent"
            >
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-900 hover:bg-amber-200">Our Heritage</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                Born in the Heart of Abu Dhabi
              </h2>
              <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
                <p>
                  In the bustling souks of Abu Dhabi, where the aroma of cardamom and dates fills the air, our story
                  began. Founded by Amira and Khalid Al-Mansouri, our café represents more than just a place to enjoy
                  coffee—it's a bridge between generations.
                </p>
                <p>
                  Every cup we serve carries the wisdom of our ancestors, from the traditional Arabic coffee ceremonies
                  passed down through generations to the innovative brewing techniques that honor both heritage and
                  progress.
                </p>
                <p>
                  Our menu celebrates the rich flavors of the Emirates—from hand-roasted Arabic coffee beans to pastries
                  infused with dates, rose water, and saffron. Each recipe tells a story of our land, our people, and
                  our enduring love for hospitality.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-amber-100 rounded-2xl"></div>
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Traditional Coffee Ceremony"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200 mb-4">Our Menu</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Flavors of Tradition</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              From aromatic Arabic coffee to innovative international brews, discover tastes that honor our heritage
            </p>
          </div>

          {/* Menu Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              All Items
            </Button>
            <Button variant="outline" className="border-stone-300 hover:bg-stone-100 bg-transparent">
              Hot Drinks
            </Button>
            <Button variant="outline" className="border-stone-300 hover:bg-stone-100 bg-transparent">
              Cold Brews
            </Button>
            <Button variant="outline" className="border-stone-300 hover:bg-stone-100 bg-transparent">
              Pastries
            </Button>
            <Button variant="outline" className="border-stone-300 hover:bg-stone-100 bg-transparent">
              Vegan
            </Button>
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hot Drinks */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Arabic Coffee"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-amber-600 text-white">Traditional</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Qahwa Arabiya</h3>
                <p className="text-stone-600 mb-4">Traditional Arabic coffee with cardamom, served with dates</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-900">25 AED</span>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Saffron Latte"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Signature</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Saffron Latte</h3>
                <p className="text-stone-600 mb-4">Creamy latte infused with premium saffron and rose water</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-900">32 AED</span>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Iced Arabic Coffee"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">Cold Brew</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Iced Qahwa</h3>
                <p className="text-stone-600 mb-4">Refreshing cold Arabic coffee with date syrup</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-900">28 AED</span>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Date Ma'amoul"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-amber-600 text-white">Pastry</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Date Ma'amoul</h3>
                <p className="text-stone-600 mb-4">Traditional date-filled cookies dusted with powdered sugar</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-900">18 AED</span>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Vegan Date Latte"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">Vegan</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Vegan Date Latte</h3>
                <p className="text-stone-600 mb-4">Almond milk latte sweetened with natural date syrup</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-900">30 AED</span>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Baklava Selection"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-amber-600 text-white">Sweet</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Baklava Selection</h3>
                <p className="text-stone-600 mb-4">Assorted baklava with pistachios, walnuts, and honey</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-900">35 AED</span>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-900 hover:bg-amber-200 mb-4">Gallery</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Moments of Heritage</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Step into our world where tradition meets contemporary elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Coffee Ceremony"
                width={400}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Traditional Ceremony</h3>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Café Interior"
                width={400}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Modern Heritage</h3>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Pastries Display"
                width={400}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Sweet Traditions</h3>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Happy Customers"
                width={400}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Shared Moments</h3>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Coffee Beans"
                width={400}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Premium Beans</h3>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Traditional Art"
                width={400}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Cultural Art</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200 mb-4">Reviews</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Stories from Our Guests</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 mb-6 italic">
                  "The most authentic Arabic coffee experience in Abu Dhabi. The atmosphere perfectly captures our
                  heritage while feeling completely modern. A true gem!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Fatima Al-Zahra"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-stone-900">Fatima Al-Zahra</h4>
                    <p className="text-stone-500 text-sm">Local Food Blogger</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 mb-6 italic">
                  "As a tourist, I was looking for an authentic Emirati experience. This café exceeded all expectations.
                  The saffron latte is absolutely divine!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="James Mitchell"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-stone-900">James Mitchell</h4>
                    <p className="text-stone-500 text-sm">Travel Enthusiast</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 mb-6 italic">
                  "The perfect blend of tradition and innovation. Their vegan options are incredible, and the ambiance
                  makes every visit special. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Aisha Rahman"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-stone-900">Aisha Rahman</h4>
                    <p className="text-stone-500 text-sm">Regular Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-900 hover:bg-amber-200 mb-4">Visit Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Find Your Way to Heritage</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map and Location Info */}
            <div className="space-y-8">
              <div className="bg-stone-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg">Interactive Map</p>
                  <p className="text-sm">Google Maps Integration</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-stone-900">Location</h3>
                    </div>
                    <p className="text-stone-600">
                      Al Bateen District
                      <br />
                      Abu Dhabi, UAE
                      <br />
                      Near Cultural Foundation
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Clock className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-stone-900">Hours</h3>
                    </div>
                    <div className="text-stone-600 space-y-1">
                      <p>Sunday - Thursday: 7:00 AM - 11:00 PM</p>
                      <p>Friday - Saturday: 8:00 AM - 12:00 AM</p>
                      <p className="text-amber-600 font-medium">Special Ramadan Hours Available</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-stone-900 mb-6">Get in Touch</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                        <Input placeholder="Your first name" className="border-stone-300" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                        <Input placeholder="Your last name" className="border-stone-300" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                      <Input type="email" placeholder="your.email@example.com" className="border-stone-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                      <Textarea
                        placeholder="Tell us about your visit or special requests..."
                        className="border-stone-300 min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">Send Message</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-stone-900 mb-2">Call Us</h4>
                    <p className="text-stone-600">+971 2 123 4567</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-stone-900 mb-2">Email Us</h4>
                    <p className="text-stone-600">hello@heritageqahwa.ae</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-amber-400">قهوة التراث</h3>
              <p className="text-stone-300 leading-relaxed">
                Where tradition meets innovation in every cup. Experience the authentic taste of Emirati heritage.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#menu" className="text-stone-300 hover:text-amber-400 transition-colors">
                    Our Menu
                  </Link>
                </li>
                <li>
                  <Link href="#story" className="text-stone-300 hover:text-amber-400 transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-stone-300 hover:text-amber-400 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#visit" className="text-stone-300 hover:text-amber-400 transition-colors">
                    Visit Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-stone-300">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Al Bateen, Abu Dhabi
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +971 2 123 4567
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@heritageqahwa.ae
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-stone-300 mb-4">Stay updated with our latest offerings and events.</p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none border-stone-600 bg-stone-800 text-white"
                />
                <Button className="rounded-l-none bg-amber-600 hover:bg-amber-700">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-stone-400 text-sm">
                © {new Date().getFullYear()} Heritage Qahwa. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-stone-400 hover:text-amber-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-stone-400 hover:text-amber-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
