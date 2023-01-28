import Link from 'next/link';
import CardWithImage from '../Atoms/CardWithImage';

export const PortifolioPreview = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">Portifólio.</span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="align-bottom  lg:text-sm lg:max-w-md">
          Abaixo estão alguns dos meus projetos que eu mais gostei. Você pode clicar neles para ver
          mais detalhes.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
        <Link href={'/'}>
          <CardWithImage
            image="/assets/nft_l2.png"
            title="Site NFT"
            description="Site que desenvolvi em um processo de seleção de para uma vaga de Desenvolvedor."
          />
        </Link>
        <Link href={'/'}>
          <CardWithImage
            image="/assets/nft_l2.png"
            title="Aplicativo SIIEPE-Presences"
            description="Desenvolvi um aplicativo para fazer os registros de presenças da SIIEPE UFPel."
          />
        </Link>
        <Link href={'/'}>
          <CardWithImage
            image="/assets/nft_l2.png"
            title="Meu site e Blog"
            description="Desenvolvi este site com Blog. Aqui escrevo e compartilho coisas que considero interessante."
          />
        </Link>
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex dark:text-green-300 items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Ver todos
          <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
