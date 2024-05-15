'use client'
import { SubmitHandler, useForm } from "react-hook-form"

type Input = {
    prompt: string
}

export default function Home() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Input>()
      const onSubmit: SubmitHandler<Input> = (data) => console.log(data)


    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="container mx-auto max-w-md space-y-6 px-4">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900">Phrase Generator</h1>
                        <p className="mt-2 text-gray-500">Generate unique phrases based on your input</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none" htmlFor="phrase">Enter a phrase</label>
                                <input {...register("prompt",{required: true})} className="flex h-10 rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full" id="phrase" placeholder="Type your phrase here..."></input>
                                {errors.prompt && <p className="mt-4">This field is required</p>}
                            </div>
                            <button className="w-full h-10 px-4 py-2 text-white bg-black rounded-md hover:opacity-90">
                                Generate
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}