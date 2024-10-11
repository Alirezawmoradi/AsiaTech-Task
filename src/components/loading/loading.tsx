export const Loading = () => {
    return (
        <div className="flex flex-wrap gap-10">
            {Array.from({length: 30}).map((_, index) => (
                <div key={index} className="md:w-2/5 w-full">
                    <div className="animate-pulse">
                        <div className="h-2 bg-gray-300 rounded w-full mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-5/12"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}