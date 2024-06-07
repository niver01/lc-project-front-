import { useState } from "react";
import { TabItem } from "./TabItem";

export interface Items {
    selected: boolean,
    header: {
        title: string
    },
    content: {
        title: string,
        image: string,
        texts: string[]
    }
}

interface TabsProps {
    items: Items[]
}

export function Tabs({ items }: TabsProps): JSX.Element {
    const [list, setList] = useState(items);

    function onSelected(index: number) {
        const newList = list.map((v, i) => {
            if(i === index) {
                v.selected = true;
                return v;
            }

            v.selected = false;
            return v
        });

        setList(newList)
    }

    return <>
     <div>
        <div style={{
            gridTemplateColumns: `repeat(${list.length}, minmax(0, 1fr))`
        }} className={`rounded-lg overflow-hidden grid bg-alabasters border border-mercury`}>
            { list.map((item, index) => 
                <TabItem key={index} active={item.selected} onSelected={() => onSelected(index)}>{ item.header.title }</TabItem>
            )}
        </div>

        <div  className="bg-alabasters border border-mercury p-8 rounded-3xl mt-4">
        { list.map((item, index) => 
           <div key={index} className={`transition-all ${item.selected ? 'visible opacity-100 grid' : 'invisible opacity-0 hidden'} grid-cols-1 lg:grid-cols-[30em_1fr]  gap-8 items-center justify-between`}>
                <figure className='overflow-hidden rounded-3xl w-full h-[30em] '>
                    <img className="object-cover w-full h-full" src={ item.content.image } alt='' />
                </figure>
                <article>
                    <h3 className='text-4xl mb-4 roboto font-extrabold'><strong>{ item.content.title }</strong></h3>

                    { item.content.texts.map((text, i) => 
                        <p key={i} className="mb-4 last:mb-0">
                            { text }
                        </p>
                    )}
                </article>
           </div>
        ) }
        </div>

      </div>
    </>
}