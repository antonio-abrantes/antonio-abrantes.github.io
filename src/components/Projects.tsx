import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Repository } from "@/services/github";
import { fetchGithubRepos } from "@/services/github";

export function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      const data = await fetchGithubRepos('antonio-abrantes');
      setRepos(data);
      setIsLoading(false);
    }
    loadRepos();
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h2 className="text-xl text-white">Projetos Pessoais</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        {isLoading ? (
          <div className="text-gray-400 text-center col-span-full">Carregando projetos...</div>
        ) : repos.length > 0 ? (
          repos.map(repo => (
            <ProjectCard key={repo.id} repo={repo} />
          ))
        ) : (
          <div className="text-gray-400 text-center col-span-full">Nenhum repositório encontrado</div>
        )}
      </div>
    </div>
  );
}