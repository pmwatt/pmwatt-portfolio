import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { AnimatedCard } from "@/components/animatedcard/AnimatedCard";

const FooterPage = () => {
  return (
    <AnimatedCard>
      <section className="container mx-auto px-4 pb-14 pt-20" id="footer">
        <div className="max-w-3xl mx-auto text-center">
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
          <p className="text-sm text-muted-foreground mt-24">
            ©2024 Prachnachai Meakpaiboonwattana. All rights reserved.
          </p>
        </div>
      </section>
    </AnimatedCard>
  );
};

export default FooterPage;