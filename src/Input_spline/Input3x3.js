import React, { useState, useEffect } from 'react';

export default function Input3x3({ setMatrix }) {
  const [x11, setX11] = useState(0);
  const [x12, setX12] = useState(0);
  const [x13, setX13] = useState(0);
  const [x21, setX21] = useState(0);
  const [x22, setX22] = useState(0);
  const [x23, setX23] = useState(0);
  const [x31, setX31] = useState(0);
  const [x32, setX32] = useState(0);
  const [x33, setX33] = useState(0);
  const [y1, setY1] = useState(0);
  const [y2, setY2] = useState(0);
  const [y3, setY3] = useState(0);

  useEffect(() => {
    setMatrix([
      [x11, x12, x13, y1],
      [x21, x22, x23, y2],
      [x31, x32, x33, y3]
    ]);
  }, [x11, x12, x13, y1, x21, x22, x23, y2, x31, x32, x33, y3, setMatrix]);

  return (
    <div>
      <h4>3x3 Matrix Input</h4>
      <div>
        <input type="number" value={x11} onChange={(e) => setX11(parseFloat(e.target.value))} placeholder="x11" />
        <input type="number" value={x12} onChange={(e) => setX12(parseFloat(e.target.value))} placeholder="x12" />
        <input type="number" value={x13} onChange={(e) => setX13(parseFloat(e.target.value))} placeholder="x13" />
        <input type="number" value={y1} onChange={(e) => setY1(parseFloat(e.target.value))} placeholder="y1" />
      </div>
      <div>
        <input type="number" value={x21} onChange={(e) => setX21(parseFloat(e.target.value))} placeholder="x21" />
        <input type="number" value={x22} onChange={(e) => setX22(parseFloat(e.target.value))} placeholder="x22" />
        <input type="number" value={x23} onChange={(e) => setX23(parseFloat(e.target.value))} placeholder="x23" />
        <input type="number" value={y2} onChange={(e) => setY2(parseFloat(e.target.value))} placeholder="y2" />
      </div>
      <div>
        <input type="number" value={x31} onChange={(e) => setX31(parseFloat(e.target.value))} placeholder="x31" />
        <input type="number" value={x32} onChange={(e) => setX32(parseFloat(e.target.value))} placeholder="x32" />
        <input type="number" value={x33} onChange={(e) => setX33(parseFloat(e.target.value))} placeholder="x33" />
        <input type="number" value={y3} onChange={(e) => setY3(parseFloat(e.target.value))} placeholder="y3" />
      </div>
    </div>
  );
}
