"use client"

import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Send, Mail, MapPin } from "lucide-react"
import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants/data"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [formErrors, setFormErrors] = useState<Partial<typeof formData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [messageWordCount, setMessageWordCount] = useState(0)
  const searchParams = useSearchParams()
  const subjectRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const subjectFromQuery = searchParams.get("subject")
    if (subjectFromQuery) {
      const decodedSubject = decodeURIComponent(subjectFromQuery)
      setFormData((prev) => ({ ...prev, subject: decodedSubject }))

      setTimeout(() => {
        subjectRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        subjectRef.current?.classList.add("ring-2", "ring-blue-400")
        setTimeout(() => subjectRef.current?.classList.remove("ring-2", "ring-blue-400"), 2000)
      }, 200)
    }
  }, [searchParams])

  const validate = () => {
    const errors: Partial<typeof formData> = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Invalid email address"
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"
    else if (messageWordCount > 255) errors.message = "Message exceeds 255 words"
    return errors
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (name === "message") {
      setMessageWordCount(value.trim().split(/\s+/).filter(Boolean).length)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setFormErrors({})
    setIsSubmitting(true)

    try {
      const res = await fetch("https://formsubmit.co/ajax/ritviksharma.dev@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: "false",
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setMessageWordCount(0)
      } else {
        console.error("Submission error:", data)
        alert("There was a problem submitting the form. Please try again later.")
      }
    } catch (err) {
      console.error("Network error:", err)
      alert("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative z-10 px-4 lg:px-6 py-12 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Let&apos;s Work Together</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Send me a message and let&apos;s discuss!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 dark:border-white/10">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Send Message</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for your message. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} className="text-gray-700/60 bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10" placeholder="Your name" />
                      {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className="text-gray-700/60 bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10" placeholder="your@email.com" />
                      {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">Subject</Label>
                    <Input id="subject" name="subject" ref={subjectRef} value={formData.subject} onChange={handleInputChange} className="text-gray-700/60 bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10" placeholder="Project inquiry" />
                    {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="text-gray-700/60 bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10 min-h-[120px]" placeholder="Tell me about your project..." />
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-500 dark:text-gray-400">Word count: {messageWordCount} / 255</span>
                      {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}
                    </div>
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    {isSubmitting ? "Sending..." : <><Send className="w-4 h-4 mr-2" />Send Message</>}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

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
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <Button key={social.name} variant="outline" size="icon" className="p-2 bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 dark:border-white/10" onClick={() => window.open(social.url, "_blank")}>
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
