import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <header className="Container mx-auto">
        <nav className="flex max-w-screen-xl flex flex-wrap items-center justify-center gap-8 mx-auto p-2 my-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/">
            <Image src="/image.svg" width={100} height={100} alt="logo brend" />
          </Link>
          <Link href="/archive">Archive</Link>
          <Link href="/pro">Pro Version</Link>
          <Link href="/download">Download</Link>
        </nav>
      </header>

      <main className="max-w-screen-xl flex flex-wrap mx-auto p-2  justify-center">
        <div className="flex max-w-screen-xl flex flex-wrap justify-center gap-8 mx-auto ">
          {data.slice(0, 2).map((product) => (
            <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <Image src={product.image} width={500} height={300} alt={product.title} />
                <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                <p className="text-gray-600">{product.description.slice(0,100)}...</p>
                <p className="text-gray-800 font-bold mt-2">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        {data.map((product) => (
            <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <Image src={product.image} width={400} height={400} alt={product.title} />
                <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                <p className="text-gray-600">{product.description.slice(0,100)}...</p>
                <p className="text-gray-800 font-bold mt-2">${product.price}</p>
              </div>
            </div>
          ))}
      </main>
    </>
  );
}
