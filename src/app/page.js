"use client"

import { useState } from "react";

export default function Home() {
  const [contador, setContador] = useState();

  function handleInput(evento) {
    setContador(evento.target.value);
  }

  function diminuir() {
    setContador(contador-1);
  }

  function aumentar() {
    setContador(contador+1);
  }

  return (
    <main className="w-screen h-screen bg-sky-100 flex">
      <div className="w-[200px] h-[200px] bg-white m-auto flex flex-col">
        <input id="" type="text" className="border" value={contador} onChange={handleInput} />
        <div className="flex place-content-around my-auto">
          <button onClick={diminuir} className="rounded-md bg-cyan-300 py-2 px-4">-</button>
          <button onClick={aumentar} className="rounded-md bg-cyan-300 py-2 px-4">+</button>
        </div>
      </div>
    </main>
  )
}
