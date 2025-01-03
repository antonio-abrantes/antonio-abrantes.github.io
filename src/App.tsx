import { Profile } from "./components/Profile";
import { SocialLinks } from "./components/SocialLinks";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#020817] relative flex flex-col">
      {/* Dotted background pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(#ffffff15 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl px-4 py-8 flex flex-col items-center gap-8 relative z-10">
          <Profile />
          <Projects />
          <SocialLinks />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}