import React from "react";
import Card from "./tarjeta";

import image1 from "../assets/img1.png";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.png";

const info = [
  {
    id: 1,
    titulo: "Tecnologías WEB3",
    image: image1,
    url: "https://getbootstrap.com/",
  },
  {
    id: 2,
    titulo: "Netflix Down ;(",
    image: image2,
    url: "https://www.bbc.com/mundo/noticias-62230103",
  },
  {
    id: 3,
    titulo: "God Bye DIDI, UBER ?",
    image: image3,
    url: "https://expansion.mx/tecnologia/2022/06/27/uber-didi-cabify-y-beat-seran-multados-por-operar-en-aicm",
  },
  {
    id: 4,
    titulo: "Tik Tok, The New King ?",
    image: image4,
    url: "https://fortune.com/2022/07/18/instagram-tiktok-wreaking-havoc-finances-happiness/",
  },
];

function tarjetas() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {info.map((dato) => (
          <div className="col-md-4" key={dato.id}>
            <Card
              title={dato.titulo}
              imgsrc={dato.image}
              url={dato.url}
              text={dato.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default tarjetas;
