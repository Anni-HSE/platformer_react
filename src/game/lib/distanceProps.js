const distanceProps = (pos1, pos2) => {
    const x1 = pos1.x; const x2 = pos2.x;
    const y1 = pos1.y; const y2 = pos2.y;

    const dx = x2 - x1;
    const dy = y2 - y1;

    const distance = Math.sqrt(dx ** 2 + dy ** 2);

    const angle = dx >= 0 ? 0 : -180;
    const rads = Math.abs(Math.atan(dy / dx));

    return ({ distance, angle, rads })
}

export default distanceProps;