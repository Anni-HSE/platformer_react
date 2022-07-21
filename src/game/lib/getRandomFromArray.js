const getRandom = arr => {
    const range = arr.length - 1;

    const randomIdx = Math.round(range * Math.random());

    return arr[randomIdx]
};

export default getRandom