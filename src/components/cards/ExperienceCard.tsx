import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceProps {
  title: string
  role: string
  duration: string
  location: string
  responsibilities: string[]
  isCurrent?: boolean
}

export const ExperienceCard = ({
  title,
  role,
  duration,
  location,
  responsibilities,
  isCurrent = false,
}: ExperienceProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-lg font-medium">
              {role}
              {isCurrent && (
                <Badge variant="secondary" className="ml-2">
                  Current
                </Badge>
              )}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">{duration}</div>
            <div className="text-sm text-muted-foreground">{location}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm">
              {responsibility}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}