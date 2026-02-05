import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { projects, skills } from './data/content';
import {Contact} from "./components/Contact.tsx";
import {Experience} from "./components/Experience.tsx";
import { SpeedInsights } from '@vercel/speed-insights/react'; // La data que separamos

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">

            {/* 1. Elementos de fondo (Background) */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-40 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* 2. Capa de contenido */}
            <div className="relative z-10">
                <Header />

                <main>
                    <Hero />
                    <Experience/>

                    {/* Sección de Skills */}
                    <section id="about" className="py-32 px-6 max-w-6xl mx-auto border-t border-cyan-500/20">
                        <h2 className="text-4xl font-black mb-12">Skills</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {skills.map((skill, idx) => (
                                <SkillCard key={idx} {...skill} />
                            ))}
                        </div>
                    </section>

                    {/* Sección de Proyectos */}
                    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto border-t border-cyan-500/20">
                        <h2 className="text-4xl font-black mb-16">Selected Projects</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {projects.map((project, idx) => (
                                <ProjectCard key={idx} {...project} />
                            ))}
                        </div>
                    </section>
                </main>
                <Contact />
                <footer className="border-t border-cyan-500/20 py-8 text-center text-slate-500">
                    <p>© 2026 Angie Castillo. Built with React + Vite.</p>
                </footer>
            </div>
            <SpeedInsights />
        </div>
    );
}

export default App;