import { ICarouselItemProps, ICarouselProps } from "../../types";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Heading from "../typography/Heading";
import Caption from "../typography/Captions";

export const Carousel = ({ children }: ICarouselProps) => {
  return (
    <div className='w-full lg:h-[526px] flex items-center gap-2'>
      <button className='h-9 w-9 bg-brown rounded-full text-white -translate-x-4'>
        <RxCaretLeft size={35} />
      </button>
      {children}
      <button className='h-9 w-9 bg-brown rounded-full text-white translate-x-4'>
        <RxCaretRight size={35} />
      </button>
    </div>
  );
};

export const CarouselItem = ({
  index,
  heading,
  title,
  description,
  src,
}: ICarouselItemProps) => {
  return (
    <>
      <div className='bg-carousel h-full  w-full rounded-xl box-shadow flex flex-col lg:flex-row items-center justify-between  p-6'>
        <div className='pb-6'>
          <Heading type='3' color='secondary' fontWeight='semibold'>
            {heading}
          </Heading>
          <Heading
            type='custom'
            className='max-w-[345px] text-7xl lg:text-[100px] lg:leading-[90px] text-[#FCBC08] font-extrabold'>
            {title}
          </Heading>
          <Caption
            size='base'
            color='secondary'
            fontWeight='medium'
            className='py-5 max-w-[460px] capitalize '>
            {description}
          </Caption>
          <button className='bg-brown h-14 w-44 text-lg font-light uppercase rounded-full text-white '>
            Add to cart
          </button>
        </div>
        <div className='relative max-w-[497px] aspect-square rounded-full p-[21px] flex items-center border-2 border-[#FCBC08]'>
          <div className='absolute w-full max-w-[475px] aspect-square border-2 border-white rounded-full right-0'></div>
          <img src={src} alt={title} />
        </div>
      </div>
    </>
  );
};
