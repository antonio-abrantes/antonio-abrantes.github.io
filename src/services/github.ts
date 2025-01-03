import { GITHUB_API_BASE_URL } from '@/lib/constants';

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
}

export async function fetchGithubRepos(username: string): Promise<Repository[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE_URL}/users/${username}/repos?sort=created&per_page=16`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}