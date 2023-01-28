export default function Timeline() {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-600">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-4">
            <div className="text-left mb-5 before:block before:w-24 before:h-[2px] before:mb-5  before:mx-0  before:bg-gray-700 before:dark:bg-green-300">
              <h3 className="text-3xl font-semibold">Sempre buscando crescer</h3>
              <span className="text-sm font-medium tracking-wider text-gray-500 dark:text-gray-400">
                Oque eu fiz de legal ao longo do tempo
              </span>
              <div className="hidden sm:block pt-5 dark:text-green-300">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  id="magicoon-Regular"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <title>arrow-right</title>
                  <g id="arrow-right-Regular">
                    <path
                      id="arrow-right-Filled-2"
                      data-name="arrow-right-Filled"
                      className="cls-1"
                      d="M21.707,12.707l-7,7a1,1,0,0,1-1.414-1.414L18.586,13H3a1,1,0,0,1,0-2H18.586L13.293,5.707a1,1,0,0,1,1.414-1.414l7,7A1,1,0,0,1,21.707,12.707Z"
                    />
                  </g>
                </svg>
              </div>
              <div className="pt-5 dark:text-green-300 sm:hidden">
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 32 32"
                  id="i-arrow-bottom"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentcolor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M6 22 L16 30 26 22 M16 30 L16 2" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-8">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700 before:dark:bg-gray-100">
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] sm:before:z-[1] before:bg-gray-700 before:dark:bg-green-300">
                <h3 className="text-xl font-semibold tracking-wide">Faculdade de Computação</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                  Março 2018
                </time>
                <p className="mt-3">
                  Foi o ano que resolvi entrar no mundo da tecnologia, consegui uma vaga para cursar
                  Engenharia de computação na UFPel - Univercidade federal de Pelotas.
                </p>
              </div>
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] sm:before:z-[1] before:bg-gray-700 before:dark:bg-green-300">
                <h3 className="text-xl font-semibold tracking-wide">
                  Primeiro contado com programação Web
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                  Julho 2018
                </time>
                <p className="mt-3">
                  Foi a primeira vez que tive contato com tencnologias usadas na atualidade. Gatilho
                  no qual eu consegui evoloir para o estágio em que eu estou agora, conseguindo
                  entregar projetos incriveis para os meus clientes.
                </p>
              </div>
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] sm:before:z-[1] before:bg-gray-700 before:dark:bg-green-300">
                <h3 className="text-xl font-semibold tracking-wide">PET Computação UFPel</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                  Junho 2019
                </time>
                <p className="mt-3">
                  Fui aprovado no processo de Seleção para PET Computação da UFPel. O Programa de
                  Educação Tutorial (PET) insere estudantes de graduação em projetos de educação
                  tutorial com o objetivo de aplicar seus conhecimentos e ampliar sua formação.
                  Trabalhando em um grupo de 12 bolsistas pude desenvolver habilidades de trabalho
                  em equipe, proatividade, comunicação, entre outras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
