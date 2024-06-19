import { motion } from 'framer-motion';
import { Button, ButtonVariant } from '../Button';

export function Banner(): JSX.Element {
  const transition = {
    type: 'spring',
    stiffness: 260,
    damping: 20,
  };
  return (
    <>
      <motion.div
        className="relative w-full"
        style={{ height: 'calc(100vh - 81px)' }}
      >
        <img
          className="w-full h-full"
          src="https://fakeimg.pl/2200x700"
          alt="banner"
        />

        <div className="absolute left-0 top-0 w-full h-full bg-color-primary/25 z-10 flex items-center">
          <div className="content m-auto text-white">
            <div className="w-[60%] flex flex-col gap-8">
              <motion.h2
                initial={{ translateX: '-100%', opacity: 0 }}
                animate={{ translateX: '0', opacity: 1 }}
                transition={transition}
                className="uppercase font-extrabold text-[2.5em] lg:text-[4.5em]"
              >
                Lorem ipsum dolor sit amet consectetur.
              </motion.h2>
              <motion.p
                initial={{ translateY: '100px', opacity: 0 }}
                animate={{ translateY: '0', opacity: 1 }}
                transition={transition}
                className="text-lg lg:text-2xl"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo cumque repudiandae reprehenderit et quasi?
              </motion.p>
              <motion.div
                initial={{ scale: '0', opacity: 0 }}
                animate={{ scale: '1', opacity: 1 }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
              >
                <Button width="w-60" variant={ButtonVariant.White}>
                  Contacto
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
