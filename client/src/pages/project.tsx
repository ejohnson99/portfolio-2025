import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Project } from "@shared/schema";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  
  const { data: project, isLoading } = useQuery<Project>({
    queryKey: [`/api/projects/${id}`],
  });

  if (isLoading) {
    return <div className="animate-pulse space-y-4">
      <div className="h-64 bg-muted rounded-lg" />
      <div className="h-8 w-48 bg-muted rounded" />
      <div className="h-4 w-full bg-muted rounded" />
    </div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <Link href="/">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full aspect-video object-cover rounded-lg"
      />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-xl font-semibold">The Challenge</h2>
            <p className="mt-2">{project.details.challenge}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">The Solution</h2>
            <p className="mt-2">{project.details.solution}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">The Outcome</h2>
            <p className="mt-2">{project.details.outcome}</p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
