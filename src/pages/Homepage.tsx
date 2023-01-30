import { Carousel, CarouselItem } from "../lib/components/carousel/Carousel";
import Catalogue from "../lib/components/catalogue/Catalogue";
import Coupon from "../lib/components/coupon/Coupon";
import Heading from "../lib/components/typography/Heading";
import { catalogue } from "../lib/utils/catalogueitems";
import { coupons } from "../lib/utils/couponcodes";
import { divider, food, video } from "../assets/images";
import Deals from "../lib/components/deals/Deals";
import { deals } from "../lib/utils/bestdeals";
import { foods } from "../lib/utils/popularfoods";
import Product from "../lib/components/product/Product";
import { breakfast } from "../lib/utils/breakfastitems";
import { drinks } from "../lib/utils/drinks";
import RecipePreview from "../lib/components/recipe/RecipePreview";
import { recipe } from "../lib/utils/recipe";
import Body from "../lib/components/typography/Body";

const Homepage = () => {
  return (
    <>
      <div className='max-w-[1440px] px-10 lg:px-24 mx-auto'>
        {/* Header Image Section */}

        <div className='py-12'>
          <div className='h-[268px] w-full rounded-lg overflow-hidden bg-neutral-500'>
            <img
              className='h-full  w-full object-cover'
              src='https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
              alt=''
            />
          </div>
        </div>

        {/* Coupon Code Section */}

        <div className=''>
          <Heading type='4' className='text-[35px] py-9'>
            Coupon Code
          </Heading>
          <div className=' w-full flex gap-6 items-center overflow-x-scroll no-scrollbar snap-x'>
            {coupons.map((item, index) => (
              <Coupon
                key={index}
                color={item.color}
                discount={item.discount}
                code={item.code}
              />
            ))}
          </div>
        </div>

        {/* Catalogue Section Delicacies */}

        <div className='py-[107px]'>
          <Heading type='4' className='w-64 text-[35px] py-9'>
            Catalogue section delicacies
          </Heading>
          <div className='flex flex-wrap gap-1 justify-between lg:justify-start mx-auto'>
            {catalogue.map((item, index) => (
              <Catalogue key={index} src={item.image} title={item.title} />
            ))}
          </div>
        </div>

        {/* Carousel */}

        <Carousel>
          <CarouselItem
            index={1}
            heading='All Delicacies'
            title='Grilled Lamb'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate morbi ultrices at pulvinar feugiat. Ultrices consequat eget magna risus, posuere dui. '
            src={food}
          />
        </Carousel>

        {/* Best Deals */}

        <div className='py-28'>
          <Heading type='4' className='text-[35px] py-9'>
            Best Deals
          </Heading>
          <div className=' w-full flex gap-6 items-center overflow-x-scroll no-scrollbar snap-x'>
            {deals.map((item, index) => (
              <Deals key={index} src={item.image} title={item.title} />
            ))}
          </div>
        </div>

        {/* Popular Food Section */}

        <div className=''>
          <Heading type='4' className='text-[35px] py-9'>
            Popular Foods
          </Heading>
          <div className=' w-full flex gap-6 items-center overflow-x-scroll no-scrollbar snap-x'>
            {foods.map((item, index) => (
              <Product
                key={index}
                price={item.price}
                discount={item.discount}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>

        {/* Breakfast Items Section */}

        <div className='py-28'>
          <Heading type='4' className='text-[35px] py-9'>
            Breakfast Items
          </Heading>
          <div className=' w-full flex gap-6 items-center overflow-x-scroll no-scrollbar snap-x'>
            {breakfast.map((item, index) => (
              <Product
                key={index}
                price={item.price}
                discount={item.discount}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>

        {/* Drinks Items Section */}

        <div className=''>
          <Heading type='4' className='text-[35px] py-9'>
            Drinks Items
          </Heading>
          <div className=' w-full flex gap-6 items-center overflow-x-scroll no-scrollbar snap-x'>
            {drinks.map((item, index) => (
              <Product
                key={index}
                price={item.price}
                discount={item.discount}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>

        {/* Popular Section */}

        <div className=''>
          <Heading type='4' className='text-[35px] py-9'>
            Popular Delicacies
          </Heading>

          {recipe.map((item, index) => (
            <RecipePreview
              key={index}
              description={item.description}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>

        {/* Popular Section */}

        <div className='w-full flex gap-6 items-center flex-wrap lg:flex-nowrap py-20'>
          <div className='w-full max-w-[620px] mx-auto lg:mx-0'>
            <Heading type='5' className='max-w-sm mb-4'>
              About Company
            </Heading>
            <Body
              size='base'
              color='secondary'
              fontWeight='light'
              className='capitalize'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              ut bibendum fringilla morbi at ac rhoncus nunc. Sed eu malesuada
              fusce velit. Nibh in quis at tincidunt iaculis. At magna mattis
              donec bibendum odio. Id et blandit iaculis lectus pellentesque at
              aliquet odio commodo. Quis cursus facilisis lobortis hendrerit
              augue mauris arcu rhoncus. Malesuada sed feugiat consequat, tellus
              posuere nam nam. Sapien, sit sapien risus, tristique egestas.
              Nullam feugiat dignissim odio pretium auctor. Ut at tempor,
              lacinia pellentesque neque lacinia. Justo nulla libero vestibulum
              aliquam blandit volutpat pretium posuere tristique. Risus dictum
              turpis bibendum cursus justo, mauris massa, dignissim.
            </Body>
          </div>
          <div className='max-h-[346px] w-full max-w-[620px] flex-shrink-0 bg-white rounded-3xl mx-auto lg:mx-0 box-shadow'>
            <img className='' src={video} alt={""} />
          </div>
        </div>
      </div>

      {/* Divider Section */}

      <img
        src={divider}
        alt='divider'
        className='w-full max-w-[1440px] mx-auto h-[250px] object-cover '
      />
    </>
  );
};

export default Homepage;
