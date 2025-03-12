import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-3xl font-bold">Get in Touch</h1>
          <p className="mt-2 text-muted-foreground">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <ContactForm />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
