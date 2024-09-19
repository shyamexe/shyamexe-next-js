import ExternalLink from '@/components/project_link_card'
import { items } from './data'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const item = items.find(item => item.id === id)

  if (!item) {
    return {
      title: 'Item Not Found',
    }
  }

  return {
    title: `${item.id} | Shyamjith.in`,
    description: item.title,
    openGraph: {
      title: item.title,
      description: item.subtitle,
      images: [{ url: item.img }],
    },
  }
}

export default function ItemPage({ params }: { params: { id: string } }) {
  const item = items.find(item => item.id === params.id)

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <>
      <div className="max-w-[900px] mx-auto items-center space-y-4 sm:space-y-0 sm:space-x-10 px-4">
        <div className="container mx-auto p-4">
          <div className="flex flex-col py-10">
            <span
              className="px-2 py-1 text-2xl sm:text-5xl font-medium rounded text-center"
            >
              {item.title}
            </span>
            <span
              className="px-2 py-4 text-lg sm:text-xl rounded text-center"
            >
              {item.subtitle}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-4">
        <ExternalLink
          imagePath={item.img}
          title={item.tag}
          description={item.details}
          externalLink={item.link}
          buttonName="View site"
        />
      </div> 
      <div className="border-t border-gray-600 my-10"></div>
      <div className="max-w-[900px] mx-auto items-center space-y-4 sm:space-y-0 sm:space-x-10 px-4">
      </div>
    </>
  )
}