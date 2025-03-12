function parseCount(value) {
    let number = Number.parseFloat(value);
    if (Number.isNaN(number)) {
        const error = new Error("Невалидное значение");
        throw error;
    }
    return number;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            const error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        return Number((Math.sqrt(this.perimeter / 2 * (this.perimeter / 2 - this.a) * (this.perimeter / 2 - this.b) * (this.perimeter / 2 - this.c))).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },

            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}