function ShimmerBox() {
    return <div className="shimmer-box"></div>;
}

export default function Shimmer() {
    return (
        <div className="shimmer-container">
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
        </div>
    );
}
