import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the input
    const validatedData = contactSchema.parse(body)

    // Here you can implement different ways to handle the form submission:

    // Option 1: Send email using a service like Resend, SendGrid, or Nodemailer
    await sendEmailNotification(validatedData)

    // Option 2: Save to database (if you have one)
    // await saveToDatabase(validatedData)

    // Option 3: Send to external service (like Google Forms, Airtable, etc.)
    // await sendToExternalService(validatedData)

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your input and try again.",
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    )
  }
}

// Email notification function (using Resend as an example)
async function sendEmailNotification(data: { name: string; email: string; message: string }) {
  // If you're using Resend (recommended for Next.js)
  // You'll need to: npm install resend
  // And set RESEND_API_KEY in your environment variables

  /*
  import { Resend } from 'resend'
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  await resend.emails.send({
    from: 'website@maharagamatoastmasters.com',
    to: 'maharagama.toastmasters@example.com',
    subject: `New Contact Form Message from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  })
  */

  // Alternative: Using Nodemailer (more complex setup)
  /*
  import nodemailer from 'nodemailer'
  
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: 'maharagama.toastmasters@example.com',
    subject: `New Contact Form Message from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  })
  */

  // For now, just log the data (you can see this in your server logs)
  console.log("New contact form submission:", {
    name: data.name,
    email: data.email,
    message: data.message,
    timestamp: new Date().toISOString(),
  })

  // You could also save to a JSON file for simple storage:
  // const fs = require('fs').promises
  // const submissions = JSON.parse(await fs.readFile('submissions.json', 'utf8') || '[]')
  // submissions.push({ ...data, timestamp: new Date().toISOString() })
  // await fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2))
}
