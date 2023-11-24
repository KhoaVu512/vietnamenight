import CarouselImage from '@/app/components/Elements/carousel-image';

interface Props {
  content: string
}

export default function CarouselDefault(props: Props) {
  return (
    <div>
      <div className='text-[20px] font-bold mt-4 border-b-[1px] border-[rgba(255,255,255,.2)] pb-1'>
        {props.content}
      </div>
      <CarouselImage width='280px' height='174px' />
    </div>
  );
}