import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Input4x4 from "../Input_spline/Input4x4";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Form_SplineCubic() {
  const [matrix, setMatrix] = useState([]);
  const [value, setValue] = useState(0);
  const [interpolatedValue, setInterpolatedValue] = useState(null);

  const calculateCubicSpline = () => {
    let result = null;
    result = "Calculated Value for Cubic Spline (Placeholder)";
    setInterpolatedValue(result);
  };

  const chartData = matrix.map((point) => ({
    x: point[0],
    y: point[4],
  }));

  return (
    <div className="container-xxl">
      <div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-75 p-3 shadow">
        <center><h2>Cubic Spline Interpolation</h2></center>

        {/* กรอบสำหรับการตั้งค่า Matrix */}
        <div className="d-flex justify-content-center gap-2 my-3">
          <Input4x4 setMatrix={setMatrix} />
        </div>

        {/* ฟิลด์อินพุตสำหรับค่าที่ต้องการหา */}
        <div className="my-3">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
            placeholder="Value to interpolate"
            className="form-control mb-3 text-center"
            style={{
              width: "60px",
              height: "40px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
              margin: "0 auto",
              display: "block"
            }}
          />
          <button className="btn btn-primary w-100" onClick={calculateCubicSpline}>
            Calculate Cubic Spline
          </button>
        </div>

        {interpolatedValue !== null && (
          <div className="mt-4 text-center">
            <h4>Interpolated Value: <span className="text-primary">{interpolatedValue}</span></h4>
          </div>
        )}

        {/* กราฟแสดงผล */}
        <LineChart width={500} height={300} data={chartData} className="mx-auto">
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
