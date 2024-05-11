class shapes {
    //class called shapes with a constructor that initializes an color with an empty string

  constructor(color = '') {
    this.color = color;
  }

  //method called setColor that takes a color as an argument and sets the color of the shape
  setColor(color) {
    this.color = color;
  }
}

//class called circle that extends shapes
class Circle extends shapes {
  render() {
    return `<circle cx="50%" cy="50%" r="100" fill="${this.color}" />`;
  }
}

//class called square that extends shapes
class Square extends shapes {
  render() {
    return `<rect x="50" y="50" height="200" width="200" fill="${this.color}" />`
  }
}

//class called triangle that extends shapes
class Triangle extends shapes {
  render() {
    return `<polygon points="100, 0 200, 200 0, 200" fill="${this.color}" />`
  }
}

module.exports = { Circle, Square, Triangle };