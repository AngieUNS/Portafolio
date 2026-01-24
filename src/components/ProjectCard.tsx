import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    tech: string[];
    accent: string;
    demo: string;
    code: string;
}

export const ProjectCard = ({ title, description, image, tech, accent, demo, code }: ProjectProps) => {
    return (
        <div className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all">
            <div className={`absolute inset-0 bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
            <div className="relative h-48 bg-slate-700">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-slate-400 text-sm mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30">
              {t}
            </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a href={demo} className="flex items-center gap-2 text-cyan-400 text-sm font-semibold"><ExternalLink size={16}/> Demo</a>
                    <a href={code} className="flex items-center gap-2 text-cyan-400 text-sm font-semibold"><Github size={16}/> Code</a>
                </div>
            </div>
        </div>
    );
};