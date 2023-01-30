import { useState } from "react";
import { IRecipePreviewProps } from "../../types";
import Body from "../typography/Body";
import Caption from "../typography/Captions";
import Heading from "../typography/Heading";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

/*  Reusable Recipe preview  */

const RecipePreview = ({
  title,
  description,
  image,
  url="#",
}: IRecipePreviewProps) => {
  const [qty, setQty] = useState(1);
  function prev() {
    if (qty <= 1) return null;
    setQty((prev) => prev - 1);
  }
  function next() {
    setQty((next) => next + 1);
  }

  return (
    <div className=' w-full flex gap-12 items-center flex-wrap lg:flex-nowrap'>
      <div className='max-h-[518px] w-full max-w-[620px] flex-shrink-0 bg-white rounded-3xl mx-auto lg:mx-0 box-shadow'>
        <img className='' src={image} alt={title} />
      </div>
      <div className='w-full max-w-[620px] mx-auto lg:mx-0'>
        <Heading type='5' className='max-w-sm mb-14'>
          {title}
        </Heading>
        <Caption
          size='lg'
          fontWeight='semibold'
          color='secondary'
          className='pb-2'>
          Recipe
        </Caption>
        <Body
          size='base'
          color='secondary'
          fontWeight='light'
          className='capitalize'>
          {description}
        </Body>
        <div className='w-full pt-8 flex items-center justify-between gap-3'>
          <a
            href={url}
            className='bg-[#FCBC08] h-[57px] w-[242px] text-lg flex items-center justify-center text-white font-light rounded-lg box-shadow '>
            Read Completely
          </a>
          <div className='w-auto flex flex-wrap justify-end items-center gap-3'>
            <p className='text-base text-black '>Quantity</p>
            <div className='flex gap-3 justify-end items-center'>
              <button
                onClick={prev}
                className='h-6 w-6 text-brown flex items-center justify-center rounded-full border border-brown'>
                <AiOutlineMinus />
              </button>
              <p className='text-3xl font-semibold'>{qty}</p>
              <button
                onClick={next}
                className='h-6 w-6 text-white flex items-center justify-center rounded-full bg-brown'>
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePreview;
