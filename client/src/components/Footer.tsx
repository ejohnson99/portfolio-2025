import { Link } from "wouter";
import { SiDribbble, SiLinkedin, SiTwitter } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">Jane Smith</h3>
          <p className="text-sm text-muted-foreground">
            Senior Product Designer crafting meaningful digital experiences
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Work
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <div className="flex space-x-4">
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <SiDribbble className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <SiLinkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <SiTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-muted-foreground">
            hello@janesmith.design<br />
            San Francisco, CA
          </p>
        </div>
      </div>
      <div className="container py-6 border-t">
        <p className="text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} Jane Smith. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
