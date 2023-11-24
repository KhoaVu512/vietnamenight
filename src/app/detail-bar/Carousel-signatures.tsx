import CarouselSignaturesItem from '@/app/components/Elements/carousel-image-signatures';

interface Props {
  container: string
}

export default function CarouselSignatures(props: Props) {
  return (
    <div>
      <div className='text-[20px] font-bold mt-4 border-b-[1px] border-[rgba(255,255,255,.2)] pb-1'>
        {props.container}
      </div>
      <CarouselSignaturesItem/>
    </div>
  );
}