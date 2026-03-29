import { FadeIn } from "@/components/motion/fade-in";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";
import { projects } from "@/content/site";

export default function ProjectsPage() {
  return (
    <div className="page-section py-14 sm:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Projects"
          title="A Closer Look at My Projects"
          description="From full-stack applications to lower-level server work, these projects show the range of what I’ve built so far and how my interests are evolving toward backend, embedded systems, and technical engineering."
          theme="dark"
        />
      </FadeIn>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.08}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
