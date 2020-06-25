import { run, css } from "uebersicht";
import Spaces from "./components/spaces.jsx";
import Spotify from "./components/Spotify.jsx";
import Clock from "./components/clock.jsx";

const container = css({
  position: "fixed",
  top: 10,
  left: 15,
  right: 15,
  display: "flex",
  overflow: "hidden",
  justifyContent: "space-between",
  padding: 3,
  fontFamily: "Fira Code"
});

export const command = `
SPACES=$(./top-status-bar/scripts/spaces.sh);
SPOTIFY=$(./top-status-bar/scripts/spotify.sh);

echo $(cat <<-EOF
  { "spaces": $SPACES, "spotify": $SPOTIFY } 
EOF);
`;

const result = (data, key) => {
  try {
    return JSON.parse(data)[key];
  } catch (e) {
    return "";
  }
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
      <Spotify spotify={result(output, "spotify")} />
      <Clock />
    </div>
  );
};

export default null;
