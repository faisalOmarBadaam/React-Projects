import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex p-4 m-0">
      <h1 className="flex-1 font-bold text-lg">Mern Blog App</h1>
      <ul className="flex list-none gap-10 font-bold text-lg cursor-pointer">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/blogs/new"}>
          <li>Add Blog</li>
        </Link>
      </ul>
    </div>
  );
}
