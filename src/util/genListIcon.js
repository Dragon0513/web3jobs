export const genListIcon = (src, alt, isFeatured) => {
    return (
        <span className="inline-block relative">
            <img
                className="inline-block h-16 w-16 rounded-md hidden md:block lg:block"
                src={src}
                alt={alt}
            />
            <span className={`${isFeatured ? "animate-ping" : ""} absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400`} />
        </span>
    )
}