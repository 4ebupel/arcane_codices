"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import GenericAccordion from './GenericAccordion'

const faqItems = [
  {
    trigger: "How do I end this?",
    content: "Parasta terveyspalvelua, lähellä sinua. KYS",
  },
  {
    trigger: "How do I end this?",
    content: "Parasta terveyspalvelua, lähellä sinua. KYS",
  },
  {
    trigger: "How do I end this?",
    content: "Parasta terveyspalvelua, lähellä sinua. KYS",
  },
  {
    trigger: "How do I end this?",
    content: "Parasta terveyspalvelua, lähellä sinua. KYS",
  },
]

export default function HelpAndSupport() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [topic, setTopic] = useState("")

  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-8">
      <h1 className="text-4xl font-bold mb-8">Help and Support</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 lg:p-8">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <GenericAccordion items={faqItems} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 lg:p-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Support</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email address" />
            </div>
            <div>
              <Label htmlFor="topic">Topic</Label>
              <Select onValueChange={setTopic}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="account">Account Issues</SelectItem>
                  <SelectItem value="billing">Billing Inquiries</SelectItem>
                  <SelectItem value="technical">Technical Support</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Describe your issue or question" className="h-32" />
            </div>
            <Button type="submit" className="w-full" disabled={true}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}