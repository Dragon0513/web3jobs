export default function PageContainer(content, title, subtitle) {
    return (
        <div className="dark:bg-gray bg-gray">
            <h2 className="lg:text-6xl text-4xl font-bold text-white text-center pt-10 pb-5 lg:py-10">{title}</h2>
            <h3 className="lg:text-4xl text-2xl font-bold text-white text-center font-mono">{subtitle}</h3>
            <div className="container mx-auto px-4 lg:px-8 p-8 lg:py-20 lg:px-52">
                {content}
            </div>
        </div>
    )
}
