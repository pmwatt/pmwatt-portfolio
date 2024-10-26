import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Trophy } from "lucide-react"

interface ProjectProps {
  title: string
  duration: string
  description: string
  achievements?: string[]
  award?: string
  technologies?: string[]
}

export const ProjectCard = ({
  title,
  duration,
  description,
  achievements,
  award,
  technologies,
}: ProjectProps) => {
  return (
    <Card className="mb-6 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-2">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="text-sm mt-1">
                {duration}
              </CardDescription>
            </div>
            {award && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Trophy className="h-5 w-5 text-yellow-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{award}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm">{description}</p>
        {achievements && achievements.length > 0 && (
          <div className="mb-4">
            <ul className="list-disc list-inside space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}