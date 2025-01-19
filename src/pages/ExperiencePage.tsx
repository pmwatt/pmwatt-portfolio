import { AnimatedCard } from "@/components/animatedcard/AnimatedCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Separator } from "@/components/ui/separator";

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Nara Institute of Science and Technology",
      role: "Research Intern",
      duration: "Jan, 2025 – Present",
      location: "Ikoma, Nara, Japan",
      responsibilities: [
        "Obtained JASSO scholarship to continue investigation for the second time as a continuation for senior project empirical research on AI github projects on hackernews",
        "Investigated hackernews submission effects on github project growth using propensity score matching causal inference technique"
      ],
      isCurrent: true,
    },
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
        "Engineered responsive web interfaces with ReactJS (TypeScript) and Chakra UI library based on Figma prototype from the UIUX team",
        "Implemented zustand state management system to improve performance by saving current forms cache when switching pages",
      ],
      isCurrent: true,
    },
    {
      title: "Faculty of ICT, Mahidol University",
      role: "Academic Scholarship Tutor",
      duration: "Oct, 2022 – Present",
      location: "Hybrid",
      responsibilities: [
        "Conducted and organized tutoring as part of Academic Scholarship contract to tutor for 15 hours each semester",
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
        "Investigated HackerNews discussions as part of 4th year senior project",
	      "Performed preliminary investigation on GitHub project license changes after the release of ChatGPT",
	      "Retrieved and cleaned dataset to be used for further investigation using HackerNews API"
      ],
    },
    {
      title: "Faculty of ICT, Mahidol University",
      role: "Lab Assistant",
      duration: "Jan, 2024 – Apr, 2024",
      location: "Nakhon Pathom",
      responsibilities: [
        "Part of the Introduction to OOP lab assistant team responsible for marking weekly assignments, as well as providing feedbacks and guidance on OOP principles using Java inc. inheritance, composition, polymorphism, UML diagrams"
      ],
    },
    {
      title: "Faculty of ICT, Mahidol University",
      role: "Private Tutor",
      duration: "Jul, 2023 – Nov,2023",
      location: "Hybrid",
      responsibilities: [
        "Provided additional tutoring and exam preparation for university courses inc. Web Programming using React, discrete mathematics, fundamental of programming using C, and linear algebra"
      ],
    },
    {
      title: "Mue-Im Cafe and Home Kitchen",
      role: "Graphic Designer",
      duration: "Dec, 2022 - May, 2024",
      location: "Hybrid",
      responsibilities: [
        "Designed promotional posters, menus, billboard signs, and logo emphasizing restaurant's identity and atmosphere"
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
