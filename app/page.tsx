import Image from "next/image"
import Link from "next/link"
import { Apple, ChevronRight, Mail, MapPin, Phone, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Apple className="h-6 w-6" />
            <span className="text-xl font-bold">Next Apple Store</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="#products" className="text-sm font-medium hover:underline">
              Products
            </Link>
            <Link href="#services" className="text-sm font-medium hover:underline">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Input type="search" placeholder="Search products..." className="w-[200px] lg:w-[300px] pl-8" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <Link href="#" className="flex items-center gap-1">
              <User className="h-5 w-5" />
              <span className="hidden md:inline">Account</span>
            </Link>
            <Link href="#" className="flex items-center gap-1">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:inline">Cart</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                3
              </span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/placeholder.svg?height=600&width=1200"
            width={1200}
            height={600}
            alt="Latest Apple Products"
            className="w-full h-[600px] object-cover"
            priority
          />
          <div className="container relative z-20 flex flex-col items-center justify-center h-[600px] text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Next Apple Store</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Authorized Apple reseller in Butwal, Nepal. Discover the latest Apple products and accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                Our Services
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 container" id="products">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-center max-w-2xl">
              Explore our wide range of Apple products and accessories. All products come with official warranty and
              after-sales support.
            </p>
          </div>

          <Tabs defaultValue="iphone" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="iphone">iPhone</TabsTrigger>
              <TabsTrigger value="mac">Mac</TabsTrigger>
              <TabsTrigger value="ipad">iPad</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
            </TabsList>
            <TabsContent value="iphone" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "iPhone 15 Pro", price: "NPR 199,900", image: "/placeholder.svg?height=300&width=300" },
                  { name: "iPhone 15", price: "NPR 159,900", image: "/placeholder.svg?height=300&width=300" },
                  { name: "iPhone 14", price: "NPR 129,900", image: "/placeholder.svg?height=300&width=300" },
                  { name: "iPhone SE", price: "NPR 79,900", image: "/placeholder.svg?height=300&width=300" },
                ].map((product, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="relative aspect-square overflow-hidden rounded-md">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.price}</p>
                      <Button className="w-full mt-4">Add to Cart</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="mac" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'MacBook Pro 16"', price: "NPR 399,900", image: "/placeholder.svg?height=300&width=300" },
                  { name: "MacBook Air M2", price: "NPR 249,900", image: "/placeholder.svg?height=300&width=300" },
                  { name: 'iMac 24"', price: "NPR 299,900", image: "/placeholder.svg?height=300&width=300" },
                  { name: "Mac mini", price: "NPR 149,900", image: "/placeholder.svg?height=300&width=300" },
                ].map((product, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="relative aspect-square overflow-hidden rounded-md">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.price}</p>
                      <Button className="w-full mt-4">Add to Cart</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="ipad" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'iPad Pro 12.9"', price: "NPR 249,900", image: "/placeholder.svg?height=300&width=300" },
                  { name: "iPad Air", price: "NPR 149,900", image: "/placeholder.svg?height=300&width=300" },
                  { name: "iPad 10th Gen", price: "NPR 99,900", image: "/placeholder.svg?height=300&width=300" },
                  { name: "iPad mini", price: "NPR 119,900", image: "/placeholder.svg?height=300&width=300" },
                ].map((product, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="relative aspect-square overflow-hidden rounded-md">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.price}</p>
                      <Button className="w-full mt-4">Add to Cart</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="accessories" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "AirPods Pro", price: "NPR 49,900", image: "/placeholder.svg?height=300&width=300" },
                  { name: "Apple Watch Series 9", price: "NPR 89,900", image: "/placeholder.svg?height=300&width=300" },
                  { name: "MagSafe Charger", price: "NPR 7,900", image: "/placeholder.svg?height=300&width=300" },
                  { name: "Apple Pencil", price: "NPR 19,900", image: "/placeholder.svg?height=300&width=300" },
                ].map((product, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="relative aspect-square overflow-hidden rounded-md">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.price}</p>
                      <Button className="w-full mt-4">Add to Cart</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="flex items-center gap-2">
              View All Products <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="py-16 bg-muted" id="services">
          <div className="container">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground text-center max-w-2xl">
                We offer a range of services to ensure you get the most out of your Apple products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01" />
                    <path d="M16 6h.01" />
                    <path d="M12 6h.01" />
                    <path d="M12 10h.01" />
                    <path d="M8 10h.01" />
                    <path d="M16 10h.01" />
                    <path d="M12 14h.01" />
                    <path d="M8 14h.01" />
                    <path d="M16 14h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Authorized Repairs</h3>
                <p className="text-muted-foreground">
                  Get your Apple devices repaired by certified technicians using genuine Apple parts.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Extended Warranty</h3>
                <p className="text-muted-foreground">
                  Protect your investment with our extended warranty options beyond the standard Apple warranty.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
                    <path d="M2 13h10" />
                    <path d="m9 16 3-3-3-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Data Transfer</h3>
                <p className="text-muted-foreground">
                  Our experts will help you transfer data from your old device to your new Apple product.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M12 7v.01" />
                    <path d="M16 9v.01" />
                    <path d="M8 9v.01" />
                    <path d="M12 11v.01" />
                    <path d="M16 13v.01" />
                    <path d="M8 13v.01" />
                    <path d="M12 15v.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Technical Support</h3>
                <p className="text-muted-foreground">
                  Get expert advice and solutions for any issues you might face with your Apple devices.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Training Sessions</h3>
                <p className="text-muted-foreground">
                  Learn how to make the most of your Apple devices with our personalized training sessions.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Trade-in Program</h3>
                <p className="text-muted-foreground">
                  Trade in your old Apple devices for credit towards your next purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 container" id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Next Apple Store</h2>
              <p className="text-muted-foreground mb-4">
                Next Apple Store is an authorized Apple reseller located in Butwal, Nepal. We provide a wide range of
                Apple products and accessories with official warranty and after-sales support.
              </p>
              <p className="text-muted-foreground mb-4">
                Our team of Apple certified professionals is dedicated to providing exceptional customer service and
                technical support. We strive to create a premium shopping experience for all Apple enthusiasts in Nepal.
              </p>
              <p className="text-muted-foreground mb-6">
                Visit our store to experience the latest Apple products and get expert advice from our team.
              </p>
              <Button>Learn More About Us</Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="Next Apple Store Butwal"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted" id="contact">
          <div className="container">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground text-center max-w-2xl">
                Have questions or need assistance? Reach out to us and our team will be happy to help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="+977 98XXXXXXXX" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-background p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-6">Store Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-muted-foreground">Butwal, Nepal</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-muted-foreground">+977 9857086783</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground">info@nextapplestore.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-6">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="h-10 w-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Apple className="h-6 w-6" />
                <span className="text-xl font-bold">Next Apple Store</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Authorized Apple reseller in Butwal, Nepal. Providing genuine Apple products with official warranty.
              </p>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Next Apple Store. All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-muted-foreground hover:text-foreground">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    iPhone
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    iPad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Mac
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Apple Watch
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Butwal, Nepal</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">+977 9857086783</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">info@nextapplestore.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Next Apple Store is an independent reseller and is not affiliated with Apple Inc.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
