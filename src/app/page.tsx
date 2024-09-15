import RoundedImage from "@/components/rounded_image";
import TypeWriterText from "@/components/type_writer_text";
import Image from "next/image";
export default function Home() {
  return (
    <div >
      <main className="flex   gap-8 row-start-2 items-center sm:items-start   box-border justify-center">
        <div className="flex space-x-10   box-border">
          <RoundedImage
            src="/avatar_normal.jpeg"
            alt="A rounded image"
            width={90}
            height={90}
            borderRadius="rounded-xl"
          />

          <div className="flex flex-col   justify-evenly  ">
            <h1 className="text-3xl font-sans sm:text-4xl font-normal">Hi i'm Shyam Jith</h1>
            <div className="flex">

              <h1 className="text-3xl font-sans sm:text-4xl font-normal">I create </h1>
              <TypeWriterText />
            </div>


          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
     
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
         
       
      </footer>
    </div>
  );
}
