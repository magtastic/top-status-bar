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

const active = css({
  fontSize: 13,
  fontWeight: "500",
  color: "#72ee7a",
  padding: 0,
  margin: 0
});

const container = css({
  display: "flex",
  borderWidth: 2,
  backgroundColor: "rgb(35,37,47)",
  borderRadius: 5,
  alignItems: "center",
  paddingRight: 20,
  paddingLeft: 20,
  flexDirection: "row"
});

const render = ({ error, spaces = [] }) => {
  if (error) return <p>some error...</p>;
  if (!spaces || spaces.length === 0) return null;

  return (
    <div className={container}>
      {spaces.map((space, index) => (
        <div
          className={
            index === spaces.length - 1
              ? spaceContainerNoMargin
              : spaceContainer
          }
        >
          <p className={space.focused ? active : text}>{space.index}</p>
          <div className={space.display === 1 ? null : underline} />
        </div>
      ))}
    </div>
  );
};

export default render;
