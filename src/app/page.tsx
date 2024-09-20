import ProjectCard from "@/components/project_card";
import RoundedImage from "@/components/rounded_image";
import TypeWriterText from "@/components/type_writer_text"; 
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
            <h1 className="text-2xl font-sans sm:text-4xl font-normal">Hi i'm Shyam Jith {/* eslint-disable-line react/no-unescaped-entities */}</h1>
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
          titleColor={"slate-300"}
          tagBgColor={"black"}
          tagTextColor={"white"}
          gradient1={"#000000"}
          gradient2={"#991b1b"}
          path={"/secureDocs"} />
      </div>
      <div>
        <ProjectCard
          title="Bricks-cli"
          tags={["Reusable code Blocks"]}
          imageSrc={"/cli.png"}
          imageWidth={300}
          imageHeight={800} 
          titleColor={"white"}
          tagBgColor={"#25316D"}
          tagTextColor={"white"}
          gradient1={"#25316D"}
          gradient2={"#5F6F94"}
          path={"/bricks"} />
      </div>
        <div>
        <ProjectCard
          title="Material Pagination"
          tags={["Android","IOS","Linux","Macos","Web","Windows"]}
          imageSrc={"/mpagination.png"}
          imageWidth={600}
          imageHeight={800} 
          titleColor={"white"}
          tagBgColor={"#092635"}
          tagTextColor={"white"}
          gradient1={"#092635"}
          gradient2={"#5C8374"}
          path={"/mPagination"} />
      </div>  
      <div>
        <ProjectCard
          title="Scrollable_tab_view package"
          tags={["Android","IOS","Linux","Macos","Web","Windows"]}
          imageSrc={"/package.png"}
          imageWidth={600}
          imageHeight={600} 
          titleColor={"white"}
          tagBgColor={"#2E0249"}
          tagTextColor={"white"}
          gradient1={"#2E0249"}
          gradient2={"#570A57"}
          path={"/scrollableTabBar"} />
      </div>
      <div>
        <ProjectCard
          title="1Dictionary app"
          tags={["Android","IOS", "Web",]}
          imageSrc={"/dictionary_ss.png"}
          imageWidth={400}
          imageHeight={600} 
          titleColor={"white"}
          tagBgColor={"#001E6C"}
          tagTextColor={"white"}
          gradient1={"#001E6C"}
          gradient2={"#00B4D8"}
          path={"/dictionary"} />
      </div>
      <div>
        <ProjectCard
          title="E Commerce Seller App"
          tags={[  "Web",]}
          imageSrc={"/ecoms.png"}
          imageWidth={400}
          imageHeight={600} 
          titleColor={"white"}
          tagBgColor={"#223376"}
          tagTextColor={"white"}
          gradient1={"#223376"}
          gradient2={"#0d0e29"}
          path={"/eCommerce"} />
      </div>
      <div>
        <ProjectCard
          title="Wether app"
          tags={[  "android","ios"]}
          imageSrc={"/wether.png"}
          imageWidth={400}
          imageHeight={600} 
          titleColor={"white"}
          tagBgColor={"#440A67"}
          tagTextColor={"white"}
          gradient1={"#440A67"}
          gradient2={"#93329E"}
          path={"/weather"} />
      </div>
      <div className="h-[40px]"></div>



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
