
type DescriptionProps = {
  title: string,
  description: string,
}

const DescriptionComponent:React.FC<DescriptionProps> = ({
  title,
  description,
}) =>{
  return (
    <div className="flex flex-col py-10">
    <span
          key={1}
          className="px-2 py-1 text-2xl sm:text-4xl font-medium rounded text-center  "
      >
          {title}
      </span>
    <span
          key={1}
          className="px-2 py-1 text-lg sm:text-xl rounded text-center  "
      >
          {description}
      </span>
    </div>
  );
} 
export default DescriptionComponent;