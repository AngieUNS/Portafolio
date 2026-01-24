import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'

export const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black mb-4">Contacto</h2>
                <p className="text-slate-400">
                    Estoy lista para integrarme a equipos dinámicos y aportar soluciones frontend de calidad.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <a
                    href="https://www.linkedin.com/in/angie-c-a7687a289/"
                    target="_blank"
                    className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition relative overflow-hidden"
                >
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <Linkedin />
                            </div>
                            <div>
                                <h3 className="font-bold">LinkedIn</h3>
                                <p className="text-sm text-slate-500">Conectemos profesionalmente</p>
                            </div>
                        </div>
                        <ArrowUpRight className="text-slate-700 group-hover:text-cyan-400 transition" />
                    </div>
                </a>

                <a
                    href="mailto:angiecastillogoicochea@gmail.com"
                    className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 transition relative overflow-hidden"
                >
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400">
                                <Mail />
                            </div>
                            <div>
                                <h3 className="font-bold">Email</h3>
                                <p className="text-sm text-slate-500">angiecastillogoicochea@gmail.com</p>
                            </div>
                        </div>
                        <ArrowUpRight className="text-slate-700 group-hover:text-violet-400 transition" />
                    </div>
                </a>
            </div>

        </section>
    )
}