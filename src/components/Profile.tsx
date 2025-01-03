import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bio } from "./Bio"

export function Profile() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Avatar className="w-24 h-24 border-4 border-yellow-500/80">
        <AvatarImage src="https://avatars.githubusercontent.com/u/20172965?v=4" alt="Profile picture" />
        <AvatarFallback>AA</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-white">Antônio Abrantes</h1>
        <p className="text-gray-400">👨‍💻 Systems Analyst | WebMobile Developer</p>
      </div>
      <div className="text-center">
        <Bio />
      </div>
    </div>
  );
}