import "./Clients.scss";
import Clients1 from "../Img/clients4.png";
import Clients2 from "../Img/clients3.png";
import Clients3 from "../Img/clients2.png";
import Clients4 from "../Img/clients1.png";
import Clients5 from "../Img/clients.png";

export default function Clients() {
  const images = [
    {
      id: 0,
      title: Clients1,
    },

    {
      id: 1,
      title: Clients2,
    },

    {
      id: 2,
      title: Clients3,
    },

    {
      id: 3,
      title: Clients4,
    },

    {
      id: 4,
      title: Clients5,
    },
  ]
  return (
    <section className="clients">
      <div className="container">
        <p className="clients__text">OUR TRUSTED CLIENTS</p>
        <div className="our__flex">
          {images.map((todo) => (
            <a href="http://localhost:3000/" key={todo.id}>
              <img src={todo.title} alt="img" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
