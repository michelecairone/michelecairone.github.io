import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">Benvenuto al mio Portfolio!</h1>
                <p className="mt-4 text-lg">Esplora il mio CV interattivo.</p>
                <div className="mt-6">
                    <Link href="/about" className="text-blue-500 hover:underline">
                       Chi Sono
                    </Link>
                </div>
            </div>
        </Layout>
    );
}



