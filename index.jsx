import { run, css } from "uebersicht";
import Spaces from "./components/spaces.jsx";
import Clock from "./components/clock.jsx";

const container = css({
  position: "fixed",
  top: 0,
  left: 15,
  right: 15,
  display: "flex",
  overflow: "hidden",
  justifyContent: "space-between",
  fontFamily: "Fira Code"
});

export const command = `
SPACES=$(./top-status-bar/scripts/spaces.sh);

echo $(cat <<-EOF
  { "spaces": $SPACES } 
EOF);
`;

const result = (data, key) => {
  try {
    return JSON.parse(data)[key];
  } catch (e) {
    return "";
  }
};

export const updateState = (nextState, previousState) => {
  const spaces = result(nextState.output, "spaces");
  if (spaces === "" || nextState.error) {
    return previousState;
  }
  return nextState;
};

export const render = ({ output, error }) => {
  if (error) {
    return (
      <div className={container}>
        <p>error</p>
      </div>
    );
  }

  return (
    <div className={container}>
      <Spaces spaces={result(output, "spaces")} />
      <Clock />
    </div>
  );
};

export default null;
