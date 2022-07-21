export default function keyUp (entities, { input }) {

    const keyups = input.filter(x => x.name === "onKeyUp");

    keyups.forEach(event => {
        if (event.payload) {entities.controls.keyup(event.payload.key)}
    });

    return entities
}