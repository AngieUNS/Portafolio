import {  ArrowRight, Code2 } from 'lucide-react'

export const Hero = () => {
    return (
        <section className="pt-40 pb-32 px-6 max-w-6xl mx-auto relative">
            <div className="max-w-4xl">
                {/* Badge con tecnología principal */}
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="text-xs font-medium tracking-widest uppercase text-cyan-400">
            Frontend Developer
          </span>
                </div>

                {/* Título de Ingeniera */}
                <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
                    Angie <span className="text-white"></span>
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            Castillo
          </span>
                </h1>
                {/* Descripción optimizada para la vacante en IDBI */}
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                    <span className="text-slate-100 font-semibold">Ingeniera de Sistemas</span>  con sólida experiencia en
                    <span className="text-cyan-400"> arquitecturas modulares</span>  y desarrollo frontend.
                    Especializada en transformar diseños complejos de <span className="text-slate-200">Figma</span> en aplicaciones robustas,
                    utilizando mi base técnica en <span className="text-slate-200">Angular</span> para construir soluciones escalables y eficientes con
                    <span className="text-cyan-400"> React y TypeScript</span>.
                </p>

                {/* Botones con estilo moderno */}
                <div className="flex gap-6 flex-wrap items-center">
                    <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-cyan-400 transition-all transform hover:scale-105">
                        Ver Proyectos
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex gap-4">
                        <a
                            href="public/CV_ANGIE_CASTILLO.pdf"
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
            </div>
        </section>
    )
}