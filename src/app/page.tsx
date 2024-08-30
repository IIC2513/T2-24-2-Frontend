import Image from "next/image";


export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to DCChef</h1>
      <Image
        src="/images/chef.svg"
        alt="Chef"
        width={300}
        height={300}
      />
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <input
            type="text"
            placeholder="Search for recipes"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button className="p-2 bg-blue-500 text-white rounded-md mt-2">
            Search
          </button>
        </div>
        <div className="flex flex-row items-center mt-4">

        </div>
      </div>
    </main>
  );
}
