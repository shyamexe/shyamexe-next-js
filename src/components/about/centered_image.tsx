import Image from 'next/image';

const CenteredImageWithBackground = () => {
    
    return (
        <div className="relative flex justify-center items-center">
            {/* Background Image with Specific Size */}
           
                <Image
                    src="/rocker.png"
                    alt="shyamjith background"
                    width={949}  // Set the desired width
                    height={949} // Set the desired height
                   // Optional: Uncomment if you want a transparent background
                />
          

            {/* Front Image */}
            <div className="absolute inset-0 flex justify-center items-center">
            <Image
                src="/new_user.png"
                alt="shyamjith"
                width={484}
                height={484}
                className="relative z-10" // Ensures it stays above the background
            />
              </div>
        </div>
    );
};

export default CenteredImageWithBackground;