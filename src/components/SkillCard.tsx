import type {LucideIcon} from 'lucide-react';

interface SkillProps {
    category: string;
    icon: LucideIcon; // Esto permite que WebStorm sepa que pasamos un componente
    items: string[];
}

export const SkillCard = ({ category, icon: Icon, items }: SkillProps) => {
    return (
        <div className="group relative p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all overflow-hidden">
            {/* Efecto de brillo al pasar el mouse */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-cyan-400"></div>

            <div className="relative flex items-start gap-4">
                {/* Renderizamos el icono que viene por props */}
                <Icon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />

                <div>
                    <h3 className="font-bold mb-3 text-cyan-300">{category}</h3>
                    <div className="space-y-2">
                        {items.map((item, i) => (
                            <p key={i} className="text-slate-400 text-sm">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};