import { type NextRequest, NextResponse } from "next/server"

// In a real application, you'd use a database
// For this example, we'll simulate with in-memory storage
let submissions: any[] = []

export async function GET() {
  return NextResponse.json({ submissions })
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, status } = await request.json()

    const submissionIndex = submissions.findIndex((sub) => sub.id === id)
    if (submissionIndex !== -1) {
      submissions[submissionIndex].status = status
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json()

    submissions = submissions.filter((sub) => sub.id !== id)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
