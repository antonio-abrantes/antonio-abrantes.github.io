import { Github, Instagram, Linkedin, Twitter, ThumbsUp } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'

export function SocialLinks() {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h2 className="text-xl text-white">Redes</h2>
      <div className="flex gap-6">
        <a 
          href={SOCIAL_LINKS.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Github className="w-6 h-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a 
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Instagram className="w-6 h-6" />
          <span className="sr-only">Instagram</span>
        </a>
        <a 
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Linkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a 
          href={SOCIAL_LINKS.twitter}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Twitter className="w-6 h-6" />
          <span className="sr-only">Twitter</span>
        </a>
        <a 
          href="https://github.com/antonio-abrantes/my-home-page"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ThumbsUp className="w-6 h-6" />
          <span className="sr-only">Social</span>
        </a>
      </div>
    </div>
  );
}