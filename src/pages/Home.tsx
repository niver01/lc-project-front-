import { CardArticle, CardArticleSkeleton } from '../components/CardArticle';
import { Banner } from '../components/Banner';
import { Button, ButtonVariant } from '../components/Button';
import {
  CardPreciItem,
  CardPreciVariant,
  CardPreci,
} from '../components/CardPrice';
import { CardServiceItem, CardService } from '../components/CardService';
import { Items, Tabs } from '../components/Tabs';
import { DefaultLayout } from '../layout/DefaultLayout';
import React, { useState, useEffect } from 'react';
import { Article, blogApi } from '../api';
import { Element } from 'react-scroll';
import { Header } from '../components/Header';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const itemsTab: Items[] = [
  {
    selected: true,
    header: {
      title: '¿Qué hacemos?',
    },
    content: {
      title: '¿Qué hacemos?',
      image: 'https://fakeimg.pl/500x500',
      texts: [
        'Somos una empresa proveedora de servicios de TI y Outsourcing de Recursos Humanos fundada en 2011, como una iniciativa para ofrecer el outsourcing de servicios de TI. Desde entonces, hemos ampliado nuestros servicios a una variedad de líneas de negocio Hemos desarrollado TDIPLAN, una solución para gestionar el proceso de nóminas de personal, con un nivel de diseño y parametrización que puede adaptarse a cualquier régimen laboral en Perú, configurable para las diversas modalidades que se requieran. Así tenemos despliegues para Régimen General (DL 728, MYPES), Régimen Agrario, Construcción Civil, entre otras.',
        'En entornos integrados se han hecho interfases de integración con ERP como SAP, Navision y Dynamics (Microsoft), Starsoft, Odoo, etc. para asientos contables é información de costos de mano de obra',
        'Tenemos soluciones desarrolladas para la Gestión de Almacenes de Proyectos y Obras de Construcción Civil',
        'Actualmente brindamos servicios de otsourcing de planillas, en las que abarcamos todo el proceso desde el registro de la información (altas de personal, tareos,etc) hasta la entrega de los informes finales, y el cierre de la planilla electrónica, afp, etc.',
        'Finalmente estamos incursionando en el servicio de desarrollo de aplicaciones y software a medida para empresas de diferentes rubros de la actividad económica. La experiencia y capacidad de nuestro equipo de desarrolladores nos da la confianza y seguridad de brindarles soluciones robustas y estables a nuestros clientes.',
      ],
    },
  },
  {
    selected: false,
    header: {
      title: 'Que hacemos?2',
    },
    content: {
      title: 'Que hacemos?2',
      image: 'https://fakeimg.pl/500x500',
      texts: [
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.',
      ],
    },
  },
  {
    selected: false,
    header: {
      title: 'Que hacemos?3',
    },
    content: {
      title: 'Que hacemos?3',
      image: 'https://fakeimg.pl/500x500',
      texts: [
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta eum magni? Illo dicta ratione optio, quisquam suscipit quidem perferendis ullam blanditiis delectus praesentium dolorem nobis laudantium unde. Dignissimos, sequi.',
      ],
    },
  },
];

const plans: CardPreciItem[] = [
  {
    variant: CardPreciVariant.black,
    plan: 'Basic',
    price: '$100',
    benefits: [
      'Unlimited access to all classes',
      'Downloadable resources',
      'Exclusive membership in our community support group',
    ],
    btnVariant: ButtonVariant.White,
  },
  {
    variant: CardPreciVariant.primary,
    plan: 'Premium',
    price: '$100',
    benefits: [
      'Unlimited access to all classes',
      'Downloadable resources',
      'Exclusive membership in our community support group',
    ],
    btnVariant: ButtonVariant.Black,
  },
  {
    variant: CardPreciVariant.black,
    plan: 'Enterprise',
    price: '$100',
    benefits: [
      'Unlimited access to all classes',
      'Downloadable resources',
      'Exclusive membership in our community support group',
    ],
    btnVariant: ButtonVariant.White,
  },
];

const services: CardServiceItem[] = [
  {
    id: '1',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corrupti!',
    class: {
      borderColor: 'border-b-blue-600',
      textColor: 'text-b-blue-600',
    },
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum quidem deleniti pariatur accusamus deserunt, odio corporis, mollitia consectetur ut ea reiciendis aut, eum minima voluptate porro. Consequatur, maxime.',
  },
  {
    id: '2',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corrupti!',
    class: {
      borderColor: 'border-b-purple-600',
      textColor: 'text-b-purple-600',
    },
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum quidem deleniti pariatur accusamus deserunt, odio corporis, mollitia consectetur ut ea reiciendis aut, eum minima voluptate porro. Consequatur, maxime.',
  },
  {
    id: '3',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corrupti!',
    class: {
      borderColor: 'border-b-red-600',
      textColor: 'text-b-red-600',
    },
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum quidem deleniti pariatur accusamus deserunt, odio corporis, mollitia consectetur ut ea reiciendis aut, eum minima voluptate porro. Consequatur, maxime.',
  },
  {
    id: '4',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corrupti!',
    class: {
      borderColor: 'border-b-sky-600',
      textColor: 'text-b-sky-600',
    },
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum quidem deleniti pariatur accusamus deserunt, odio corporis, mollitia consectetur ut ea reiciendis aut, eum minima voluptate porro. Consequatur, maxime.',
  },
  {
    id: '5',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corrupti!',
    class: {
      borderColor: 'border-b-orange-600',
      textColor: 'text-b-orange-600',
    },
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum quidem deleniti pariatur accusamus deserunt, odio corporis, mollitia consectetur ut ea reiciendis aut, eum minima voluptate porro. Consequatur, maxime.',
  },
  {
    id: '6',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, corrupti!',
    class: {
      borderColor: 'border-b-cyan-600',
      textColor: 'text-b-cyan-600',
    },
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quo nostrum quidem deleniti pariatur accusamus deserunt, odio corporis, mollitia consectetur ut ea reiciendis aut, eum minima voluptate porro. Consequatur, maxime.',
  },
];

interface SectionProps {
  id: string;
  children: React.ReactElement;
  y?: number;
}

const Section = ({ children, id, y = 200 }: SectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    blogApi.findAll().then((res) => {
      setArticles(res.result);
    });
  }, []);

  return (
    <DefaultLayout>
      <Header redirect={false} />

      <Element name={'home'}>
        <Banner />
      </Element>

      <Section id="whatdo">
        <Element name={'whatdo'}>
          <div className="content overflow-hidden m-auto my-20  ">
            <Tabs items={itemsTab} />
          </div>
        </Element>
      </Section>

      <Element name={'processes'}>
        <div className="gradient py-20 ">
          <div className="content overflow-hidden m-auto text-gray-100">
            <div className="text-center">
              <h3 className="text-white text-4xl font-bold">
                Nuestro proceso de diseño y desarrollo Web
              </h3>
              <p className="my-12 max-w-[60em] w-[100%] m-auto">
                Lorem ipsum dolor sit amet consectetur. A aliquam hac tortor
                massa hendrerit vitae. Odio volutpat sit tincidunt mauris proin
                sed sed quisque. Varius tellus sed habitant eget velit in et
                cras. Porttitor amet ornare ut sed augue ut.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
                <Section key={v} id={String(v)} y={30 * (v + 1)}>
                  <div
                    key={v}
                    className="border border-tundora p-6 rounded-xl flex flex-col gap-4"
                  >
                    <span className="bg-color-primary w-16 h-16 rounded-xl flex items-center justify-center text-black text-2xl">
                      <strong>{v}</strong>
                    </span>
                    <h4 className="text-2xl font-extrabold">Lorem, ipsum</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat repellendus unde amet.
                    </p>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </div>
      </Element>

      <Element name={'service'}>
        <div className="py-20  bg-alabasters">
          <div className="content overflow-hidden m-auto grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-16 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-5xl font-extrabold">
                Nuestros servicios profesionales
              </h3>
              <p className="mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quos quisquam eius quas nostrum suscipit praesentium,
                magnam enim non ea ab architecto.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((v, index) => (
                <Section key={index} id={String(index)} y={20 * (index + 1)}>
                  <CardService key={index} value={v} />
                </Section>
              ))}
            </div>
          </div>
        </div>
      </Element>

      <Element name={'plane'}>
        <div className="py-20  bg-mine-shaft2">
          <div className="content m-auto ">
            <div className="text-center text-alabasters">
              <h3 className="text-white text-4xl font-bold">
                Nuestros precios
              </h3>
              <p className="my-12 max-w-[60em] w-[100%] m-auto">
                Lorem ipsum dolor sit amet consectetur. A aliquam hac tortor
                massa hendrerit vitae. Odio volutpat sit tincidunt mauris proin
                sed sed quisque. Varius tellus sed habitant eget velit in et
                cras. Porttitor amet ornare ut sed augue ut.
              </p>
            </div>

            <div className="grid grid-col-1 lg:grid-cols-3 justify-center flex-wrap gap-8">
              {plans.map((v, index) => (
                <Section key={v.plan} id={v.plan} y={100 * (index + 1)}>
                  <CardPreci key={index} value={v} />
                </Section>
              ))}
            </div>
          </div>
        </div>
      </Element>

      <Section id="article">
        <Element name={'article'}>
          <div className="py-20  bg-white">
            <div className="content overflow-hidden m-auto ">
              <div className="text-center">
                <h3 className="text-4xl font-bold">Artículos de interés</h3>
                <p className="my-12 max-w-[60em] w-[100%] m-auto">
                  Lorem ipsum dolor sit amet consectetur. A aliquam hac tortor
                  massa hendrerit vitae. Odio volutpat sit tincidunt mauris
                  proin sed sed quisque. Varius tellus sed habitant eget velit
                  in et cras. Porttitor amet ornare ut sed augue ut.
                </p>
              </div>

              <div className="grid grid-col-1 lg:grid-cols-3 justify-center flex-wrap gap-8">
                {articles.length > 0 ? (
                  articles.map((value) => (
                    <CardArticle
                      key={value.id}
                      value={{
                        image: value.mainImageUrl,
                        date: value.publishedDate,
                        title: value.title,
                        id: String(value.id),
                        views: String(value.views),
                      }}
                    />
                  ))
                ) : (
                  <>
                    <CardArticleSkeleton />
                    <CardArticleSkeleton />
                    <CardArticleSkeleton />
                  </>
                )}
              </div>
            </div>
          </div>
        </Element>
      </Section>

      {/* <Section id="contact">
        <Element name={'contact'}>
          <div className="bg-color-secundary py-20 ">
            <div className="content overflow-hidden flex items-center justify-center m-auto">
              <div className="bg-color-primary text-color-secundary p-8 rounded-3xl shadow-lg max-w-[40em] w-full">
                <h1 className="text-3xl font-bold mb-4 text-center">
                  Request A Quote For Your Web Design Project
                </h1>
                <p className="text-center mb-8">
                  Tell us about your goals and let our experts give you a custom
                  proposal.
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
                    <Button>Enviar</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Element>
      </Section> */}
    </DefaultLayout>
  );
}
