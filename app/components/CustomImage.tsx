import Image from "next/image"

type Props = {
    src: string,
    alt: string,
    priority?: boolean
}

export default function CustomImage({ src, alt, priority }: Props) {

    const pry = priority ? true : false

    return (
        <div className="w-full h-full">
            <Image
                className="rounded-lg mx-auto"
                src={src}
                width={600}
                height={600}
                alt={alt}
                priority={pry}
            />
        </div>
    )
}