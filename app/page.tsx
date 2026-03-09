'use client'

import { Profiler } from "react"
import Image from "next/image"

function onRender(
  id: string,
  phase: "mount" | "update" | "nested-update",
  actualDuration: number
) {
  console.log(`${id} demorou ${actualDuration}ms`)
}

function Profile() {
  return (
    <div>
      <Image
        src="/image.jpg"
        width={190}
        height={190}
        alt="Foto de perfil"
      />
      <h2 className="py-2 px-8">Dandália Teixeira</h2>
      <p className="py-2 leading-normal max-w-xl text-left">Profissional em desenvolvimento, com foco em aprendizado contínuo, organização e resolução de problemas. Atualmente dedica-se ao estudo de desenvolvimento web, utilizando tecnologias como React e Next.js. Valoriza ambientes colaborativos, responsabilidade nas entregas e oportunidades que incentivem crescimento e inovação.
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-5 px-48 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className=" font-semibold leading-12 tracking-tight text-black dark:text-zinc-50">
            Site criado para a disciplina Programação Front-End
          </h1>
          <Profiler id="Profile" onRender={onRender} >
            <div className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-2 px-20 bg-white dark:bg-black sm:items-start">
              <Profile/>
            </div>
          </Profiler>
        </div>
      </main>
    </div>
  )
}