import Image from 'next/image';

export default function ExternalLink({
    imagePath,
    title,
    description,
    externalLink,
    buttonName,
}: {
    imagePath: string,
    title: string,
    description: string,
    externalLink: string,
    buttonName: string,
}) {
    return (
        <div className="flex items-center justify-between bg-gray-800 text-white p-4 rounded-xl w-full max-w-lg">
            <div className="flex items-center">
                <div className="w-12 h-12 mr-4">
                    <Image
                        src={imagePath}
                        alt={title}
                        width={48}
                        height={48}
                        className="rounded-lg"
                    />
                </div>
                <div>
                    <p className="text-lg font-semibold">{title}</p>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>
            </div>
            <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-700 rounded-xl text-white text-sm hover:bg-gray-600"
            >
                {buttonName}
            </a>
        </div>
    );
}