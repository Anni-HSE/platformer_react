const defineUnit = unit => {
    unit.AI && delete unit.AI;
    unit.renderer && delete unit.renderer;
    unit.weapon && delete unit.weapon;
    return unit
};

export default defineUnit;