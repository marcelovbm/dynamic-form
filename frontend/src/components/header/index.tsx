import Link from "next/link";

export function Header() {

    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
                {/* Logo */}
                <h1 className="text-xl font-bold">Custom Forms</h1>
                <nav>
                    {/* Desktop Menu */}
                    <ul className="flex items-center justify-center gap-2">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/form" className="hover:underline">Form</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
