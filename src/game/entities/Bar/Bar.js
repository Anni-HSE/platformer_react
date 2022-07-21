import renderer from './Bar.renderer';

const Bar = (factory) => {

    return ({
        renderer: renderer,
        factory,
        bottom: 0,
        left: 0,
    })
}

export default Bar;