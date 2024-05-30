export function filterData(inputText, resList) {
    const filteredData = resList.filter((res) =>
        res?.info?.name?.toLowerCase()?.includes(inputText?.toLowerCase())
    );
    return filteredData;
}
