import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedCard } from "@/components/animatedcard/AnimatedCard";

const SkillsPage = () => {
  const skills = {
    development: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "ChakraUI",
      "Shadcn/ui",
      "ExpressJS",
      "MySQL",
      "Firebase",
    ],
    mobile: ["Dart", "Flutter"],
    backend: ["Flask", "FastAPI", "Docker", "AWS"],
    design: [
      "Digital Art (Krita, Photoshop, Aseprite)",
      "3D Modelling (Blender)",
    ],
  };

  const certifications = [
    {
      title: "AWS Academy Graduate",
      description: "AWS Academy Cloud Foundations",
    },
    {
      title: "Google UX Design",
      description: "Foundations of UX Design",
    },
  ];

  return (
    <AnimatedCard>
      <section className="container mx-auto px-4 py-16" id="skills">
        <h2 className="text-3xl font-bold mb-8">Skills & Certifications</h2>
        <Separator className="mb-8" />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="development">
                  <AccordionTrigger>Web Development</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.development.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mobile">
                  <AccordionTrigger>Mobile Development</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.mobile.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="backend">
                  <AccordionTrigger>Backend & DevOps</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="design">
                  <AccordionTrigger>Design</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.design.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 pl-4 py-2">
                    <h4 className="font-medium">{cert.title}</h4>
                    <CardDescription>{cert.description}</CardDescription>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </AnimatedCard>
  );
};

export default SkillsPage;
