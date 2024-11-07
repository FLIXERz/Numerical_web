import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

export default function Form_LUDecomposition() {
  const [matrixSize, setMatrixSize] = useState(2);
  const [matrix, setMatrix] = useState([]);
  const [L, setL] = useState([]);
  const [U, setU] = useState([]);

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

  const calculateLU = () => {
    const n = matrixSize;
    let L = Array(n).fill().map(() => Array(n).fill(0));
    let U = Array(n).fill().map(() => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      for (let k = i; k < n; k++) {
        let sum = 0;
        for (let j = 0; j < i; j++) sum += (L[i][j] * U[j][k]);
        U[i][k] = matrix[i][k] - sum;
      }

      L[i][i] = 1;
      for (let k = i + 1; k < n; k++) {
        let sum = 0;
        for (let j = 0; j < i; j++) sum += (L[k][j] * U[j][i]);
        L[k][i] = (matrix[k][i] - sum) / U[i][i];
      }
    }

    setL(L);
    setU(U);
  };

  return (
    <div className="App">
      <center>
        <h2>LU Decomposition</h2>
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

        <button className="btn btn-primary mt-3" onClick={calculateLU}>
          Calculate LU Decomposition
        </button>

        {L.length > 0 && U.length > 0 && (
          <div className="mt-4">
            <h3>Lower Triangular Matrix (L):</h3>
            {L.map((row, i) => (
              <div key={i}>
                {row.map((value, j) => (
                  <span key={j} style={{ width: 50, display: 'inline-block' }}>{value.toFixed(2)}</span>
                ))}
              </div>
            ))}

            <h3>Upper Triangular Matrix (U):</h3>
            {U.map((row, i) => (
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
