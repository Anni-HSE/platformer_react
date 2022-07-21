const MoveBox = (entities, { input }) => {
    const { payload } = input.find(x => x.name === "onKeyDown") || {};

    if (payload) {

        const box1 = entities["box1"];
        console.log(payload.key);

        if (payload.key === "ArrowLeft")
        {
            box1.x = box1.x + -10;
            setTimeout(() => {
                box1.y = box1.y + 0;
            }, 300);
        }

        else if (payload.key === "ArrowRight")
        {
            box1.x = box1.x + 10;
            setTimeout(() => {
                box1.y = box1.y + 0;
            }, 300);
        }

        box1.setVelocity()
    }

    return entities;
};

export { MoveBox };