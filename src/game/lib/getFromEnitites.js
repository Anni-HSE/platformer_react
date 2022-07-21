const getFromEntities = (entities, type) => Object.values(entities).filter(enitiy => enitiy.type === type);

export default getFromEntities;