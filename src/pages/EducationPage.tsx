import { AnimatedCard } from "@/components/animatedcard/AnimatedCard";
import { EducationCard } from "@/components/cards/EducationCard";
import { Separator } from "@/components/ui/separator";

const EducationPage = () => {
  const education = [
    {
      institution: "Faculty of ICT, Mahidol University",
      degree: "Bachelor of Science, Computer Science",
      duration: "Expected May 2025",
      location: "Nakhon Pathom",
      gpa: "3.94/4.0",
      achievements: ["Summa Cum Laude"],
    },
    {
      institution: "Exeter College",
      degree: "A-level: Biology, Physics, Mathematics, EPQ",
      duration: "Aug 2018 – Jun 2020",
      location: "Exeter, UK",
      grades: "AAAA",
    },
  ];

  return (
    <AnimatedCard>
      <section className="container mx-auto px-4 py-16" id="education">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <Separator className="mb-8" />
        {education.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </section>
    </AnimatedCard>
  );
};

export default EducationPage;
