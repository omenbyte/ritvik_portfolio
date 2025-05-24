"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Send, Mail, Phone, MapPin } from "lucide-react"
import { useContactForm } from "@/hooks/useContactForm"
import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants/data"

export function ContactSection() {
  const { formData, formErrors, isSubmitting, isSubmitted, handleInputChange, handleSubmit } = useContactForm()

  return (
    <section id="contact" className="relative z-10 px-4 lg:px-6 py-12 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your
            ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 dark:border-white/10">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Send Message</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for your message. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10"
                        placeholder="Your name"
                      />
                      {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10"
                        placeholder="your@email.com"
                      />
                      {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10"
                      placeholder="Project inquiry"
                    />
                    {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10 min-h-[120px]"
                      placeholder="Tell me about your project..."
                    />
                    {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 dark:border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 dark:border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 dark:border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  className="bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 dark:border-white/10"
                  onClick={() => window.open(social.url, "_blank")}
                >
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
