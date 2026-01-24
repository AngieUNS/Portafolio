
import { Code2, Layout, ShieldCheck, Database } from 'lucide-react'

export const projects = [
    {
        title: "Reserva de Campos Deportivos",
        description: "Sistema integral con gestión de horarios. Implementado con arquitectura modular y componentes reutilizables.",
        image: "public/assets/imagen2.png",
        tech: ["Angular", "TypeScript", "NgZorro", "MySQL"],
        accent: "from-blue-600 to-cyan-600",
        demo: "https://camposdeportivos.muninuevochimbote.gob.pe/login", // Tu link de Vercel
        code: "https://github.com/AngieUNS/SistemaReservaC"
    },
    {
        title: "Sistema de Legajos",
        description: "Plataforma administrativa para gestión de expedientes con control de roles (Guards) y autenticación JWT.",
        image: "public/assets/project2.png",
        tech: ["Angular", "PHP", "SQL Server", "JWT"],
        accent: "from-violet-600 to-purple-600",
        demo: "",
        code: "https://github.com/AngieUNS/Escalafon"
    },
    {
        title: "BI Analytics Dashboard",
        description: "Panel de inteligencia de negocios con visualización de métricas en tiempo real, filtros dinámicos por fecha y arquitectura de componentes reutilizables en React.",
        image: "public/assets/dashboard.PNG", // Usa una captura de lo que acabamos de construir
        tech: ["React", "TypeScript", "Recharts", "Tailwind CSS", "Lucide Icons"],
        accent: "from-cyan-500 to-blue-600",
        demo: "#", // Link a la sección de tu portafolio donde está el dashboard
        code: "https://github.com/AngieUNS/dashboard.git"  // Link a tu GitHub
    }
];

export const skills = [
    {
        category: "Frontend Core",
        icon: Code2,
        items: ["Angular", "TypeScript", "React", "Ionic (Basico)"]
    },
    {
        category: "Arquitectura & UX",
        icon: Layout,
        items: ["Lazy Loading", "Forms Reactivos", "Scroll Infinito", "Paginación"]
    },
    {
        category: "Seguridad & API",
        icon: ShieldCheck,
        items: ["Autenticación JWT", "Guards (Auth/Role)", "Interceptors", "REST APIs"]
    },
    {
        category: "Herramientas",
        icon: Database,
        items: ["Git / GitHub", "Postman", "Figma (UI Design)", "SQL Server"]
    }
];