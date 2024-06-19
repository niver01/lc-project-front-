import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface CardServiceItem {
  id: string;
  title: string;
  text: string;
  content: string;
  class: {
    borderColor: string;
    textColor: string;
  };
}

interface CardServiceProps {
  value: CardServiceItem;
}

export function CardService({ value }: CardServiceProps): JSX.Element {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (selectedId == null) {
      document.body.style.overflowY = 'auto';
      return;
    }

    document.body.style.overflow = 'hidden';
  }, [selectedId]);

  return (
    <>
      <div>
        <motion.div
          layoutId={value.id}
          onClick={() => setSelectedId(value.id)}
          className={`bg-white cursor-pointer rounded-xl px-6 pt-6 pb-8 border-b-4 ${value.class.borderColor} w-fit`}
        >
          <h4 className={`text-2xl font-bold ${value.class.textColor}`}>
            {value.title}
          </h4>
          <p className="mt-4">{value.text}</p>
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ backdropFilter: 'opacity(0%)' }}
              animate={{ backdropFilter: 'opacity(60%)' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              onClick={() => setSelectedId(null)}
              className={`fixed left-0 top-0 bg-black/60 z-50 w-full h-full flex justify-center items-center`}
            >
              <motion.div
                layoutId={selectedId}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={` max-w-[50em] w-[90%]  bg-white cursor-pointer rounded-xl pt-0 p-12 border-b-4 ${value.class.borderColor} w-fit`}
                >
                  <div className="flex justify-end">
                    <div
                      className="w-8 py-6"
                      onClick={() => setSelectedId(null)}
                    >
                      <XMarkIcon />
                    </div>
                  </div>
                  <h4
                    className={`text-2xl font-bold ${value.class.textColor} border-b-2 ${value.class.borderColor} `}
                  >
                    {value.title}
                  </h4>
                  <p className="mt-4">{value.content}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
