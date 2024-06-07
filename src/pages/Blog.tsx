import { useEffect, useState } from "react";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Article, blogApi } from "../api";
import { useParams } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/outline";
import { formatDate } from "../utils/date";
import userImg from "../assets/user.jpeg"
import { Button } from "../components/Button";

export function Blog() {
  const [article, setArticle] = useState<Article | null>(null)
  const { id } = useParams();

  useEffect(() => {
    if(id == null) return;
    
    blogApi.findById(id).then(res => {
      setArticle(res.result)
    })
  }, [id])

  if(article == null) return <DefaultLayout>
    <div className="content m-auto my-8 flex flex-col gap-8  mx-auto animate-pulse">
        <div className="bg-gray-500 w-full h-[40em] rounded-2xl overflow-hidden"></div>
        <div className="flex justify-between items-end">
            <div className="bg-gray-500 rounded h-4 w-1/2"></div>
        </div>
        <div className="my-4 bg-gray-500 rounded h-8 w-10/12"></div>

        <div className="mb-4 bg-gray-500 rounded h-40 w-full"></div>
        <div className="mb-4 bg-gray-500 rounded h-20 w-full"></div>
        
        <div className="my-4 bg-gray-500 rounded h-6 w-[50%]"></div>
        <div className="mb-4 bg-gray-500 rounded h-20 w-full"></div>
        <div className="mb-4 bg-gray-500 rounded h-40 w-full"></div>
        <div className="mb-4 bg-gray-500 rounded h-20 w-full"></div>
    </div>
  </DefaultLayout>

  return <DefaultLayout>
    <div className="content m-auto my-8 flex flex-col gap-8">
      <figure className="w-full h-[40em] rounded-2xl overflow-hidden">
        <img className='w-full h-full' src={article.mainImageUrl} alt={article.title} />
      </figure>

      <div className="flex gap-4 items-center justify-between flex-col md:flex-row">
        <div className="flex gap-4 items-center">
          <div>
            <figure className="w-16 rounded-full overflow-hidden">
              <img className="w-full h-full" src={userImg} alt={article.author.firstname} />
            </figure>
          </div>
          <div className="flex gap-1 flex-col">
            <div className="">
              <span className="flex flex-col md:flex-row"> {article.author.firstname} {article.author.lastname} • <strong className="text-gray-500"> {article.author.position} </strong> </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-gray-500">Publicado el {formatDate(article.publishedDate)} </span>
              •
              <div className="flex gap-2 items-center"> 
                <div className="w-4"> <EyeIcon/> </div> {article.views}
              </div>
            </div>
          </div>
        </div>
        <Button>
          Seguir
        </Button>
      </div>

      <h1 className="text-color-secundary text-4xl font-extrabold">
        {article.title}
      </h1>

      <div dangerouslySetInnerHTML={{
        __html: article.content
      }}>
      </div>
    </div>
  </DefaultLayout>;
};
