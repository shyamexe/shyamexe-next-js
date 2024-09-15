import ProjectCard from "@/components/project_card";
import RoundedImage from "@/components/rounded_image";
import TypeWriterText from "@/components/type_writer_text";
import Image from "next/image";
export default function Home() {
  return (
    <div >
      <main className="flex   gap-8 row-start-2 items-center sm:items-start   box-border justify-center ">
        <div className="flex flex-col sm:flex-row space-y-0 sm:space-x-10 box-border">
          <RoundedImage
            src="/avatar_normal.jpeg"
            alt="A rounded image"
            width={90}
            height={90}
            borderRadius="rounded-xl"
          />

          <div className="flex flex-col   justify-evenly  ">
            <h1 className="text-2xl font-sans sm:text-4xl font-normal">Hi i'm Shyam Jith</h1>
            <div className="flex">

              <h1 className="text-2xl font-sans sm:text-4xl font-normal pr-3">{"I create"} </h1>
              <TypeWriterText />
            </div>


          </div>
        </div>

      </main>
      <div>
        <ProjectCard
          title="SecureDocs"
          tags={["Android"]}
          imageSrc={"/securedoc.png"}
          imageWidth={300}
          imageHeight={800}
          device={"iPhone X"}
          titleColor={"slate-300"}
          tagBgColor={"black"}
          tagTextColor={"white"}
          gradient1={"black"}
          gradient2={"red-900"}
          path={"/about"} />
      </div>
      <div>
        <ProjectCard
          title="Bricks-cli"
          tags={["Reusable code Blocks"]}
          imageSrc={"/cli.png"}
          imageWidth={300}
          imageHeight={800}
          device={"iPhone X"}
          titleColor={"white"}
          tagBgColor={"black"}
          tagTextColor={"white"}
          gradient1={"[#A7BFE8]"}
          gradient2={"[#6190E8]"}
          path={"/about"} />
      </div>
      <div>
        <ProjectCard
          title="Scrollable_tab_view package (flutter)"
          tags={["Android","IOS","Linux","Macos","Web","Windows"]}
          imageSrc={"/package.png"}
          imageWidth={400}
          imageHeight={600}
          device={"iPhone X"}
          titleColor={"white"}
          tagBgColor={"black"}
          tagTextColor={"white"}
          gradient1={"[#A7BFE8]"}
          gradient2={"[#6190E8]"}
          path={"/about"} />
      </div>
      <div>
        <ProjectCard
          title="1Dictionary app"
          tags={["Android","IOS", "Web",]}
          imageSrc={"/dictionary_ss.png"}
          imageWidth={400}
          imageHeight={600}
          device={"iPhone X"}
          titleColor={"white"}
          tagBgColor={"black"}
          tagTextColor={"white"}
          gradient1={"[#A7BFE8]"}
          gradient2={"[#6190E8]"}
          path={"/about"} />
      </div>
      <div>
        <ProjectCard
          title="E Commerce Seller App"
          tags={[  "Web",]}
          imageSrc={"/ecoms.png"}
          imageWidth={400}
          imageHeight={600}
          device={"iPhone X"}
          titleColor={"white"}
          tagBgColor={"black"}
          tagTextColor={"white"}
          gradient1={"[#A7BFE8]"}
          gradient2={"[#6190E8]"}
          path={"/about"} />
      </div>
      <div>
        <ProjectCard
          title="Wether app"
          tags={[  "android","ios"]}
          imageSrc={"/wether.png"}
          imageWidth={400}
          imageHeight={600}
          device={"iPhone X"}
          titleColor={"white"}
          tagBgColor={"black"}
          tagTextColor={"white"}
          gradient1={"[#A7BFE8]"}
          gradient2={"[#6190E8]"}
          path={"/about"} />
      </div>



      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        {/* <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          /> */}


      </footer>
    </div>
  );
}
