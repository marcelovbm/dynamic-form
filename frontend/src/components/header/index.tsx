import Link from "next/link";
import { Logo } from "../logo";

export function Header() {

    return (
        <header className="flex px-2 py-4 bg-background">
            <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
                {/* Logo */}
                <Logo />
            </div>
        </header>
    );
}
