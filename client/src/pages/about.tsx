import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-8 items-start"
      >
        <img
          src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
          alt="Jane Smith"
          className="rounded-lg w-64 object-cover"
        />
        
        <div>
          <h1 className="text-3xl font-bold">Jane Smith</h1>
          <p className="mt-2 text-muted-foreground">Senior Product Designer</p>
          
          <div className="mt-4 flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-6 prose prose-gray dark:prose-invert">
        <p>
          With over 8 years of experience in product design, I've had the privilege of working with startups and established companies to create meaningful digital experiences that users love.
        </p>

        <p>
          My approach combines user-centered design principles with business objectives to deliver solutions that not only look beautiful but also drive results. I specialize in complex application design, design systems, and user experience strategy.
        </p>

        <p>
          When I'm not designing, you can find me mentoring aspiring designers, writing about design on my blog, or exploring new technologies that can enhance the design process.
        </p>

        <div className="flex gap-4">
          <Link href="/contact">
            <Button>Get in Touch</Button>
          </Link>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank">Download Resume</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
