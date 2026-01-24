import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
    {
        company: "SIMA - Servicios Industriales de la Marina",
        role: "Practicante de Ingeniería de Sistemas (Frontend)",
        period: " Septiembre 2025 - Presente",
        description: "Desarrollo de módulos críticos para la gestión empresarial utilizando arquitecturas escalables.",
        achievements: [
            "Implementación de arquitecturas modulares y Lazy Loading en Angular para optimizar el rendimiento.",
            "Consumo de Web Services (REST) y manejo de estados complejos.",
            "Migración de componentes legacy a estándares modernos de TypeScript."
        ],
        color: "border-blue-500"
    },
    {
        company: "Municipalidad de Nuevo Chimbote",
        role: "Practicante Frontend",
        period: "Enero 2025 - Agosto 2025",
        description: "Digitalización de servicios ciudadanos y mejora de la accesibilidad web.",
        achievements: [
            "Desarrollo del sistema 'Consulta tu Trámite' con seguimiento en tiempo real.",
            "Maquetación precisa de diseños desde Figma usando Tailwind CSS.",
            "Colaboración bajo metodología SCRUM para entregas semanales de valor."
        ],
        color: "border-emerald-500"
    },
    {
        company: "SysEduca",
        role: "Frontend Developer Junior",
        period: "2024",
        description: "Mantenimiento y creación de nuevas funcionalidades para plataformas educativas.",
        achievements: [
            "Uso de Git Flow para la gestión de versiones en equipo colaborativo.",
            "Optimización de formularios reactivos y validaciones de datos."
        ],
        color: "border-violet-500"
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-16">
                <Briefcase className="text-cyan-400" size={32} />
                <h2 className="text-4xl font-black text-white">Trayectoria <span className="text-slate-500">Profesional</span></h2>
            </div>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className={`relative pl-8 border-l-2 ${exp.color} pb-12 last:pb-0`}>
                        {/* Círculo decorativo */}
                        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 ${exp.color}`}></div>

                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                                <p className="text-cyan-400 font-medium mt-1">{exp.role}</p>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full text-sm border border-slate-800">
                                <Calendar size={14} />
                                {exp.period}
                            </div>
                        </div>

                        <p className="text-slate-400 mt-4 max-w-3xl">
                            {exp.description}
                        </p>

                        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                            {exp.achievements.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                    <CheckCircle2 className="text-cyan-500 mt-1 shrink-0" size={16} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};
