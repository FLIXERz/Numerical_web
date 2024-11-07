// Quadratic Interpolation function
function quadraticInterpolation(x0, y0, x1, y1, x2, y2, x) {
    // Calculate coefficients a, b, and c
    let a = ((y1 - y0) / (x1 - x0) - (y2 - y0) / (x2 - x0)) / (x1 - x2);
    let b = (y1 - y0) / (x1 - x0) - a * (x1 + x0);
    let c = y0 - a * x0 * x0 - b * x0;

    // Calculate y value at given x using the quadratic formula
    let y = a * x * x + b * x + c;
    
    return y;
}

// Example usage:
const x0 = 1, y0 = 2;
const x1 = 2, y1 = 3;
const x2 = 3, y2 = 5;
const x = 1.5;

const interpolatedY = quadraticInterpolation(x0, y0, x1, y1, x2, y2, x);
console.log(`Interpolated value at x = ${x} is y = ${interpolatedY}`);
