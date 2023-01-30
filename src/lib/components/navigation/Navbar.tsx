import Heading from "../typography/Heading";

const Navbar = () => {
  return (
    <div className='max-w-[1440px] mx-auto h-full'>
      <div className='w-full h-full pr-24'>
        {/* Logo Section */}
        <div className='w-48 h-full px-5 py-0.5 flex justify-end border-r '>
          <div className='h-full !aspect-square bg-neutral-300 rounded-full '>
            <Heading type="custom" className='text-[35px] font-semibold leading-[40.19px] text-center py-2'>
              LO <br />
              GO
            </Heading>
          </div>
        </div>
        {/*  */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Navbar;
