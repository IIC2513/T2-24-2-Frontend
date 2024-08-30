import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-stretch items-center">
        <div className="flex  text-white text-2xl font-bold">
          <Link href="/">DCChef</Link>
          <Image className="spacing" src="/chef-icon.png" alt="Chef" width={50} height={50} />
        </div>
        <ul className="flex ">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          </li>
          <li>
            <Link href="/recipes" className="text-gray-300 hover:text-white">Recipes</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
