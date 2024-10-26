import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCard } from "../animatedcard/AnimatedCard";

interface EducationProps {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa?: string;
  achievements?: string[];
  grades?: string;
}

export const EducationCard = ({
  institution,
  degree,
  duration,
  location,
  gpa,
  achievements,
  grades,
}: EducationProps) => {
  return (
    <AnimatedCard>
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl">{institution}</CardTitle>
              <CardDescription className="text-lg font-medium mt-1">
                {degree}
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">{duration}</div>
              <div className="text-sm text-muted-foreground">{location}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {gpa && (
              <div>
                <Badge variant="secondary" className="text-sm">
                  GPA: {gpa}
                </Badge>
              </div>
            )}
            {grades && (
              <div>
                <Badge variant="secondary" className="text-sm">
                  Grades: {grades}
                </Badge>
              </div>
            )}
            {achievements && achievements.length > 0 && (
              <ul className="list-disc list-inside space-y-1">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-sm">
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
};
