"use client"

import { Bell, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import LogoMenu from "./LogoMenu";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter()

  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className=" mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="flex-shrink-0 w-12 h-12">
            <AvatarImage
              src={"/images/LimbusCompanyLogo.png"}
              alt={`Company Logo`}
              className="rounded-full"
            />
            <AvatarFallback className="rounded-full">F</AvatarFallback>
          </Avatar>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.push("/codices")}>Codices</Button>
            <Button variant="ghost" onClick={() => router.push("/team")}>Team</Button>
          </nav>
        </div>
        {/* <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder='e.g. "create jobad"' className="pl-8" />
          </div>
        </div> */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => router.push("/support")}>
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <LogoMenu />
        </div>
      </div>
    </header>
  )
}