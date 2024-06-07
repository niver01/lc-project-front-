import { CardArticle, CardArticleSkeleton } from "../components/CardArticle";
import { Banner } from "../components/Banner";
import { Button, ButtonVariant } from "../components/Button";
import { CardPreciItem, CardPreciVariant, CardPreci } from "../components/CardPrice";
import { CardServiceItem, CardService } from "../components/CardService";
import { Items, Tabs } from "../components/Tabs";
import { DefaultLayout } from "../layout/DefaultLayout";
import { useState, useEffect } from "react";
import { Article, blogApi } from "../api";


const itemsTab:Items[] = [
    {
      selected: true,
      header: {
        title: 'Que hacemos?1'
      },
      content: {
        title: 'Que hacemos?1',
        image: 'https://fakeimg.pl/500x500',
        texts: [
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.',
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.',
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.'
        ]
      }
    },
    {
      selected: false,
      header: {
        title: 'Que hacemos?2'
      },
      content: {
        title: 'Que hacemos?2',
        image: 'https://fakeimg.pl/500x500',
        texts: [
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.',
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.',
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.'
        ]
      }
    },
    {
      selected: false,
      header: {
        title: 'Que hacemos?3'
      },
      content: {
        title: 'Que hacemos?3',
        image: 'https://fakeimg.pl/500x500',
        texts: [
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.',
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.',
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.'
        ]
      }
    },
  ]
  
  
  const plans: CardPreciItem[] = [
    {
      variant: CardPreciVariant.black,
      plan: 'Basic',
      price: '$100',
      benefits: [
        'Unlimited access to all classes',
        'Downloadable resources',
        'Exclusive membership in our community support group'
      ],
      btnVariant:ButtonVariant.White
    },
    {
      variant: CardPreciVariant.primary,
      plan: 'Premium',
      price: '$100',
      benefits: [
        'Unlimited access to all classes',
        'Downloadable resources',
        'Exclusive membership in our community support group'
      ],
      btnVariant:ButtonVariant.Black
    },
    {
      variant: CardPreciVariant.black,
      plan: 'Enterprise',
      price: '$100',
      benefits: [
        'Unlimited access to all classes',
        'Downloadable resources',
        'Exclusive membership in our community support group'
      ],
      btnVariant:ButtonVariant.White
    }
  ]
  
  const services: CardServiceItem[] = [
    {
      title: 'Lorem, ipsum.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corrupti!',
      class: {
        borderColor: 'border-b-blue-600',
        textColor: 'text-b-blue-600'
      },
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum quidem deleniti pariatur accusamus deserunt, odio corporis, mollitia consectetur ut ea reiciendis aut, eum minima voluptate porro. Consequatur, maxime.'
    },
    {
      title: 'Lorem, ipsum.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corrupti!',
      class: {
        borderColor: 'border-b-purple-600',
        textColor: 'text-b-purple-600'
      },
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum quidem deleniti pariatur accusamus deserunt, odio corporis, mollitia consectetur ut ea reiciendis aut, eum minima voluptate porro. Consequatur, maxime.'
    },
    {
      title: 'Lorem, ipsum.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corrupti!',
      class: {
        borderColor: 'border-b-red-600',
        textColor: 'text-b-red-600'
      },
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum quidem deleniti pariatur accusamus deserunt, odio corporis, mollitia consectetur ut ea reiciendis aut, eum minima voluptate porro. Consequatur, maxime.'
    },
    {
      title: 'Lorem, ipsum.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corrupti!',
      class: {
        borderColor: 'border-b-sky-600',
        textColor: 'text-b-sky-600'
      },
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum quidem deleniti pariatur accusamus deserunt, odio corporis, mollitia consectetur ut ea reiciendis aut, eum minima voluptate porro. Consequatur, maxime.'
    },
    {
      title: 'Lorem, ipsum.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corrupti!',
      class: {
        borderColor: 'border-b-orange-600',
        textColor: 'text-b-orange-600'
      },
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum quidem deleniti pariatur accusamus deserunt, odio corporis, mollitia consectetur ut ea reiciendis aut, eum minima voluptate porro. Consequatur, maxime.'
    },
    {
      title: 'Lorem, ipsum.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corrupti!',
      class: {
        borderColor: 'border-b-cyan-600',
        textColor: 'text-b-cyan-600'
      },
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum quidem deleniti pariatur accusamus deserunt, odio corporis, mollitia consectetur ut ea reiciendis aut, eum minima voluptate porro. Consequatur, maxime.'
    },
  ]

export function Home() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    blogApi.findAll().then(res => {
      setArticles(res.result)
    })
  })
  
  return <DefaultLayout>
     <Banner />
      
      <div className="content m-auto my-20">
        <Tabs items={itemsTab}/>
      </div>


      <div className="gradient py-20">
        <div className="content m-auto text-gray-100">
          <div className="text-center">
            <h3 className='text-white text-4xl font-bold'>Nuestro proceso de diseño y desarrollo Web</h3>
            <p className='my-12 max-w-[60em] w-[100%] m-auto'>
              Lorem ipsum dolor sit amet consectetur. A aliquam hac tortor massa hendrerit vitae. Odio volutpat sit tincidunt mauris proin sed sed quisque. Varius tellus sed habitant eget velit in et cras. Porttitor amet ornare ut sed augue ut. 
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1,2,3,4,5,6,7,8].map((v) => 
              <div key={v} className='border border-tundora p-6 rounded-xl flex flex-col gap-4'>
                <span className='bg-color-primary w-16 h-16 rounded-xl flex items-center justify-center text-black text-2xl'>
                  <strong>{v}</strong>
                </span>
                <h4 className='text-2xl font-extrabold'>Lorem, ipsum</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus unde amet.</p>
              </div> 
            )}
          </div>
        </div>
      </div>

      <div id="service" className="py-20 bg-alabasters">
        <div className="content m-auto grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-16 items-center">
          <div className="text-center lg:text-left">
            <h3 className='text-5xl font-extrabold'>Nuestros servicios profesionales</h3>
            <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos quisquam eius quas nostrum suscipit praesentium, magnam enim non ea ab architecto.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((v, index) => <CardService key={index} value={v} />)}
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="py-20 bg-mine-shaft2">
        <div className="content m-auto ">
          <div className="text-center text-alabasters">
            <h3 className='text-white text-4xl font-bold'>Nuestros precios</h3>
            <p className='my-12 max-w-[60em] w-[100%] m-auto'>
              Lorem ipsum dolor sit amet consectetur. A aliquam hac tortor massa hendrerit vitae. Odio volutpat sit tincidunt mauris proin sed sed quisque. Varius tellus sed habitant eget velit in et cras. Porttitor amet ornare ut sed augue ut. 
            </p>
          </div>

          <div className="grid grid-col-1 lg:grid-cols-3 justify-center flex-wrap gap-8">
            {plans.map((v, index) => <CardPreci key={index} value={v} />)}
          </div>
        </div>
      </div>

      {/* ARTICLES */}
      <div className="py-20 bg-white">
        <div className="content m-auto ">
          <div className="text-center">
            <h3 className='text-4xl font-bold'>Artículos de interés</h3>
            <p className='my-12 max-w-[60em] w-[100%] m-auto'>
              Lorem ipsum dolor sit amet consectetur. A aliquam hac tortor massa hendrerit vitae. Odio volutpat sit tincidunt mauris proin sed sed quisque. Varius tellus sed habitant eget velit in et cras. Porttitor amet ornare ut sed augue ut. 
            </p>
          </div>

          <div className="grid grid-col-1 lg:grid-cols-3 justify-center flex-wrap gap-8">
            {articles.length > 0 ? 
              articles.map((value) => 
                <CardArticle key={value.id} value={{
                  image: value.mainImageUrl,
                  date: value.publishedDate,
                  title: value.title,
                  id: String(value.id),
                  views: String(value.views)
                }} />
              ) : 
              <>
                <CardArticleSkeleton />
                <CardArticleSkeleton />
                <CardArticleSkeleton />
              </>
            }
          </div>
        </div>
      </div>

    <div className="bg-color-secundary py-20">
      <div className="content flex items-center justify-center m-auto">
        <div className="bg-color-primary text-color-secundary p-8 rounded-3xl shadow-lg max-w-[40em] w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Request A Quote For Your Web Design Project
          </h1>
          <p className="text-center mb-8">
            Tell us about your goals and let our experts give you a custom proposal.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-2" htmlFor="name">
                Name*
              </label>
              <input
                className="w-full px-4 py-2 rounded-full bg-color-secundary text-white border border-color-secundary focus:outline-none focus:ring-2 focus:ring-color-primary"
                type="text"
                id="name"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2" htmlFor="company">
                Company Name*
              </label>
              <input
                className="w-full px-4 py-2 rounded-full bg-color-secundary text-white border border-color-secundary focus:outline-none focus:ring-2 focus:ring-color-primary"
                type="text"
                id="company"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2" htmlFor="email">
                Email*
              </label>
              <input
                className="w-full px-4 py-2 rounded-full bg-color-secundary text-white border border-color-secundary focus:outline-none focus:ring-2 focus:ring-color-primary"
                type="email"
                id="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2" htmlFor="phone">
                Phone*
              </label>
              <input
                className="w-full px-4 py-2 rounded-full bg-color-secundary text-white border border-color-secundary focus:outline-none focus:ring-2 focus:ring-color-primary"
                type="tel"
                id="phone"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2" htmlFor="message">
                Your Message*
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-3xl bg-color-secundary text-white border border-color-secundary focus:outline-none focus:ring-2 focus:ring-color-primary"
                id="message"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <Button>
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </DefaultLayout>;
};