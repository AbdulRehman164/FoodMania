import offline from '../assets/img/offline.png';

const NetworkError = () => {
    return (
        <div className="flex-1 flex items-center justify-center flex-col gap-2">
            <img src={offline} alt="offline" className="h-16 w-16" />
            <h1 className="text-xl font-bold">
                You are offline. Check your Connection.
            </h1>
            <button
                className="font-semibold text-white bg-orange-400 px-4 py-1 rounded-lg hover:outline hover:outline-1 hover:outline-orange-400 hover:bg-white hover:text-orange-400 active:text-white active:bg-orange-400 transition-all"
                onClick={() => {
                    window.location.reload();
                }}
            >
                Retry
            </button>
        </div>
    );
};

export default NetworkError;
