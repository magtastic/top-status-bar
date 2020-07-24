import { css, element } from "uebersicht";

const spaceContainer = css({
  display: "flex",
  flexDirection: "row",
  margin: 0
});

const text = css({
  fontSize: 17,
  padding: 0,
  margin: 0,
  paddingLeft: 10,
  paddingRight: 13
});

const textWithNoPadding = css({
  fontSize: 17,
  padding: 0,
  margin: 0
});

const focusedWindow = css({
  color: "#72ee7a"
});

const unfocusedWindow = css({
  color: "#FFFFFF"
});

const visibleWindow = css({
  color: "rgba(0,165,249,1)"
});

const container = css({
  display: "flex",
  borderWidth: 2,
  backgroundColor: "rgb(35,37,47)",
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  alignItems: "center",
  paddingRight: 20,
  paddingLeft: 20,
  flexDirection: "row"
});

// FIND MORE ICONS AT: https://www.nerdfonts.com/cheat-sheet
const ICONS_FOR_APPLICATIONS = {
  Slack: "",
  Safari: "",
  Code: "",
  Xcode: "",
  Mail: "",
  Simulator: "",
  "Google Chrome": "",
  iTerm2: "",
  Calendar: "",
  Übersicht: "",
  Spotify: "",
  Figma: "",
  "zoom.us": "",
  "MongoDB Compass": "",
  Finder: "",
  "Keychain Access": ""
};

const getCharForSpace = window => {
  if (!window) {
    return "";
  }

  if (ICONS_FOR_APPLICATIONS[window.app]) {
    return ICONS_FOR_APPLICATIONS[window.app];
  }

  console.log("Unknow application.. maybe set a icon for it?");
  console.log(`Application name: ${window.app}`);
  return window.space;
};

const render = ({ error, yabai }) => {
  if (error || !yabai) return <p>some error...</p>;

  return (
    <div className={container}>
      {yabai.spaces.map((space, index) => {
        const windowsForSpace = yabai.windows.filter(
          window => window.space === space.index
        );
        let biggestWidnowInSpace = windowsForSpace[0];
        for (let i = 0; i < windowsForSpace.length; i++) {
          const size = windowsForSpace[i].frame.w * windowsForSpace[i].frame.h;
          if (
            size >
            biggestWidnowInSpace.frame.w * biggestWidnowInSpace.frame.h
          ) {
            biggestWidnowInSpace = windowsForSpace[i];
          }
        }

        return (
          <div key={space.id} className={spaceContainer}>
            <p
              className={`${text} ${
                space.focused ? focusedWindow : unfocusedWindow
              }`}
            >
              {getCharForSpace(biggestWidnowInSpace)}
            </p>
            {yabai.spaces[index + 1] &&
              yabai.spaces[index + 1].display !== space.display && (
                <p className={`${textWithNoPadding} ${unfocusedWindow}`}>[</p>
              )}
          </div>
        );
      })}
      {yabai.displays.length > 1 && (
        <p className={`${textWithNoPadding} ${unfocusedWindow}`}>]</p>
      )}
    </div>
  );
};

export default render;
