import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function ProjectCard({ id, title, description, image, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/project/${id}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <AspectRatio ratio={16 / 9}>
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </AspectRatio>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
