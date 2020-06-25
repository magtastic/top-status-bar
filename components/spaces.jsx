import { css, element } from "uebersicht";

const spaceContainer = css({
  display: "flex",
  borderWidth: 1,
  borderColor: "white",
  flexDirection: "row",
  paddingRight: 10
});

const paddingLeft = css({
  paddingLeft: 10
});

const spaceContainerNoMargin = css({
  display: "flex",
  flexDirection: "row",
  marginLeft: 0,
  borderWidth: 1,
  borderColor: "white"
});

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
  if (error) return <p>some error...</p>;

  return (
    <div className={container}>
      {spaces.map((space, index) => (
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
              space.display === 1 ? null : italic
            }
            `}
          >
            {space.index}
          </p>
          {spaces[index + 1] && spaces[index + 1].display !== space.display && (
            <p className={`${text} ${paddingLeft}`}>[</p>
          )}
        </div>
      ))}
      <p className={`${text} ${paddingLeft}`}>]</p>
    </div>
  );
};

export default render;
