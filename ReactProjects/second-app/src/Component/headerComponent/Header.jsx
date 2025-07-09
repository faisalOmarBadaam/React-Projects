import "./header.css";
export default function Header({ name, email, age, children, isShowed }) {
  if (isShowed == false) {
    return null;
  }
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <div>{children}</div>
    </div>
  );
}
