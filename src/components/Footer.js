import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-600">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center ">
          © 2023 <a href="https://flowbite.com/" className="hover:underline">Mattel Studios, LLC</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <a href="#shows" className="mr-4 hover:underline md:mr-6">Shows</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
