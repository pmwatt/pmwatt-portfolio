import { AnimatedCard } from "@/components/animatedcard/AnimatedCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectsPage = () => {
  const projects = {
    featured: [
      {
        title: "MUICT 3rd Year Track Recommendation System",
        duration: "Feb 2024 – May 2024",
        description:
          "A machine learning-based system for recommending academic tracks to ICT students.",
        achievements: [
          "Trained using random forest algorithm achieving 0.81 cross-validation score",
          "Frontend UI made using Flask, and backend made using FastAPI",
          "Deployed as dockerfiles for easy deployment and scaling",
        ],
        technologies: [
          "Python",
          "Flask",
          "FastAPI",
          "Docker",
          "Random Forest",
          "Machine Learning",
        ],
      },
      {
        title: "Siriraj Chatbot",
        duration: "Mar 2024",
        description:
          "A healthcare chatbot developed for Mahidol AI Hackathon 2024: LLM for Healthcare",
        achievements: [
          "Obtained 1st Runner-up award",
          "Implemented chatbot using Google Vertex AI with RAG",
          "Successfully ingested and processed data from Siriraj Hospital website",
        ],
        award: "1st Runner-up at Mahidol AI Hackathon 2024",
        technologies: [
          "Google Vertex AI",
          "RAG",
          "LLM",
          "Healthcare",
          "Chatbot",
        ],
      },
    ],
    web: [
      {
        title: "ICT Mahidol Market Festival Site",
        duration: "Jan 2024",
        description: "A web application for the ICT Mahidol Market Festival.",
        achievements: [
          "Created frontend using NextJS and TailwindCSS",
          "Implemented animations using Framer Motion",
          "Collaborated with team members for seamless integration",
        ],
        technologies: ["NextJS", "TailwindCSS", "Framer Motion"],
      },
      {
        title: "Revif Art Commission Site",
        duration: "Jan 2023 – Apr 2023",
        description:
          "A web platform inspired by DeviantArt / Fiverr for art commissions.",
        achievements: [
          "Developed full-stack application with Frontend UI and Backend services",
          "Implemented Express framework for backend services",
          "Created and managed MySQL database system",
        ],
        technologies: ["Express", "MySQL", "Frontend", "Backend", "Full-stack"],
      },
    ],
  };

  return (
    <AnimatedCard>
      <section className="container mx-auto px-4 py-16" id="projects">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <Separator className="mb-8" />

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="featured">Featured Projects</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
          </TabsList>

          <TabsContent value="featured">
            {projects.featured.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </TabsContent>

          <TabsContent value="web">
            {projects.web.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </AnimatedCard>
  );
};

export default ProjectsPage;
