import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { AnimatedCard } from "@/components/animatedcard/AnimatedCard";
import pfp from "../assets/pfp.jpeg";

const AboutPage = () => {
  return (
    <AnimatedCard>
      <section className="container mx-auto px-4 pb-20 pt-40" id="about">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="flex flex-col items-center text-4xl font-bold mb-4">
            <Avatar className="w-44 h-44 mb-12">
                <AvatarImage src={pfp}/>
              <AvatarFallback>PM</AvatarFallback>
            </Avatar>
            Prachnachai Meakpaiboonwattana
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Computer Science Student at Mahidol University
          </p>
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
            <Button variant="outline" asChild>
              <a
                href="mailto:Prachnachai.m@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Prachnachai.m@gmail.com
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/prachnachai-m/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Pathum Thani, Thailand
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-center max-w-2xl mx-auto">
              A versatile CS student with strong intuition for design,
              accessibility, and frontend development. With my solid technical
              and research background, I combine thoughtful design principles
              with a focus on creating timeless, long-term friendly and
              accessible web experiences to users.
            </p>
          </CardContent>
        </Card>
      </section>
    </AnimatedCard>
  );
};

export default AboutPage;
