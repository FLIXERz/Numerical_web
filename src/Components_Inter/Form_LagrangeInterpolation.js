import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Form_LagrangeInterpolation() {
  const [points, setPoints] = useState([{ x: 0, y: 0 }]);
  const [value, setValue] = useState(0);
  const [interpolatedValue, setInterpolatedValue] = useState(null);

  const handlePointChange = (index, axis, val) => {
    const newPoints = [...points];
    newPoints[index][axis] = parseFloat(val);
    setPoints(newPoints);
  };

  const addPoint = () => {
    setPoints([...points, { x: 0, y: 0 }]);
  };

  const calculateLagrangeInterpolation = () => {
    let result = 0;
    const n = points.length;

    for (let i = 0; i < n; i++) {
      let term = points[i].y;
      for (let j = 0; j < n; j++) {
        if (j !== i) {
          term *= (value - points[j].x) / (points[i].x - points[j].x);
        }
      }
      result += term;
    }

    setInterpolatedValue(result);
  };

  const chartData = points.map((point) => ({ x: point.x, y: point.y }));

  return (
    <div className="container-xxl">
      <div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-75 p-3 shadow">
        <center><h2>Linear/Quadratic/Polynomial</h2></center>
        
        <h3>Input Points</h3>
        {points.map((point, index) => (
          <div key={index} className="d-flex justify-content-center mb-2">
            <input
              type="number"
              placeholder="x"
              value={point.x}
              onChange={(e) => handlePointChange(index, 'x', e.target.value)}
              style={{ width: 60, marginRight: 5 }}
              className="form-control"
            />
            <input
              type="number"
              placeholder="y"
              value={point.y}
              onChange={(e) => handlePointChange(index, 'y', e.target.value)}
              style={{ width: 60 }}
              className="form-control"
            />
          </div>
        ))}
        <button className="btn btn-secondary mb-3" onClick={addPoint}>
          Add Point
        </button>

        <div>
          <input
            type="number"
            placeholder="Value to Interpolate"
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
            className="form-control mb-3"
            style={{ width: 200, margin: "0 auto", display: "block" }}
          />
        </div>

        <button className="btn btn-primary w-100 mb-3" onClick={calculateLagrangeInterpolation}>
          Calculate
        </button>

        {interpolatedValue !== null && (
          <div className="mt-4 text-center">
            <h4>Interpolated Value at {value}: {interpolatedValue.toFixed(4)}</h4>
          </div>
        )}

        <LineChart width={500} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" label={{ value: "X", position: "insideBottomRight", offset: -10 }} />
          <YAxis label={{ value: "Y", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
  );
}
