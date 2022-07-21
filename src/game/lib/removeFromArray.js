const removeFromArray = (arr, idx) => {
    return arr.slice(0, idx).concat(arr.slice(idx + 1));}

export default removeFromArray;