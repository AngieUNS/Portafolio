export const Header = () => {
    return (
        <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                    AC
                </div>
                <div className="flex gap-8 text-sm">
                    <a href="#about" className="hover:text-cyan-400 transition">About</a>
                    <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
                    <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
                </div>
            </div>
        </nav>
    );
};