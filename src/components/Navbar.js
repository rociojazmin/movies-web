import Image from 'next/image';
import { useAppContext } from '@/contexts/AppContext';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-14 bg-slate-800 px-5'>
      <div className=' w-32 h-auto sm:w-36 md:w-[300px]'>
        <Image src={`/assets/umai.svg`} width={300} height={64} alt={`Logo`} />
      </div>
      <nav className='hidden sm:block'>
        <ul className='flex justify-end items-center gap-4'>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className='sm:hidden'>
        <RxHamburgerMenu size={20} color={`#ffffff`} />
      </div>
    </div>
  );
};

export default Navbar;
