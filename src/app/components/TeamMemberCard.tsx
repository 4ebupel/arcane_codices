import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight } from "lucide-react"
import { User } from "../types/User"

export function TeamMemberCard(user: User) {
  const initials = user.name
    ? user.name.split(' ').map((n) => n[0]).join('')
    : '?'

  return (
    <Card className="border-none shadow-none bg-transparent overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-stretch">
          <div className="flex-grow p-6">
            <h3 className="text-2xl font-semibold">{user.name || 'Unknown'}</h3>
            <ul className="flex space-x-2 mt-2 mb-2">
              {user.aliases.map((alias) => (
                <li key={alias} className="text-sm text-muted-foreground">
                  {alias}
                </li>
              ))}
              <li className="text-sm text-muted-foreground">
                {user.personality}
              </li>
            </ul>
            <ul className="space-y-2">
              {user.facts.map((fact) => (
                <li className="flex items-center space-x-2" key={fact}>
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-32 sm:w-48">
            <div className="h-full">
              <Avatar className="w-full h-full">
                <AvatarImage src={user.avatar.url} alt={user.name || 'Team member'} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}