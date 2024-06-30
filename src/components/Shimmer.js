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

export const MenuShimmer = () => {
    return (
        <div className="min-h-[100vh] flex mx-28 my-8 gap-10">
            <div className="w-96 h-96 rounded-lg bg-gray-300"></div>
            <div className="flex flex-col gap-10">
                {Array(10)
                    .fill('')
                    .map((_, index) => (
                        <div className="h-28 round-lg bg-gray-300 w-96"></div>
                    ))}
            </div>
        </div>
    );
};
