import Image from './Image'

export type Items = {
  image: string
  name: string
  description: string
  url: string
}[]

type ItemGridProps = {
  items: Items
}

const ItemGrid = (props: ItemGridProps) => {
  const { items } = props

  return (
    <div className='mb-9 grid grid-cols-1 gap-4 sm:grid-cols-4'>
      {items.map((item) => (
        <div
          key={item.name}
          className='flex gap-6 rounded-lg border border-accent-2 p-4 sm:flex-col sm:gap-3'
        >
          <Image
            src={item.image}
            width={256}
            height={256}
            alt={item.name}
            className='m-0 h-24 w-24 sm:h-full sm:w-full'
          />
          <div className='flex flex-col justify-center gap-2'>
            <span>
              <a href={item.url} color='white' className='font-extrabold'>
                {item.name}
              </a>
            </span>
            <div>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemGrid
