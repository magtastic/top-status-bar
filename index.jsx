import { run, css } from "uebersicht";
import Spaces from "./components/spaces.jsx";
import Clock from "./components/clock.jsx";

const container = css({
  position: "fixed",
  backgroundColor: "rgb(35,37,47)",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  overflow: "hidden",
  justifyContent: "space-between",
  fontFamily: "Hack Nerd Font"
});

export const command = `
YABAI=$(./top-status-bar/scripts/spaces.sh);

echo $(cat <<-EOF
  { "yabai": $YABAI } 
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
    console.log({ nextState, previousState });
    const fixedSpaces = nextState.output.replace('"spaces":,', '"spaces":[],');
    const yabai = result(fixedSpaces, "yabai");
    if (yabai.spaces === "" || nextState.error) {
      return previousState;
    }
    return { ...nextState, yabai };
  } catch (e) {
    console.log(e);
    return previousState;
  }
};

export const render = ({ output, error, yabai }) => {
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
      <Clock />
    </div>
  );
};

export default null;
