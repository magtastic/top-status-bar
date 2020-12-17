import { run, css } from "uebersicht";
import Spaces from "./components/spaces.jsx";
import Clock from "./components/clock.jsx";
import Airpods from "./components/airpods.jsx";
import Keyboard from "./components/keyboard.jsx";

const container = css({
  position: "fixed",
  backgroundColor: "rgb(47,52,63)",
  height: 23,
  alignItems: "center",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  overflow: "hidden",
  justifyContent: "space-between",
  fontFamily: "Hack Nerd Font"
});

const rightContainer = css({
  display: "flex",
  flexDirection: "row"
});

export const command = `
YABAI=$(./top-status-bar/scripts/spaces.sh);
AIRPODS=$(./top-status-bar/scripts/airpods.sh);
KEYBOARD=$(./top-status-bar/scripts/keyboard.sh);

echo $(cat <<-EOF
  { "yabai": $YABAI, "airpods": $AIRPODS, "keyboard": $KEYBOARD } 
EOF);
`;

const result = (data, key) => {
  try {
    return JSON.parse(data)[key];
  } catch (e) {
    console.log(e);
    return "";
  }
};

export const updateState = (nextState, previousState) => {
  try {
    const fixedSpaces = nextState.output.replace('"spaces":,', '"spaces":[],');
    const yabai = result(fixedSpaces, "yabai");
    const airpods = result(fixedSpaces, "airpods");
    const keyboard = result(fixedSpaces, "keyboard");
    if (
      yabai === "" ||
      yabai.spaces === "" ||
      yabai.spaces.length === 0 ||
      nextState.error
    ) {
      return previousState;
    }
    return { ...nextState, yabai, airpods, keyboard };
  } catch (e) {
    console.log(e);
    return previousState;
  }
};

export const render = ({ output, error, yabai, airpods, keyboard }) => {
  if (error) {
    return (
      <div className={container}>
        <p>{String(error)}</p>
      </div>
    );
  }

  return (
    <div className={container}>
      <Spaces yabai={yabai} />
      <div className={rightContainer}>
        <Clock />
        <Keyboard keyboard={keyboard} />
        <Airpods airpods={airpods} />
      </div>
    </div>
  );
};

export default null;
