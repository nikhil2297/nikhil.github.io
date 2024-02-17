import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Education from "@/components/education/education";
import Experience from "@/components/experience/experience";
import Project from "@/components/projects/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <About></About>
      <SectionDivider/>
      <Skills></Skills>
      <Experience></Experience>
      <Project></Project>
      <Education></Education>
      <Contact></Contact>
    </main>
  );
}
