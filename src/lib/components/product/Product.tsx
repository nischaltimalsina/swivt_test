import { IProductCardProps } from "../../types";
import Caption from "../typography/Captions";

const Product = ({ title, discount, price, image }: IProductCardProps) => {

  // Reduced Price Calculation
  const reducedprice = price - (discount / 100) * price;
  
  return (
    <div className='h-[372px] w-[252px] flex-shrink-0 bg-white box-shadow rounded-lg'>
      <div className='relative  w-full h-[203px] rounded-lg'>
        <img src={image} className='h-full w-full image-cover' alt={title} />
        {discount !== 0 && (
          <div className=' bg-[#FCBC08] top-5 text-white text-xl px-2 py-0.5 ribbon'>
            <p>{discount}% Off</p>
          </div>
        )}
      </div>
      <div className='px-3.5 py-4 h-[169px]'>
        <Caption
          size='base'
          fontWeight='light'
          color='secondary'
          className=' h-12'>
          {title}
        </Caption>
        <div className='flex justify-between h-max py-3.5'>
          <div className=''>
            <Caption size='lg' color='secondary' fontWeight='semibold'>
              Rs. {reducedprice}.00
            </Caption>
            <p className='text-[14px] text-[#CCCCCC] font-light line-through'>
              Rs. {price}.00
            </p>
          </div>
          <button className='h-[43px] w-[107px]  border border-[#FCBC08] text-[#FCBC08] rounded-md uppercase font-semibold '>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
