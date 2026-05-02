
import {Code2, Layout, ShieldCheck, Database, Server} from 'lucide-react'

export const projects = [
    {
        title: "Reserva de Campos Deportivos",
        description: "Sistema integral con gestión de horarios. Implementado con arquitectura modular y componentes reutilizables.",
        image: "/assets/imagen2.png",
        tech: ["Angular", "TypeScript", "NgZorro", "MySQL"],
        accent: "from-blue-600 to-cyan-600",
        demo: "https://camposdeportivos.muninuevochimbote.gob.pe/login", // Tu link de Vercel
        code: "https://github.com/AngieUNS/SistemaReservaC"
    },
    {
        title: "Sistema de Legajos",
        description: "Plataforma administrativa para gestión de expedientes con control de roles (Guards) y autenticación JWT.",
        image: "/assets/project2.png",
        tech: ["React", "PHP", "SQL Server", "JWT"],
        accent: "from-violet-600 to-purple-600",
        demo: "",
        code: "https://github.com/AngieUNS/Escalafon"
    },
    {
        title: "BI Analytics Dashboard",
        description: "Panel de inteligencia de negocios con visualización de métricas en tiempo real, filtros dinámicos por fecha y arquitectura de componentes reutilizables en React.",
        image: "/assets/dashboard.PNG", // Usa una captura de lo que acabamos de construir
        tech: ["React", "TypeScript", "Recharts", "Tailwind CSS", "Lucide Icons"],
        accent: "from-cyan-500 to-blue-600",
        demo: "https://dashboard-beta-three-75.vercel.app/", // Link a la sección de tu portafolio donde está el dashboard
        code: "https://github.com/AngieUNS/dashboard.git"  // Link a tu GitHub
    },
    {
        title: "Smart Inventory Dashboard",
        description: "Dashboard administrativo desarrollado en Vue.js para la gestión de inventarios, con filtrado dinámico mediante Axios.",
        image: "/assets/vue.PNG", // Asegúrate de que el nombre coincida
        tech: ["Vue.js", "Axios", "Tailwind CSS", "JavaScript"],
        demo: "https://vue-proyecto-woad.vercel.app/",
        accent: "from-cyan-500 to-blue-600",
        code: "https://github.com/AngieUNS/Vue-proyecto.git"
    },
    {
        title: "AI Lead Analyzer Dashboard",
        description: "Dashboard inteligente que automatiza la calificación de prospectos mediante NLP, integrando React con flujos de IA para análisis en tiempo real.",
        image: "/assets/make.png", // Recuerda subir la captura de tu dashboard a esa carpeta
        tech: ["React", "Gemini AI", "Make.com", "Tailwind CSS", "Webhooks"],
        demo: "https://make-project-ten.vercel.app/", // Pon aquí tu link de Vercel
        accent: "from-violet-600 to-purple-600",
        code: "https://github.com/AngieUNS/make-project"
    }
];

export const skills = [
    {
        category: "Frontend Core",
        icon: Code2,
        items: ["Angular", "TypeScript", "React", "Ionic (Basico)"]
    },
    {
        category: "Backend Development", // ✅ NUEVA CATEGORÍA
        icon: Server, // Asegúrate de importar el icono 'Server' de lucide-react
        items: ["Node.js", ".NET Core", "C#", "Entity Framework"]
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