import { css, element } from "uebersicht";

const spaceContainer = css({
  marginLeft: 10
});

const underline = css({
  width: "100%",
  height: 1,
  backgroundColor: "white"
});

const text = css({
  fontSize: 8,
  color: "white",
  padding: 0,
  margin: 0
});

const active = css({
  fontSize: 9,
  fontWeight: "500",
  color: "#72ee7a",
  padding: 0,
  margin: 0
});

const container = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const render = ({ error, spotify }) => {
  if (error) return <p>some error...</p>;
  if (!spotify) return null;

  return (
    <div className={container}>
      <p className={active}>{spotify.track} </p>
      <p className={text}>{spotify.artist || spotify.album} </p>
    </div>
  );
};

export default render;
