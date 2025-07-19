import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();

  return (
    <div>
      <p>width : {windowSize.width}</p>
      <p>hight : {windowSize.height}</p>
    </div>
  );
}
