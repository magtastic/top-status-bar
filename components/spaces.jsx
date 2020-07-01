import { css, element } from "uebersicht";

const spaceContainer = css({
  paddingRight: 10
});
const spaceContainerNoMargin = css({ marginLeft: 0 });

const underline = css({
  width: "100%",
  height: 1,
  backgroundColor: "white"
});

const text = css({
  fontSize: 13,
  color: "white",
  padding: 0,
  margin: 0
});

const focusedWindow = css({
  fontWeight: "500",
  color: "#72ee7a"
});

const visibleWindow = css({
  fontWeight: "500",
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

const render = ({ error, spaces }) => {
  const convertedSpaces = spaces === "" ? [] : spaces;
  if (error) return <p>some error...</p>;

  return (
    <div className={container}>
      {convertedSpaces.map((space, index) => (
        <div
          key={space.id}
          className={
            index === spaces.length - 1
              ? spaceContainerNoMargin
              : spaceContainer
          }
        >
          <p
            className={`${text} ${space.focused ? focusedWindow : ""} ${
              space.visible && !space.focused ? visibleWindow : ""
            } 
            `}
          >
            {space.index}
          </p>
          <div className={space.display === 1 ? null : underline} />
        </div>
      ))}
    </div>
  );
};

export default render;
