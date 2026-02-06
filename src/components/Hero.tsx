import { ArrowRight, Code2 } from 'lucide-react'

export const Hero = () => {
    const scrollStyles = (
        <style>{`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-scroll {
                animation: scroll 25s linear infinite;
                display: flex;
                width: max-content;
            }
        `}</style>
    );
    // Definimos las tecnologías para el carrusel
    const techStack = [
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Net Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ];

    return (
        <section className="pt-40 pb-32 px-6 max-w-6xl mx-auto relative overflow-hidden">
            <div className="max-w-4xl">
                {scrollStyles}
                {/* Badge con tecnología principal */}
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="text-xs font-medium tracking-widest uppercase text-cyan-400">
                        Web Developer
                    </span>
                </div>

                {/* Título de Ingeniera */}
                <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white">
                    Angie <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                        Castillo
                    </span>
                </h1>

                {/* Descripción actualizada con Vue */}
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                    <span className="text-slate-100 font-semibold">Ingeniera de Sistemas</span> con sólida experiencia en
                    <span className="text-cyan-400"> arquitecturas modulares</span>. Especializada en transformar diseños complejos en aplicaciones robustas utilizando
                    <span className="text-slate-200"> Angular, React y Vue</span>, con un fuerte dominio de
                    <span className="text-cyan-400"> TypeScript</span> para soluciones escalables.
                </p>

                {/* Botones */}
                <div className="flex gap-6 flex-wrap items-center mb-16">
                    <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-cyan-400 transition-all transform hover:scale-105">
                        Ver Proyectos
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex gap-4">
                        <a
                            href="/CV_Angie_Castillo.pdf"
                            download="Angie_Castillo_Frontend_CV.pdf"
                            className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-cyan-400 transition"
                        >
                            Descargar CV
                        </a>
                        <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/50 transition">
                            <Code2 className="w-6 h-6 text-slate-400" />
                        </div>
                    </div>
                </div>

                {/* Carrusel de Logos (Infinite Scroll) */}
                <div className="pt-12 border-t border-slate-800/50">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-10">
                        Tech Stack & Tools
                    </p>

                    <div className="relative flex overflow-hidden">
                        {/* Aumentamos el gap a 16 para que respiren los iconos grandes */}
                        <div className="flex gap-16 animate-scroll">
                            {[...techStack, ...techStack].map((tech, index) => (
                                <div key={index} className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 min-w-fit">
                                    {/* Icono más grande: h-12 w-12 */}
                                    <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
                                    {/* Texto más grande: text-lg */}
                                    <span className="text-slate-300 font-bold text-lg tracking-tight">
                        {tech.name}
                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Gradientes laterales para dar profundidad (Opcional pero recomendado) */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}