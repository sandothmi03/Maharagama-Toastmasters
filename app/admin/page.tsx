"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Calendar, User, MessageSquare, Trash2 } from "lucide-react"

interface ContactSubmission {
  id: string
  name: string
  email: string
  message: string
  timestamp: string
  status: "new" | "read" | "replied"
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch("/api/admin/contacts")
      const data = await response.json()
      setSubmissions(data.submissions || [])
    } catch (error) {
      console.error("Failed to fetch submissions:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: ContactSubmission["status"]) => {
    try {
      await fetch("/api/admin/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      })
      fetchSubmissions()
    } catch (error) {
      console.error("Failed to update status:", error)
    }
  }

  const deleteSubmission = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return

    try {
      await fetch("/api/admin/contacts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      fetchSubmissions()
    } catch (error) {
      console.error("Failed to delete submission:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B1220] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B1220] text-white p-6">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Contact Form Submissions</h1>
          <p className="text-gray-300">Manage messages from your website visitors</p>
        </div>

        <div className="grid gap-6">
          {submissions.length === 0 ? (
            <Card className="bg-[#0E1217] border-gray-700">
              <CardContent className="p-8 text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">No submissions yet</p>
              </CardContent>
            </Card>
          ) : (
            submissions.map((submission) => (
              <Card key={submission.id} className="bg-[#0E1217] border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5 text-[#B7A57A]" />
                      {submission.name}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={`${
                          submission.status === "new"
                            ? "bg-green-500/20 text-green-400"
                            : submission.status === "read"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {submission.status}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteSubmission(submission.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${submission.email}`} className="hover:text-[#B7A57A]">
                      {submission.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(submission.timestamp).toLocaleString()}
                  </div>

                  <div className="bg-[#0B1220] p-4 rounded-lg">
                    <p className="text-gray-300 whitespace-pre-wrap">{submission.message}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => updateStatus(submission.id, "read")}
                      className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
                    >
                      Mark as Read
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => updateStatus(submission.id, "replied")}
                      className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
                    >
                      Mark as Replied
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
