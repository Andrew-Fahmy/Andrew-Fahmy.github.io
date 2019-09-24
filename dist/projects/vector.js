class vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    
    get magnitude_squared() {
        return Math.pow(this.x, 2) + Math.pow(this.y, 2);
    }
    
    get magnitude() {
        return Math.sqrt(this.magnitude_squared);
    }
    
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
  
    subtract(other) {
        this.x -= other.x;
        this.y -= other.y;
    }
  
    normalize() {
        let magnitude = this.magnitude;
        this.x /= magnitude;
        this.y /= magnitude;
    }
  
    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }
}