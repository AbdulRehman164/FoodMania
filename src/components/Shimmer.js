export default function Shimmer() {
    return (
        <div className="flex flex-wrap gap-16">
            {Array(10)
                .fill('')
                .map((e, index) => (
                    <div className=" bg-gray-300 w-52 h-72" key={index}></div>
                ))}
        </div>
    );
}
