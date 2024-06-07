import { useToggle } from "react-use"
import { XMarkIcon } from "@heroicons/react/24/outline";

export interface CardServiceItem {
  title:string,
  text: string,
  content: string,
  class: {
    borderColor: string,
    textColor: string
  }
}

interface CardServiceProps {
  value: CardServiceItem
}


export function CardService({ value } : CardServiceProps): JSX.Element {
    const [toggle, setToggle] =  useToggle(false)

    return <>
        <div>
            <div onClick={setToggle} className={`bg-white cursor-pointer rounded-xl px-6 pt-6 pb-8 border-b-4 ${value.class.borderColor} w-fit`}>
                <h4 className={`text-2xl font-bold ${value.class.textColor}`}>
                    { value.title }
                </h4>
                <p className='mt-4'>
                    { value.text }
                </p>
            </div>
            <div  onClick={setToggle} className={`fixed left-0 top-0 transition-all ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible'} bg-black/60 z-50 w-full h-full flex justify-center items-center`}>
              <div  className={`transition-all max-w-[50em] w-[90%] ${toggle ? 'scale-100' : 'scale-0'} bg-white cursor-pointer rounded-xl pt-0 p-12 border-b-4 ${value.class.borderColor} w-fit`}>
                  <div className="flex justify-end">
                    <div className="w-8 py-6">
                        <XMarkIcon/>
                    </div>
                  </div>
                  <h4 className={`text-2xl font-bold ${value.class.textColor} border-b-2 ${value.class.borderColor} `}>
                      { value.title }
                  </h4>
                  <p className='mt-4'>
                      { value.content }
                  </p>
              </div>
            </div>
        </div>
    </>
}