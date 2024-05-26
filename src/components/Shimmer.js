export default function Shimmer() {
    return (
        <div className="shimmer-container">
            {Array(10)
                .fill('')
                .map((e, index) => (
                    <div className="shimmer-box" key={index}></div>
                ))}
        </div>
    );
}
