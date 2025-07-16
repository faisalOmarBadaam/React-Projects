import "./style.css";
export default function Card({ data = {} }) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  return (
    <div className="card">
      <div className="image">
        <img src={data.avatar_url} alt={data.login} />
      </div>
      <div className="information">
        <a target="_blank" href={`https://github.com/${data.login}`}>
          {data.login}
        </a>
        {data.created_at && (
          <span>join on {formatter.format(new Date(data.created_at))}</span>
        )}

        <p>{`public repos : ${data.public_repos}`}</p>
        <p>{`Followers : ${data.followers}`}</p>
        <p>{`Following : ${data.following}`}</p>
      </div>
    </div>
  );
}
