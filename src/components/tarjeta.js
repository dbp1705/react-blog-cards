import React from "react";
import PropTypes from "prop-types";

import "./tarjetas.css";

function tarjeta({ title, imgsrc, text, url }) {
  return (
    <div className="card bg-dark animate__animated animate__fadeInDownBig mt-5">
      <div className="overflow">
        <img
          src={imgsrc}
          className="card-img-top img-responsive d-flex"
          alt="..."
        ></img>
      </div>

      <div className="card-body text-light">
        <h4 className="card-title text-center">{title}</h4>
        <p className="card-text text-secondary text-break">
          {text
            ? text
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper molestie lorem, in dictum ex malesuada eu. Curabitur ornare leo eget sagittis pretium. Donec rutrum molestie felis sit amet dictum. Cras vestibulum ac lectus ac posuere. Vestibulum aliquet, sapien eget sodales lobortis, magna lacus accumsan tellus, in commodo felis tortor sit amet nisi. In tincidunt, tellus et consequat rhoncus, metus orci malesuada quam, vitae pretium purus nunc sit amet velit. Curabitur erat sapien, sagittis ut posuere at, tincidunt laoreet odio."}
        </p>
        <a
          href={url}
          className="btn btn-outline-light rounded-3"
          target="_blank"
        >
          More Info...
        </a>
      </div>
    </div>
  );
}

tarjeta.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default tarjeta;
