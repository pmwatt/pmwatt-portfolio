import { AnimatedCard } from "@/components/animatedcard/AnimatedCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Separator } from "@/components/ui/separator";

const ExperiencePage = () => {
  const experiences = [
    {
      title: "MUICT Devclub",
      role: "Dev Lead",
      duration: "Jun, 2024 – Present",
      location: "Nakhon Pathom",
      responsibilities: [
        "Responsible for streamlining the development of ICT One Stop Service IOSS project across different teams on GitHub Projects",
        "Organizing Devclub training sessions for Frontend Web and Mobile, Backend, UI/UX, QA, and Gamedev teams",
      ],
      isCurrent: true,
    },
    {
      title: "MUICT Devclub",
      role: "Frontend Web Developer",
      duration: "Dec, 2023 – Present",
      location: "Nakhon Pathom",
      responsibilities: [
        "Part of the Frontend Web Team specializing in frontend technologies including ReactJS (TypeScript) and Chakra UI",
        "Integrating services from ASP.NET Core backend team",
      ],
      isCurrent: true,
    },
    {
      title: "Faculty of ICT, Mahidol University",
      role: "Academic Scholarship Tutor",
      duration: "Oct, 2022 – Present",
      location: "Hybrid",
      responsibilities: [
        "Organizing and announcing online meetings, preparing core & additional course materials",
        "Tutoring and conducting Q&A sessions",
        "Course Examples: Computer Networks, Information Storage and Retrieval, Data Structure & Algorithms",
      ],
      isCurrent: true,
    },
    {
      title: "Nara Institute of Science and Technology",
      role: "Research Intern",
      duration: "May, 2024 – Aug, 2024",
      location: "Ikoma, Nara, Japan",
      responsibilities: [
        "Investigated trends of AI and LLM in GitHub projects found on HackerNews site and the overall discussion's sentiments",
        "To be completed as part of our 4th year senior project titled 'An Empirical Studies of AI/LLM GitHub Projects on HackerNews'",
      ],
    },
  ];

  return (
    <AnimatedCard>
      <section className="container mx-auto px-4 py-16" id="experience">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <Separator className="mb-8" />
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </section>
    </AnimatedCard>
  );
};

export default ExperiencePage;
