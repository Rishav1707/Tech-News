/* eslint-disable react/prop-types */
export default function TopHeadlines({ topHeadlines }) {
  return (
    <div className="article-list">
      {topHeadlines.map(({ title, url, publisher }, index) => (
        <div key={index} className="article-item">
          <div className="article-item-body">
            <h4>{title}</h4>
            <p>by {publisher.name}</p>
            <a href={url} target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
