import "./Header.scss";
import logo from "../Img/Logo.svg";
import locate from "../Img/location.png";
import tel from "../Img/phone.png";
import email from "../Img/email.png";
import React from "react";

export default function Header() {
  const todos = [
    {
      id: 0,
      title: "Features",
    },
    {
      id: 1,
      title: "Pricing & Plans",
    },
    {
      id: 2,
      title: "Support",
    },
    {
      id: 3,
      title: "About Us",
    },
  ];
  const reef = React.useRef();
  
  return (
    <header className="header">
      <div className="container">
        <a className="logo__link" href="http://localhost:3000/">
          <img src={logo} alt="logo" width={189} height={40} />
        </a>

        <ul className="header__list">
          {todos.map((todo) => (
            <li className="header__item" key={todo.id}>
              <a className="header__link" href="http://localhost:3000/">
                {todo.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="header__btn"
          onClick={() => {
            reef.current.classList.add("modal__block");
          }}
        >
          Contact Us
        </button>

        <div className="header__modal " ref={reef}>
          <button
            className="modal__exit"
            onClick={() => {
              reef.current.classList.remove("modal__block");
            }}
          >
            X
          </button>
          <h1 className="modal__title">Contact Us</h1>
          <p className="modal__tel">
            <img src={locate} alt="tel" width={24} height={24} />
            Dhaka, Bangladesh
          </p>{" "}
          <p className="modal__tel">
            <img src={tel} alt="tel" width={24} height={24} />
            0943833399
          </p>{" "}
          <p className="modal__tel">
            <img src={email} alt="tel" width={24} height={24} />
            support@proxylab.com
          </p>
        </div>
      </div>
    </header>
  );
}
