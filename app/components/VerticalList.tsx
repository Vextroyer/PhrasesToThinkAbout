'use client'
import { useState } from "react"

/** Quizas este componente se pueda escribir de una manera mas general. Para que se pueda usar en otros entornos. */
export default function VerticalList(props: { title: string, items: string[] }) {
  const itemClass = "text-center bg-green-200 px-2 py-1 border shadow-md shadow-lime-700"
  const [show, setShow] = useState(true);

  function ToogleShow() {
    setShow(!show)
  }

  return (
    <div className="md:w-1/2 mx-auto mt-6 bg-green-700 border border-amber-800 shadow-md shadow-green-950 rounded-lg">
      <div className="m-4 flex flex-col space-y-3">
        <h1 className="text-xl text-center">{props.title}</h1>
        <button onClick={ToogleShow}>BUTTON</button>
        {show && props.items.map((value: string, index: number) => <p key={index} className={itemClass}>{value}</p>)}
      </div>
      <div className="h-2"></div>
    </div>
  )
}
