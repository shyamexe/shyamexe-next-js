// components/RoundedImage.tsx
import Image from 'next/image';

interface RoundedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  borderRadius?: string; // Optional border radius
}
const RoundedImage: React.FC<RoundedImageProps> = ({ src, alt, width, height, borderRadius = 'rounded-lg' }) => {
  return (
    <div className={`overflow-hidden ${borderRadius}`} style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full "
      />
    </div>
  );
};

export default RoundedImage;
