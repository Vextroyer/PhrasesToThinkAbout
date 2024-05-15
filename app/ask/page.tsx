export default function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="container mx-auto max-w-md space-y-6 px-4">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900">Phrase Generator</h1>
                        <p className="mt-2 text-gray-500">Generate unique phrases based on your input</p>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="phrase">Enter a phrase</label>
                            <input className="flex h-10 rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full" id="phrase" placeholder="Type your phrase here..."></input>
                        </div>
                        <button className="w-full h-10 px-4 py-2 text-white bg-black rounded-md hover:opacity-90">
                            Generate
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}