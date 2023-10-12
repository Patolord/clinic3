import Costas from "../../assets/costas.svg";
import Frente from "../../assets/frente.svg";

import "./Body.css";

export default function Body({ handleBodyClick }) {
  return (
    <>
      <a
        href="/#"
        onClick={(e) => {
          handleBodyClick(e, "Peito");
        }}
      >
        <svg
          className="svg1"
          width="39"
          height="71"
          viewBox="0 0 39 71"
          fill="none"
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
          width="39"
          height="71"
          fill="none"
          viewBox="0 0 39 71"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="2"
            d="M34.5 14C31.5411 10.0548 17 3.5 15.5 2.5C14 1.5 10.4359 -1.11266 7.5 2.5C5.69558 4.72038 2.26131 8.36426 1.5 17.5C1.07298 22.6242 1.15658 27.2228 1 30.5C0.423214 42.5721 0.5 43 0.5 43L7.5 57L9.5 61L12.5 65L18 70C18.618 69.6021 20 67 21 61C22.168 57.0195 23.1004 50.5681 24 46.5C24.5 40.0001 24.5 36.0307 24.5 34V34C24.5 29.538 33.125 24.5 37.5 24.5C39.5 23 37.5 18 34.5 14Z"
            stroke="black"
          />
        </svg>
      </a>
      <img className="frente" src={Frente} alt="frente" />
      <img className="costas" src={Costas} alt="costas" />
    </>
  );
}
