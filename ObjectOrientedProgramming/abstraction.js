class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape.");
    }
  }

  calculateArea() {
    throw new Error("Method 'calculateArea()' must be implemented.");
  }

  calculatePerimeter() {
    throw new Error("Method 'calculatePerimeter()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log("Circle area:", circle.calculateArea());
console.log("Circle perimeter:", circle.calculatePerimeter());
console.log("Rectangle area:", rectangle.calculateArea());
console.log("Rectangle perimeter:", rectangle.calculatePerimeter());
