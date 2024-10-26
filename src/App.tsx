import NavBar from "./components/navbar/Navbar"
import { ThemeProvider } from "./components/theme-provider"
import AboutPage from "./pages/AboutPage"
import ExperiencePage from "./pages/ExperiencePage"
import EducationPage from "./pages/EducationPage"
import FooterPage from "./pages/FooterPage"
import ProjectsPage from "./pages/ProjectsPage"
import SkillsPage from "./pages/SkillsPage"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <NavBar />
        <main className="container mx-auto">
          <AboutPage />
          <ExperiencePage />
          <EducationPage />
          <ProjectsPage />
          <SkillsPage />
          <FooterPage />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App