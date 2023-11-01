import { useState } from "react";

import Costas from "../../assets/costas.svg";
import Frente from "../../assets/frente.svg";

import "./Body.css";

export default function Body({ setPains, setValue }) {
  const [fillColors, setFillColors] = useState({
    Peito: "none",
    Perna: "none",
  });

  const handleBodyClick = (e, name) => {
    e.preventDefault();

    setFillColors((prevFillColors) => ({
      ...prevFillColors,
      [name]: prevFillColors[name] === "none" ? "green" : "none",
    }));

    setPains((prevPains) => {
      const isChecked = !prevPains.includes(name);

      switch (name) {
        case "Peito":
          if (isChecked) {
            setValue("Pains", [...prevPains, "Peito"]);

            return [...prevPains, "Peito"];
          } else {
            setValue(
              "Pains",
              prevPains.filter((item) => item !== "Peito")
            );

            return prevPains.filter((item) => item !== "Peito");
          }

        case "Perna":
          if (isChecked) {
            setValue("Pains", [...prevPains, "Perna"]);

            return [...prevPains, "Perna"];
          } else {
            setValue(
              "Pains",
              prevPains.filter((item) => item !== "Perna")
            );

            return prevPains.filter((item) => item !== "Perna");
          }

        default:
          return prevPains;
      }
    });
  };

  return (
    <div className="right-col-6">
      <a
        href="/#"
        onClick={(e) => {
          handleBodyClick(e, "Peito");
        }}
      >
        <svg
          className="svg1"
          width="35"
          height="55"
          viewBox="0 0 39 71"
          fill={fillColors.Peito}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="2"
            d="M34.5 14C31.5411 10.0548 17 3.5 15.5 2.5C14 1.5 10.4359 -1.11266 7.5 2.5C5.69558 4.72038 2.26131 8.36426 1.5 17.5C1.07298 22.6242 1.15658 27.2228 1 30.5C0.423214 42.5721 0.5 43 0.5 43L7.5 57L9.5 61L12.5 65L18 70C18.618 69.6021 20 67 21 61C22.168 57.0195 23.1004 50.5681 24 46.5C24.5 40.0001 24.5 36.0307 24.5 34V34C24.5 29.538 33.125 24.5 37.5 24.5C39.5 23 37.5 18 34.5 14Z"
            stroke="black"
          />
        </svg>
      </a>
      <a
        href="/#"
        onClick={(e) => {
          handleBodyClick(e, "Perna");
        }}
      >
        <svg
          className="svg2"
          width="25"
          height="65"
          fill={fillColors.Perna}
          viewBox="0 0 28 76"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 18.5274L7.5 5.02744L15.5 3.02744L23.5 1.02744C27.5 0.027438 26.8333 26.6108 26 40.0274L18.5 68.5274L15 74.5274H4.5L1 68.5274V35.5274V18.5274Z"
            stroke="black"
          />
        </svg>
      </a>
      <img className="frente" src={Frente} alt="frente" />
      <img className="costas" src={Costas} alt="costas" />
    </div>
  );
}
