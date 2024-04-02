
  import Image from "next/image";
  import Link from "next/link";
  export default function Home() {

   
    return (
      <>
        <header className="Container mx-auto">
          <nav className="flex max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/"><Image
            src="./image.svg"
            width={100}
            height={100}
            alt="logo brend"
            /></Link>
           
            <Link href="/archive">Archive</Link>
            <Link href="/pro">Pro Version</Link>
            <Link href="/download">Download</Link>
          </nav>
        </header>

        <main className="max-w-screen-xl flex flex-wrap  mx-auto p-2">
            
        </main>
      </>
    );
  }
