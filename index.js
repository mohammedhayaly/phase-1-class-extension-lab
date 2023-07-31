class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      const [a, b, c] = this.sides;
      return a + b > c && a + c > b && b + c > a;
    }
    return false;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4) {
      const [a, b, c, d] = this.sides;
      return a === b && b === c && c === d;
    }
    return false;
  }

  get area() {
    if (this.countSides === 4) {
      return this.sides[0] ** 2;
    }
    return undefined;
  }
}

// Test the classes
const triangle1 = new Triangle([3, 4, 5]);
console.log(triangle1.isValid); // Output: true
console.log(triangle1.countSides); // Output: 3
console.log(triangle1.perimeter); // Output: 12

const square1 = new Square([5, 5, 5, 5]);
console.log(square1.isValid); // Output: true
console.log(square1.countSides); // Output: 4
console.log(square1.perimeter); // Output: 20
console.log(square1.area); // Output: 25