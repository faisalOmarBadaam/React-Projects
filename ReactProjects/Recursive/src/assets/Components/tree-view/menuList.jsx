import MenuItem from "./menuItem";
import "./style.css";
export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list">
      {list && list.length > 0
        ? list.map((item, index) => <MenuItem key={index} item={item} />)
        : null}
    </ul>
  );
}
