import { css, element } from "uebersicht";

const container = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "rgb(47,52,63)",
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  paddingRight: 20,
  paddingLeft: 20
});

const text = css({
  padding: 0,
  fontSize: 13,
  margin: 0
});

const connected = css({
  color: "#72ee7a"
});

const notConnected = css({
  color: "#FFFFFF"
});

const render = ({ error, airpods }) => {
  if (error) return null;

  return (
    <div className={container}>
      <p className={`${text} ${airpods ? connected : notConnected}`}></p>
    </div>
  );
};

export default render;
