import { ReactNode } from 'react';
import { Button } from '../Button';
import LogoLc from '../../assets/logo/lc-logo-text-left-black.png';
import LogoLcBlack from '../../assets/logo/lc-logo-black.png';
import { Link } from 'react-router-dom';
import { PhoneIcon } from "@heroicons/react/24/outline";
import './Header.css'
import { useToggle } from 'react-use';

interface NavLinkProps {
    children: ReactNode;
    href: string
}

interface ButtonToggleProps {
    toggle: boolean,
    setToggle: () => void
}

function ButtonToggle({ toggle, setToggle }: ButtonToggleProps): JSX.Element {
    return <>
        <div onClick={setToggle} className="relative w-[3em] h-[2.4em] flex flex-col justify-between items-center">
            <div className={`absolute rounded-full toggle-bar w-full h-[3px] bg-black ${toggle ? 'left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-45' : 'left-0 top-0'}`}></div>
            <div className={`absolute rounded-full toggle-bar w-full h-[3px] bg-black left-1/2 top-1/2 -translate-y-1/2 ${toggle ? 'left-full opacity-0' : '-translate-x-1/2 opacity-100'}`}></div>
            <div className={`absolute rounded-full toggle-bar w-full h-[3px] bg-black ${toggle ? 'left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45' : 'left-0 bottom-0'}`}></div>
        </div>
    </>
}

function NavLink({ children, href }: NavLinkProps): JSX.Element {
    return <>
        <Link to={href} className="transition-all px-3 py-2 relative after:absolute after:transition-all after:delay-200 after:w-0 after:h-[1px] after:bg-black after:left-0 after:top-full hover:after:hover:w-full">
            { children }
        </Link>
    </>
}

function Nav():JSX.Element {
    return <>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/'>¿Qué hacemos?</NavLink>
        <NavLink href='/'>Procesos</NavLink>
        <NavLink href='/'>Servicios</NavLink>
        <NavLink href='/'>Plane</NavLink>
        <NavLink href='/'>Art&iacute;culos</NavLink>
    </>
}

export function Header(): JSX.Element {
    const [toggle, setToggle] = useToggle(false);

    return <>
        <div className="bg-black text-white">
            <div className="content m-auto py-1 flex items-center gap-2 justify-end   ">
                <div className="w-4">
                    <PhoneIcon />
                </div>
                <span>+51 945865354</span>
            </div>
        </div>
        <header className='sticky top-0 z-50 bg-color-primary py-4'>
            <div className="content m-auto grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_2fr_1fr] gap-4 items-center">
                <figure className='w-40'>
                    <img className='w-full' src={LogoLc} alt="" />
                </figure>
                <nav className='hidden lg:flex items-center justify-around gap-1'>
                    <Nav />
                </nav>
                <div className="hidden lg:flex justify-end">
                    <Button>
                        Contacto
                    </Button>
                </div>
                <div className="block lg:hidden">
                    <ButtonToggle toggle={toggle} setToggle={setToggle} />
                </div>
            </div>

        </header>

        <div className={`fixed left-0 top-0 z-50 bg-color-primary header ${toggle ? 'header-active ' : ''} `}>
            <div className="content py-8 h-full m-auto grid grid-rows-[auto_auto_1fr_auto]  gap-8">
                <div className="flex justify-end">
                    <ButtonToggle toggle={toggle} setToggle={setToggle} />
                </div>

                <figure className='w-[30%] m-auto'>
                    <img className='w-full' src={LogoLcBlack} alt="" />
                </figure>
                <nav className='flex items-center flex-col gap-4'>
                    <Nav />
                </nav>
                <div className="flex justify-center">
                    <Button>
                        Contacto
                    </Button>
                </div>
            </div>
        </div>
    </>
}