import Heading from "../typography/Heading";

const Topbar = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-24 flex justify-between items-center py-3'>
      {/* Topbar: Left Content */}
      <div className='flex gap-2 '>
        <a href='/' className=''>
          <Heading
            color='primary'
            type='6'
            className='tracking-[0.095em] font-semibold'>
            24 hrs Service
          </Heading>
        </a>
        <span className='primary tracking-[0.095em] font-semibold'>|</span>
        <a href='/' className=''>
          <Heading
            color='primary'
            type='6'
            className='tracking-[0.095em] font-semibold'>
            365 Days
          </Heading>
        </a>
      </div>

      {/* Topbar: Right Content */}
      <div className='flex gap-2 '>
        <a href='/' className=''>
          <Heading
            color='primary'
            type='6'
            className='tracking-[0.095em] font-semibold'>
            Translate
          </Heading>
        </a>
        <span className='primary tracking-[0.095em] font-semibold'>|</span>
        <a href='/' className=''>
          <Heading
            color='primary'
            type='6'
            className='tracking-[0.095em] font-semibold'>
            Support
          </Heading>
        </a>
        <span className='primary tracking-[0.095em] font-semibold'>|</span>
        <a href='/' className=''>
          <Heading
            color='primary'
            type='6'
            className='tracking-[0.095em] font-semibold'>
            Help
          </Heading>
        </a>
        <span className='primary tracking-[0.095em] font-semibold'>|</span>
        <a href='/' className=''>
          <Heading
            color='primary'
            type='6'
            className='tracking-[0.095em] font-semibold'>
            FAQ
          </Heading>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
