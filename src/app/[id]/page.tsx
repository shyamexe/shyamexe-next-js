import ExternalLink from '@/components/project_link_card'
import { items } from './data'

export default function ItemPage({ params }: { params: { id: string } }) {
  const item = items.find(item => item.id === params.id)

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <>
      <div className="max-w-[900px] mx-auto items-center space-y-4 sm:space-y-0 sm:space-x-10 px-4">
        <div className="container mx-auto p-4">
          {/* <Link href="/" className="text-blue-500 hover:underline mb-4 block">
          &larr; Back to all items
        </Link> */}
          <div className="flex flex-col py-10">
            <span
              key={1}
              className="px-2 py-1 text-2xl sm:text-5xl font-medium rounded text-center  "
            >
              {item.title}
            </span>
            <span
              key={1}
              className="px-2 py-4 text-lg sm:text-xl rounded text-center  "
            >
              {item.subtitle}
            </span>
          </div>

        </div>


      </div>
      <div className="flex justify-center items-center  px-">
        <ExternalLink
          imagePath={item.img}
          title={item.tag}
          description={item.details}
          externalLink={item.link}
          buttonName="View site"
        />
      </div> 

            {/* Horizontal Divider with Padding */}
            <div className="border-t border-gray-600 my-10"></div>
      <div className="max-w-[900px] mx-auto items-center space-y-4 sm:space-y-0 sm:space-x-10  px-4">
      
      
      </div>



    </>
  )
}



