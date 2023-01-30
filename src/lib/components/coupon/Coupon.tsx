import { ICouponProps } from "../../types";
import Heading from "../typography/Heading";

const Coupon = ({ color, discount, code }: ICouponProps) => {
  return (
    <div
      className='!w-80 h-32 flex-shrink-0 scroll-m-6 snap-start relative rounded-lg'
      style={{ backgroundColor: `${color}` }}>
      <div className='absolute left-0 -translate-x-8 translate-y-[50%] h-16 w-16 rounded-full bg-base '></div>
      <div className='absolute right-0 translate-x-8 translate-y-[50%] h-16 w-16 rounded-full bg-base '></div>
      <div className='h-full px-12 pt-5 pb-4 flex flex-col justify-between'>
        <Heading type='2' className='font-semibold text-white'>
          {discount}% OFF
        </Heading>
        <div className=' pt-3 flex justify-between items-center h-10 '>
          <div className=' text-sm text-base leading-[15.5px] w-16 h-max '>
            <p className='font-light'>
              Code: <span className='font-semibold'>{code}</span>
            </p>
          </div>
          <button className='h-6 w-20 bg-black text-xs text-base rounded-sm'>
            Copy Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
