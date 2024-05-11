//Importing shapes.js
const { Circle, Square, Triangle } = require('./shapes');

//Test Circle class
describe('Circle', () => {
    //Test render method
    describe('render', () => {
        it('should return an SVG circle element with a fill color', () => {
            //Create a new instance of Circle
            const circle = new Circle('red');
            //Expect the render method to return an SVG circle element with a fill color
            expect(circle.render()).toBe('<circle cx="50%" cy="50%" r="100" fill="red" />');
        });
    });
});

//Test Square class
describe('Square', () => {
    //Test render method
    describe('render', () => {
        it('should return an SVG rectangle element with a fill color', () => {
            //Create a new instance of Square
            const square = new Square('blue');
            //Expect the render method to return an SVG rectangle element with a fill color
            expect(square.render()).toBe('<rect x="50" y="50" height="200" width="200" fill="blue" />');
        });
    });
});

//Test Triangle class
describe('Triangle', () => {
    //Test render method
    describe('render', () => {
        it('should return an SVG polygon element with a fill color', () => {
            //Create a new instance of Triangle
            const triangle = new Triangle('green');
            //Expect the render method to return an SVG polygon element with a fill color
            expect(triangle.render()).toBe('<polygon points="100, 0 200, 200 0, 200" fill="green" />');
        });
    });
});
