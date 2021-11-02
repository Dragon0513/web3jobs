export default function PageContainer(content, info) {
    const headers = () => {
        return (
            <div>
                <h2 className='lg:text-6xl text-4xl font-bold text-white text-center pt-10 pb-5 lg:py-10'>{info.title}</h2>
                <h3 className='lg:text-4xl text-2xl font-bold text-white text-center font-mono'>{info.subtitle}</h3>
            </div>
        )

    }

    return (
        <div className="dark:bg-gray bg-gray">
            {info.isShown ? headers() : ""}
            <div className="container mx-auto px-4 lg:px-8 p-8 lg:py-20">
                {content}
            </div>
        </div>
    )
}
