import { Link } from "wouter";
import { motion } from "framer-motion";
import { type Project } from "@shared/schema";

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Link key={project.id} href={`/project/${project.id}`}>
          <a>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold">{project.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{project.category}</p>
                </div>
              </div>
            </motion.div>
          </a>
        </Link>
      ))}
    </div>
  );
}
