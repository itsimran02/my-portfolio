import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 md:py-32 border-t border-white/10 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Let&apos;s <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Talk.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-lg">
              Have a project in mind? We&apos;re always open to discussing new opportunities and ideas.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <Link 
              href="mailto:imrandev.js@gmail.com" 
              className="inline-flex items-center gap-3 text-2xl font-medium hover:text-zinc-200 transition-colors"
            >
              imrandev.js@gmail.com <ArrowUpRight size={24} />
            </Link>
            <div className="flex gap-6 mt-4">
              <Link href="https://github.com/itsimran02" target="_blank" className="p-4 glass-card rounded-full hover:bg-white/10 transition-colors">
                <Github size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/imran-webdev/" target="_blank" className="p-4 glass-card rounded-full hover:bg-white/10 transition-colors">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Imran. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
