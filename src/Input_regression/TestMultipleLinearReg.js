import { matrix, multiply, inv, transpose } from 'mathjs';

export function multipleLinearRegression(X, Y) {
    // Convert X and Y to matrices
    const XMatrix = matrix(X);
    const YMatrix = matrix(Y);

    // Calculate (X^T * X)^-1 * X^T * Y
    const XT = transpose(XMatrix);
    const XTX = multiply(XT, XMatrix);
    const XTX_inv = inv(XTX);
    const XTY = multiply(XT, YMatrix);

    // Calculate coefficients
    const coefficients = multiply(XTX_inv, XTY);
    return coefficients.toArray(); // Return as a regular array
}
