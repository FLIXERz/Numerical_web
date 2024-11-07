import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

export default function Form_CholeskyDecomposition() {
  const [matrixSize, setMatrixSize] = useState(2);
  const [matrix, setMatrix] = useState([]);
  const [L, setL] = useState([]);

  const handleMatrixSizeChange = (e) => {
    const size = parseInt(e.target.value);
    setMatrixSize(size);
    setMatrix(Array(size).fill().map(() => Array(size).fill(0)));
  };

  const handleInputChange = (e, row, col) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = parseFloat(e.target.value);
    setMatrix(newMatrix);
  };

  const calculateCholesky = () => {
    const n = matrixSize;
    let L = Array(n).fill().map(() => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        let sum = 0;

        if (i === j) { // Diagonal elements
          for (let k = 0; k < j; k++) sum += Math.pow(L[j][k], 2);
          L[j][j] = Math.sqrt(matrix[j][j] - sum);
        } else {
          for (let k = 0; k < j; k++) sum += L[i][k] * L[j][k];
          L[i][j] = (matrix[i][j] - sum) / L[j][j];
        }
      }
    }

    setL(L);
  };

  return (
    <div className="App">
      <center>
        <h2>Cholesky Decomposition</h2>
        <label>Select Matrix Size:</label>
        <select
          className="form-select form-select-lg mb-3 w-25"
          value={matrixSize}
          onChange={handleMatrixSizeChange}
        >
          <option value="2">2x2</option>
          <option value="3">3x3</option>
          <option value="4">4x4</option>
          <option value="5">5x5</option>
        </select>

        <div>
          <h3>Input Matrix</h3>
          {matrix.map((row, i) =>
            <div key={i}>
              {row.map((value, j) => 
                <input
                  key={j}
                  type="number"
                  value={matrix[i][j]}
                  onChange={(e) => handleInputChange(e, i, j)}
                  style={{ width: 50, margin: 5 }}
                />
              )}
            </div>
          )}
        </div>

        <button className="btn btn-primary mt-3" onClick={calculateCholesky}>
          Calculate Cholesky Decomposition
        </button>

        {L.length > 0 && (
          <div className="mt-4">
            <h3>Lower Triangular Matrix (L):</h3>
            {L.map((row, i) => (
              <div key={i}>
                {row.map((value, j) => (
                  <span key={j} style={{ width: 50, display: 'inline-block' }}>{value.toFixed(2)}</span>
                ))}
              </div>
            ))}
          </div>
        )}
      </center>
    </div>
  );
}
