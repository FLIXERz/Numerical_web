import React, { useState, useEffect } from 'react';

export default function Input2x2({ setMatrix }) {
  const [x11, setX11] = useState(0);
  const [x12, setX12] = useState(0);
  const [x21, setX21] = useState(0);
  const [x22, setX22] = useState(0);
  const [y1, setY1] = useState(0);
  const [y2, setY2] = useState(0);

  useEffect(() => {
    setMatrix([
      [x11, x12, y1],
      [x21, x22, y2]
    ]);
  }, [x11, x12, y1, x21, x22, y2, setMatrix]);

  return (
    <div>
      <h4>2x2 Matrix Input</h4>
      <div>
        <input type="number" value={x11} onChange={(e) => setX11(parseFloat(e.target.value))} placeholder="x11" />
        <input type="number" value={x12} onChange={(e) => setX12(parseFloat(e.target.value))} placeholder="x12" />
        <input type="number" value={y1} onChange={(e) => setY1(parseFloat(e.target.value))} placeholder="y1" />
      </div>
      <div>
        <input type="number" value={x21} onChange={(e) => setX21(parseFloat(e.target.value))} placeholder="x21" />
        <input type="number" value={x22} onChange={(e) => setX22(parseFloat(e.target.value))} placeholder="x22" />
        <input type="number" value={y2} onChange={(e) => setY2(parseFloat(e.target.value))} placeholder="y2" />
      </div>
    </div>
  );
}
