import { AnimatedCard } from "@/components/animatedcard/AnimatedCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectsPage = () => {
  const projects = {
    ai: [
      {
        title:
          "Senior Project: Empirical Studies on AI GitHub Project Discussions on Hackernews",
        duration: "August 2024 – Present",
        description:
          "A research project to study the spread of AI GitHub projects on hackernews, sentiments regarding AI projects, and the characteristics of AI GitHub projects",
        achievements: [
          "Responsible for gathering hackernews story and comment dataset as well as performing topic modelling using LDA in RQ1, and currently investigating causal inference using propensity score matching for the effects of hackernews submission on GitHub project growth in RQ3",
        ],
        technologies: [
          "Python",
          "GitHub API",
          "Hackernews API",
          "LDA Topic Modelling",
          "Sentiment Analysis",
          "Propensity Score Matching",
        ],
      },
      {
        title: "MUICT 3rd Year Track Recommendation System",
        duration: "Feb 2024 – May 2024",
        description:
          "Our team implemented a system for users to input their preferences on subjects, tools, lifestyles, which our system will match their preferred 3rd year track using Random Forest classification algorithm",
        achievements: [
          "Responsible for integrating Flask frontend web page with FastAPI backend serving the model by deploying using Docker, as well as overseeing form data gathering process",
        ],
        technologies: ["Python", "Flask", "FastAPI", "Docker", "Scikit-Learn"],
      },
      {
        title: "Facial Authentication System",
        duration: "Feb 2024 – Apr 2024",
        description:
          "Implemented a facial authentication login system using Inception Resnet V1 facial recognition model based on VGGFace2 dataset",
        achievements: [
          "The system achieves persistence by storing and retrieving users' facial embeddings via MySQL database for registration and login processes",
        ],
        technologies: ["Python", "Flask", "MySQL", "OpenCV"],
      },
      {
        title: "AI for Healthcare Hackathon - Siriraj Chatbot",
        duration: "Mar 2024",
        description:
          "A healthcare chatbot developed for Mahidol AI Hackathon 2024: LLM for Healthcare",
        achievements: [
          "Responsible for the implementation of LangChain for chat functionality message history and FAISS Vector Store for ingesting and retrieving relevant Siriraj website data",
        ],
        award: "1st Runner-up at Mahidol AI Hackathon 2024",
        technologies: [
          "Google Cloud Platform",
          "Google Vertex AI",
          "RAG",
          "LangChain",
          "FAISS Vector Store",
        ],
      },
    ],
    se: [
      {
        title: "UWU Pet Adoption Mobile App",
        duration: "Jan 2024 - Mar 2024",
        description:
          "Developed a mobile pet adoption app with adoption trainer chatbot for users to ask for guidance on raising their pets",
        achievements: [
          "Frontend implemented using Dart/Flutter, as well as Firebase for storing authentication details and user's favourite pets as bookmarks",
          "Integrated PetFinder API to retrieve external animals and adoption centres data, and Google generative AI for users to request for pet adoption advices",
        ],
        technologies: [
          "Dart/Flutter",
          "Firebase",
          "Petfinder API",
          "Google Generative AI",
        ],
      },
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
    misc: [
      {
        title: "iPot: An IoT Automated watering system for Indoor Plants",
        duration: "November 2024 – December 2024",
        description:
          "An IoT system using ESP32 arduino alongside nodered for users to set a plant watering schedule via nodered platform, which will also collect environment data including temperature, humidity, and light intensity for analysis",
        achievements: [
          "Responsible for designing nodered flows for ingesting time series arduino sensor data into InfluxDB.",
        ],
        technologies: ["Arduino", "ESP32", "Node-red", "InfluxDB"],
      },
      {
        title: "Movie Script Search",
        duration: "October 2023 – December 2023",
        description:
          "A movie script full-text search system based on Convokit movie dataset",
        achievements: [
          "Utilized Elasticsearch BM25 algorithm supporting full-text search, and preliminary movie script dataset from convokit, which were then cleaned and processed.",
          "We also used Kibana for monitoring, exploring and visualizing our movie script database.",
        ],
        technologies: ["Flask", "Elasticsearch", "Kibana"],
      },
    ],
  };

  return (
    <AnimatedCard>
      <section className="container mx-auto px-4 py-16" id="projects">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <Separator className="mb-8" />

        <Tabs defaultValue="ai" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="ai">AI/ML</TabsTrigger>
            <TabsTrigger value="se">Software Development</TabsTrigger>
            <TabsTrigger value="misc">Miscellaneous</TabsTrigger>
          </TabsList>

          <TabsContent value="ai">
            {projects.ai.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </TabsContent>

          <TabsContent value="se">
            {projects.se.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </TabsContent>

          <TabsContent value="misc">
            {projects.misc.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </AnimatedCard>
  );
};

export default ProjectsPage;
