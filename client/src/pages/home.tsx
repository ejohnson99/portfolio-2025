import { useQuery } from "@tanstack/react-query";
import { Project } from "@shared/schema";
import PortfolioGrid from "@/components/portfolio-grid";
import { motion } from "framer-motion";

export default function Home() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-[4/3] rounded-lg bg-muted animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl font-bold">
          Senior Product Designer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Crafting intuitive digital experiences that solve real problems through thoughtful design and user-centered thinking.
        </p>
      </motion.div>

      {projects && <PortfolioGrid projects={projects} />}
    </div>
  );
}
