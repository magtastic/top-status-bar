import { css, element } from "uebersicht";

const container = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
});

const timeText = css({
  color: "white",
  padding: 0,
  fontSize: 13,
  margin: 0
});

const dateText = css({
  color: "white",
  padding: 0,
  paddingLeft: 5,
  fontSize: 13,
  margin: 0
});

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const render = ({ error }) => {
  if (error) return <p>some error...</p>;

  const now = new Date();

  return (
    <div className={container}>
      <p className={timeText}>{`${now.getHours()}:${now.getMinutes()} `}</p>
      <p className={dateText}>
        {` (${now.getDate()}. ${MONTHS[now.getMonth()]})`}
      </p>
    </div>
  );
};

export default render;
