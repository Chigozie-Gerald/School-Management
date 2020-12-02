import React, { useState } from "react";
import "./svgResizer.css";

const SvgResizer = () => {
  const [A_value, setA] = useState(0);
  const [B_value, setB] = useState(0);
  const [C_value, setC] = useState(145);
  const [D_value, setD] = useState(128);
  const typeArr = [1, 2, 3, 4];

  const typeList = typeArr.map((elem, n) => (
    <div className="svg_edit_1 flex fd_col" key={n}>
      <div className="svg_input_div">
        <input
          type="number"
          className="svg_input"
          name={elem}
          onChange={
            n === 0
              ? (e) => setA(e.target.value)
              : n === 1
              ? (e) => setB(e.target.value)
              : n === 2
              ? (e) => setC(e.target.value)
              : n === 3
              ? (e) => setD(e.target.value)
              : 0
          }
          value={
            n === 0
              ? A_value
              : n === 1
              ? B_value
              : n === 2
              ? C_value
              : n === 3
              ? D_value
              : 0
          }
        />
      </div>
      <div className="svg_btn flex">
        <div className="svg_btn_right center box_border">
          <i
            className="material-icons keyboard_arrow_right keyboard_arrow_icon rot-90"
            onClick={
              n === 0
                ? () => setA(A_value - 1)
                : n === 1
                ? () => setB(B_value - 1)
                : n === 2
                ? () => setC(C_value - 1)
                : n === 3
                ? () => setD(D_value - 1)
                : 0
            }
          ></i>
        </div>
        <div className="svg_btn_left center box_border">
          <i
            className="material-icons keyboard_arrow_right keyboard_arrow_icon rot90"
            onClick={
              n === 0
                ? () => setA(A_value + 1)
                : n === 1
                ? () => setB(B_value + 1)
                : n === 2
                ? () => setC(C_value + 1)
                : n === 3
                ? () => setD(D_value + 1)
                : 0
            }
          ></i>
          {n}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="svg_wrapper div-width-100 flex fd_col vert_align">
      {/* svg here */}
      <div className="svg_edit">{typeList}</div>
    </div>
  );
};

export default SvgResizer;
