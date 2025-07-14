import "./style.css";
import useLocalStorage from "./localStorage";
export default function DarkMood() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleChangeTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    console.log(theme);
  }
  return (
    <div className="light-dark-mood" data-theme={theme}>
      <div className="container">
        <h1>hello world!</h1>
        <button
          onClick={() => {
            handleChangeTheme();
          }}
        >
          ChangeTheme
        </button>
      </div>
    </div>
  );
}
