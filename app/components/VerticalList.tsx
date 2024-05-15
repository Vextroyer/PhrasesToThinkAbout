'use client'
import { useState } from "react"
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

/** Quizas este componente se pueda escribir de una manera mas general. Para que se pueda usar en otros entornos. */
export default function VerticalList(props: { title: string, items: string[] }) {
  const itemClass = "text-center bg-gray-200 px-2 py-1 border shadow-sm shadow-lime-700"
  const [show, setShow] = useState(true);

  function ToogleShow() {
    setShow(!show)
  }

  return (
    <div className="md:w-1/2 mx-auto mt-6 bg-gray-300 border-2 border-black  shadow-md shadow-gray-950 rounded-lg">
      <div className="m-4 flex flex-col space-y-3">
        <div className="flex flex-row justify-center gap-3">
          <h2 className="text-xl text-center font-bold ">{props.title}</h2>
          <button className="block" onClick={ToogleShow}>
            {show ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        </div>
        {show && props.items.map((value: string, index: number) => <p key={index} className={itemClass}>{value}</p>)}
      </div>
      <div className="h-2"></div>
    </div>
  )
}
