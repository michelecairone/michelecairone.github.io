import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/about">
                        Chi Sono
                    </Link>
                    <Link href="/work">
                        Esperienza
                    </Link>
                    <Link href="/projects">
                       Progetti
                    </Link>
                    <Link href="/contact">
                       Contatti
                    </Link>
                </div>
            </nav>
            <main className="container mx-auto p-4">{children}</main>
        </div>
    );
}
