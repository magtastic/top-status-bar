import { css, element } from "uebersicht";

const container = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "rgb(47,52,63)",
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  paddingRight: 10,
  paddingLeft: 10
});

const normalText = css({
  color: "white",
  padding: 0,
  fontSize: 13,
  margin: 0
});

const KEYBOARD_MAP = {
  "com.apple.keylayout.ABC": "ABC",
  "com.apple.keylayout.Icelandic": "ÆJÞ"
};

const render = ({ error, keyboard }) => {
  if (error) return null;

  return (
    <div className={container}>
      <p className={normalText}>{KEYBOARD_MAP[keyboard]}</p>
    </div>
  );
};

export default render;
