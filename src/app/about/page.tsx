import CenteredImageWithBackground from "@/components/about/centered_image";
import DescriptionComponent from "@/components/description_component";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Shyamjith.in",
    description: "I'm a Software Engineer specializing in Flutter development from India 🇮🇳. I love building beautiful, responsive, and performant mobile and web applications",
};

export default function AboutPage() {
    return (
        <>
            <div className="max-w-[900px] mx-auto items-center space-y-4 sm:space-y-0 sm:space-x-10 px-4">
                <div className="flex justify-center">
                    <CenteredImageWithBackground

                        
                    />
                </div>
                {/* <div className=" flex flex-col sm:flex-row items-center"> */}
                    {/* <div className="w-[300px]">
                        <RoundedImage
                            src="/user.jpg"
                            alt="A rounded image"
                            width={300}
                            height={300}
                            borderRadius="rounded-xl"
                        />
                    </div>
                    <span
                        key={1}
                        className="px-10 py-6 text-lg sm:text-xl rounded text-center sm:text-left"
                    >
                        Hello there! I'm Shyamjith, a passionate Flutter developer hailing from the picturesque land of Kerala, India. With a background in computer science engineering, I thrive on turning innovative ideas into delightful digital experiences.
                    </span> */}
                {/* </div> */}

                <DescriptionComponent
                    title="Continuos Learning"
                    description="In the rapidly evolving world of technology, there's always something new to learn. I\'m an ardent advocate of continuous learning, staying updated with the latest trends, techniques, and best practices. This allows me to integrate cutting-edge solutions into my projects, ensuring they remain relevant and ahead of the curve."
                />
                <DescriptionComponent
                    title="Let's Connect!"
                    description="I'm thrilled to be part of the vibrant Flutter community and contribute to shaping the digital landscape. If you have a project in mind, a collaboration opportunity, or just want to geek out over the latest tech trends, feel free to reach out. Together, we can transform ideas into reality!
                    
                    Thank you for visiting my portfolio. Let's create amazing experiences together.
                    "

                />
                <div className="flex space-x-4 justify-center">
                    {/* Reach Out Button */}
                    <a
                        href="mailto:shyamjith38@hotmail.com"
                        className="bg-gray-800 text-white hover:text-[#393E46] px-4 py-2 rounded-full hover:bg-[#EEEEEE]  transition-colors duration-300 ease-in-out"
                    >
                        Reach out
                    </a>
                    <div className="w=[10px]" />

                    {/* Download CV Button with Hoverable Gradient */}
                    <a
                        href="/shyamjith-21-8-23.pdf"
                        download
                        className="bg-gray-800 text-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                    >
                        Download CV
                    </a>
                </div>


            </div>
        </>
    );
}