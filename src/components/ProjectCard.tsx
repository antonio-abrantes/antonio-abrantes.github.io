import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";
import type { Repository } from "@/services/github";

interface ProjectCardProps {
  repo: Repository;
}

export function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <Button 
      variant="secondary" 
      className="w-full bg-gray-800 text-white hover:bg-gray-700 rounded-custom flex items-center justify-between group p-4"
      onClick={() => window.open(repo.html_url, '_blank')}
    >
      <div className="flex flex-col items-start text-left">
        <span className="font-medium truncate max-w-[200px]">{repo.name}</span>
        {repo.language && (
          <span className="text-xs text-gray-400">{repo.language}</span>
        )}
      </div>
      <div className="flex items-center gap-2 text-gray-400 group-hover:text-white">
        {repo.stargazers_count > 0 && (
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span className="text-sm">{repo.stargazers_count}</span>
          </div>
        )}
        <ExternalLink className="w-4 h-4" />
      </div>
    </Button>
  );
}