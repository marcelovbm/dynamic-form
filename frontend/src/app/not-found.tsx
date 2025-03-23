import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9">
                Page 404 Not Found.
            </h1>
            <p>The page you tried to access does not exist!</p>
            <Link href={"/"}>
                Home
            </Link>
        </div>
    );
}