import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:h-16 md:flex-row md:px-8">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://github.com/sdiv0503"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Divyansh Sharma
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/sdiv0503/portfolio"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex gap-4">
          <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}