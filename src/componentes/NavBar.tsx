import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="bg-gray-900 container mx-auto flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <Image src="/chef-icon.png" alt="Chef" width={40} height={40} />
          <Link href="/" className="text-white text-4xl  font-bold">
            DCChef
          </Link>
        </div>
        <ul 
        className="flex space-x-8"
        style={{
          padding: "10px",
        }}
        >
          <li>
            <Link href="/" className="text-gray-300 text-4xl hover:text-white">
              Recipes
            </Link>
          </li>
          <li>
            <p className="text-gray-300 text-4xl">|</p>
          </li>
          <li>
            <Link href="/create" className="text-gray-300 text-4xl hover:text-white">
              Create
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


