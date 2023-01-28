import Image from 'next/image';

interface CardWithImageProps {
  image: string;
  title: string;
  description: string;
}

export default function CardWithImage({ image, title, description }: CardWithImageProps) {
  return (
    <>
      <div
        className="
      flex-col
      rounded-lg
      shadow-lg
      relative
      p-5
      border-[1px]
      border-gray-300
      w-auto
      transition duration-200 transform hover:-translate-y-2 Z
      "
      >
        {/* <a href="#!">
            <img className="rounded-t-lg" alt="" />
          </a> */}

        <Image
          className="rounded-lg border-[3px]
          border-green-300"
          src={image}
          width={500}
          height={580}
          objectFit="cover"
        />

        <div>
          <h3 className="font-bold text-gray-700 dark:text-green-300 text-left pr-3 text-base border-b-[1px] pb-1 border-gray-300">
            {title}
          </h3>

          <p className="pt-3 dark:text-gray-400 text-gray-500">
            {description}
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
