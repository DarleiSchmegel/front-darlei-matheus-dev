import Button from '../Atoms/Button';
import { useNavigation } from '../contexts/NavigationContext';

export default function Contact() {
  const { handleWhichNavItemIsOpen } = useNavigation();
  handleWhichNavItemIsOpen('contact');
  // return <h1>olá</h1>
  return (
    <section className="min-h-screen pt-20 w-full max-w-[1200px] flex text-center justify-center py-6 ">
      <div className="grid w-full  grid-cols-1 p-6 rounded-lg mx-auto my-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="text-left py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Entre em contato</h1>
          <p className="pt-2 pb-8">Preencha o formulário para podermos iniciar uma conversa</p>
          <div className="space-y-6">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Camaquã - RS - Brasil</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>123456789</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>contact@business.com</span>
            </p>
          </div>
        </div>
        <form
          noValidate={true}
          className="flex flex-col py-6 pt-20 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="relative group pt-1 bg-inherit">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium  bg-transparent rounded-lg border-[2px] border-gray-400 group-hover:border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300 peer "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-xl font-medium bg-gray-100 text-gray-400 group-hover:text-green-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-700 px-2 peer-focus:text-green-300 peer-focus:dark:text-green-300 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-2"
            >
              Nome
            </label>
          </div>
          <div className="relative group pt-1 bg-inherit">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium  bg-transparent rounded-lg border-[2px] border-gray-400 group-hover:border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300 peer "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-xl font-medium bg-gray-100 text-gray-400 group-hover:text-green-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-700 px-2 peer-focus:text-green-300 peer-focus:dark:text-green-300 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-2"
            >
              E-mail
            </label>
          </div>


          <div className="relative group pt-1 bg-inherit">
            <textarea
                rows={3}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium  bg-transparent rounded-lg border-[2px] border-gray-400 group-hover:border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300 peer "
            ></textarea>
            <label
              htmlFor="floating_outlined"
              className="absolute text-xl font-medium bg-gray-100 text-gray-400 group-hover:text-green-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-700 px-2 peer-focus:text-green-300 peer-focus:dark:text-green-300 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-2"
            >
              Mensagem
            </label>
          </div>
          <Button variant='default'>Enviar</Button>
        </form>
      </div>
    </section>
  );
}
