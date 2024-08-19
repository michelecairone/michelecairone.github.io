export default function Contact() {
    return (
        <div className="min-h-screen bg-white p-8">
            <h1 className="text-3xl font-bold">Contattami</h1>
            <form className="mt-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Nome:</label>
                    <input className="w-full px-3 py-2 border border-gray-300" type="text" placeholder="Il tuo nome" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input className="w-full px-3 py-2 border border-gray-300" type="email" placeholder="La tua email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Messaggio:</label>
                    <textarea className="w-full px-3 py-2 border border-gray-300" placeholder="Il tuo messaggio"></textarea>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white">Invia</button>
            </form>
        </div>
    );
}
