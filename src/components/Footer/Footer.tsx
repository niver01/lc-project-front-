import { MapPinIcon, EnvelopeIcon, PhoneIcon, PlusIcon } from "@heroicons/react/24/outline";
import LogoLc from '../../assets/logo/lc-logo-black.png';
import linkedin from '../../assets/icons/icons8-linkedin.svg';
import whatsapp from '../../assets/icons/icons8-whatsapp.svg';
import { useToggle } from "react-use";

export function Footer(): JSX.Element {
    const [toggle, setToggle] = useToggle(false);

    return <>
        <div className="py-20 bg-black">
            <div className="content m-auto text-alabasters grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex gap-2 flex-col">
                <figure>
                    <img className="w-20" src={LogoLc} alt="logo LC" />
                </figure>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore maxime nostrum dolore sed reiciendis, molestias suscipit optio nobis corporis veniam.
                </p>
            </div>

            <div>
                <h4 className='mb-4 text-xl font-extrabold'>Offices</h4>
                <ul className='flex flex-col gap-4'>
                <li className='grid grid-cols-[2em_1fr] items-center gap-2'>
                    <div>
                    <MapPinIcon/>
                    </div>
                    Lorem ipsum dolor sit.
                </li>
                <li className='grid grid-cols-[2em_1fr] items-center gap-2'>
                    <div>
                    <EnvelopeIcon/>
                    </div>
                    contact@dominio.com
                </li>
                <li className='grid grid-cols-[2em_1fr] items-center gap-2'>
                    <div>
                    <PhoneIcon/>
                    </div>
                    Lorem ipsum dolor sit.
                </li>
                </ul>
            </div>

            <div>
                <h4 className='mb-4 text-xl font-extrabold'>More</h4>
                <ul className='flex flex-col gap-4'>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>

            <div>
                <h4 className='mb-4 text-xl font-extrabold'>Service</h4>
                <ul className='flex flex-col gap-4'>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="py-2 bg-mine-shaft2 text-alabasters ">
            <div className="content m-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className='text-center lg:text-left'>
                <span>© Todos los derechos reservados.</span>
                </div>
                <div className='flex justify-center lg:justify-end gap-4'>
                <a href="">Términos y condiciones</a>
                <a href="">Cookies</a>
                <a href="">Créditos</a>
                </div>
            </div>
        </div>


        <div className="fixed right-14 bottom-10 z-50 text-white flex flex-col gap-4">
            <div className={`flex transition-all ${toggle ? 'opacity-100' : 'opacity-0'} flex-col items-center justify-center gap-4`}>
                <div onClick={setToggle} className="w-[2.5em] h-[2.5em] rounded-full bg-vulcan text-white p-2 cursor-pointer shadow-lg">
                    <img src={whatsapp} alt="whatsapp" />
                </div>
                <div onClick={setToggle} className="w-[2.5em] h-[2.5em] rounded-full bg-vulcan text-white p-2 cursor-pointer shadow-lg">
                    <img src={linkedin} alt="linkedin" />
                </div>
            </div>
            <div onClick={setToggle} className={`w-[3em] transition-all ${toggle ? 'rotate-45' : 'rotate-0'} rounded-full bg-vulcan text-white p-2 cursor-pointer shadow-lg`}>
                <PlusIcon />
            </div>
        </div>
    </>
}