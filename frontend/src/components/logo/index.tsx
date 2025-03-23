import Link from "next/link";

export function Logo() {
    return (
            <Link
            href={"/"}
            className="font-bold text-3xl hover:cursor-pointer">
                Form Builder
            </Link>
    )
}