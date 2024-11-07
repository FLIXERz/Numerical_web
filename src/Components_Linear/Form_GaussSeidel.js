import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

export default function Form_GaussSeidel() {
  const [matrix, setMatrix] = useState([]);
  const [vector, setVector] = useState([]);
  const [solution, setSolution] = useState([]);
  const [iterations, setIterations] = useState(10); // จำนวนครั้งในการคำนวณ (ตั้งค่าได้)
  const [tolerance, setTolerance] = useState(0.0001); // ค่าความคลาดเคลื่อน

  const handleMatrixChange = (e, row, col) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = parseFloat(e.target.value);
    setMatrix(newMatrix);
  };

  const handleVectorChange = (e, index) => {
    const newVector = [...vector];
    newVector[index] = parseFloat(e.target.value);
    setVector(newVector);
  };

  const initializeMatrix = (size) => {
    setMatrix(Array(size).fill().map(() => Array(size).fill(0)));
    setVector(Array(size).fill(0));
  };

  const gaussSeidel = () => {
    const n = matrix.length;
    let x = Array(n).fill(0); // initial guess
    let newX = [...x];
    let converged = false;

    for (let iter = 0; iter < iterations; iter++) {
      converged = true;

      for (let i = 0; i < n; i++) {
        let sum = vector[i];
        for (let j = 0; j < n; j++) {
          if (j !== i) {
            sum -= matrix[i][j] * newX[j];
          }
        }
        newX[i] = sum / matrix[i][i];

        // Check for convergence
        if (Math.abs(newX[i] - x[i]) > tolerance) {
          converged = false;
        }
        x[i] = newX[i];
      }

      if (converged) break;
    }

    setSolution(newX);
  };

  return (
    <div className="App">
      <center>
        <h2>Gauss-Seidel Iteration </h2>
        <label>Select Matrix Size:</label>
        <select
          className="form-select form-select-lg mb-3 w-25"
          onChange={(e) => initializeMatrix(parseInt(e.target.value))}
        >
          <option value="0">Select Size</option>
          <option value="2">2x2</option>
          <option value="3">3x3</option>
          <option value="4">4x4</option>
        </select>

        {matrix.length > 0 && (
          <div>
            <h3>Input Matrix</h3>
            {matrix.map((row, i) =>
              <div key={i}>
                {row.map((value, j) => 
                  <input
                    key={j}
                    type="number"
                    value={matrix[i][j]}
                    onChange={(e) => handleMatrixChange(e, i, j)}
                    style={{ width: 50, margin: 5 }}
                  />
                )}
              </div>
            )}

            <h3>Input Vector</h3>
            {vector.map((value, i) =>
              <input
                key={i}
                type="number"
                value={vector[i]}
                onChange={(e) => handleVectorChange(e, i)}
                style={{ width: 50, margin: 5 }}
              />
            )}

            <button className="btn btn-primary mt-3" onClick={gaussSeidel}>
              Calculate Gauss-Seidel
            </button>

            {solution.length > 0 && (
              <div className="mt-4">
                <h4>Solution:</h4>
                {solution.map((value, i) => (
                  <div key={i}>x{i+1} = {value.toFixed(4)}</div>
                ))}
              </div>
            )}
          </div>
        )}
      </center>
    </div>
  );
}
