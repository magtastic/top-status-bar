import { css, element } from "uebersicht";

const render = ({ error }) => {
  if (error) return <p>some error...</p>;

  return <div>CLOCK</div>;
};

export default render;
