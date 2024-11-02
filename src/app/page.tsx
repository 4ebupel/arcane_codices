'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Loader from "./components/Loader"

export default function Home() {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") {return}
    if (status === "unauthenticated") {
      router.push("/codices")
    } else if (status === "authenticated") {
      router.push("/codices")
    }
  }, [status, router])

  if (status === "loading") {return <div><Loader /></div>}

  return null
}