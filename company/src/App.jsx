import React from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import image from "./assets/image.jpg"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Laptop,
  MessageSquare,
  HeadphonesIcon,
  Lightbulb,
  RefreshCw,
  Facebook,
  Twitter,
  Linkedin as LinkedIn,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
  Building,
  Target,
  Award,
  MenuIcon,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-cyan-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text">
                DTS
              </span>
            </div>
            <div className=" hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                Home
              </a>
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                Services
              </a>
              <a
                href="#about"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                About
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                Contact
              </a>
            </div>
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen} >
              <SheetTrigger>
                <MenuIcon className="cursor-pointer text-cyan-500 md:hidden" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text">
                      DTS
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <SheetDescription>
                  <div className=" flex flex-col items-center mt-6 gap-4">
                    <a
                      href="#home"
                      className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                      onClick={()=>setIsOpen(false)}
                    >
                      Home
                    </a>
                    <a
                      href="#services"
                      className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                      onClick={()=>setIsOpen(false)}

                    >
                      Services
                    </a>
                    <a
                      href="#about"
                      className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                      onClick={()=>setIsOpen(false)}

                    >
                      About
                    </a>
                    <a
                      href="#contact"
                      className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                      onClick={()=>setIsOpen(false)}

                    >
                      Contact
                    </a>
                  </div>
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text leading-tight">
                DevDoor Technology Solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Transforming ideas into powerful digital solutions. We build the
                technology that builds your future.
              </p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 group transform hover:-translate-y-1 transition-all duration-300">
                <a href="#contact">Get Started</a>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative group">
              <img
                src={image}
                alt="Technology Innovation"
                className="rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-6 bg-white/50 dark:bg-gray-800/50"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code />,
                title: "Web Development",
                description:
                  "Custom web applications built with cutting-edge technologies",
              },
              {
                icon: <Laptop />,
                title: "Software Solutions",
                description:
                  "Scalable software tailored to your business needs",
              },
              {
                icon: <Database />,
                title: "Cloud Services",
                description:
                  "Secure and reliable cloud infrastructure solutions",
              },
              {
                icon: <Lightbulb />,
                title: "IT Consulting",
                description:
                  "Expert guidance to optimize your technology strategy and implementation",
              },
              {
                icon: <HeadphonesIcon />,
                title: "24/7 Support",
                description:
                  "Round-the-clock technical support and maintenance services",
              },
              {
                icon: <RefreshCw />,
                title: "Digital Transformation",
                description:
                  "Comprehensive solutions to modernize your business processes",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-600 dark:text-cyan-400">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text">
                Who We Are
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Users />,
                    title: "Expert Team",
                    description:
                      "Our diverse team of experts brings years of industry experience",
                  },
                  {
                    icon: <Target />,
                    title: "Mission Driven",
                    description:
                      "Committed to delivering innovative solutions that drive business growth",
                  },
                  {
                    icon: <Award />,
                    title: "Industry Recognition",
                    description:
                      "Award-winning services trusted by leading companies",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-600 dark:text-cyan-400">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-white/50 dark:bg-gray-800/50"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-8">
                  {[
                    {
                      icon: <MapPin />,
                      title: "Visit Us",
                      content: "Greater Accra, Kasoa-old Barrier",
                    },
                    {
                      icon: <Phone />,
                      title: "Call Us",
                      content: "+233257479336",
                    },
                    {
                      icon: <Mail />,
                      title: "Email Us",
                      content: "darkolyrical@gmail.com",
                    },
                    {
                      icon: <Clock />,
                      title: "Working Hours",
                      content: "Mon - Sat: 8AM - 6PM",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-cyan-600 dark:text-cyan-400">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
                <form className="space-y-6">
                  <div className="space-y-4"></div>
                  <div className="w-full">
                    <a
                      target="_blank"
                      href="https://wa.me/233257479336"
                      className="w-full ml-6 mt-[4rem] bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transform hover:-translate-y-1 transition-all duration-300"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text">
                  DTS
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Empowering businesses through innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, href: "#" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <LinkedIn className="w-5 h-5" />, href: "#" },
                  { icon: <Instagram className="w-5 h-5" />, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-600 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["Home", "About ", "Services", "Contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-600 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text">
                Services
              </h3>
              <ul className="space-y-2">
                {[
                  "Web Development",
                  "Software Solutions",
                  "Cloud Services",
                  "IT Consulting",
                  "24/7 Support",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-gray-600 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text">
                Newsletter
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Stay updated with our latest news and updates.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-transparent focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:focus:ring-cyan-800 outline-none transition-colors"
                />
                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center text-gray-600 dark:text-gray-300">
            © 2025 DevDoor Technology Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
