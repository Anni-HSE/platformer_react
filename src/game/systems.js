const MoveBox = (entities, { input }) => {
    //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
    //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
    //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
    //-- That said, it's probably worth considering performance implications in either case.

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
    }

    return entities;
};

export { MoveBox };