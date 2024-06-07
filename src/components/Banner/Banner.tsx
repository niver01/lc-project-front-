import { Button, ButtonVariant } from "../Button"


interface BannerProps {
}

export function Banner({  }: BannerProps): JSX.Element {
    return <>
        <div className="relative w-full h-dvh">
            <img className='w-full h-full' src="https://fakeimg.pl/2200x700" alt="banner" />

            <div className="absolute left-0 top-0 w-full h-full bg-color-primary/25 z-10 flex items-center">
                <div className="content m-auto text-white">
                    <div className="w-[60%] flex flex-col gap-8">
                        <h2 className='uppercase font-extrabold text-[2.5em] lg:text-[4.5em]'>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p className='text-lg lg:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo cumque repudiandae reprehenderit et quasi?</p>
                        <Button width='w-60' variant={ButtonVariant.White}>Contacto</Button>
                    </div>
                </div>
            </div>
      </div>
    </>
}