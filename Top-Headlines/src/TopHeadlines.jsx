/* eslint-disable react/prop-types */
export default function TopHeadlines({ topHeadlines }) {
  return (
    <div className="article-list">
      {topHeadlines.map(({ urlToImage, title, url }, index) => (
        <div key={`${title}-${index}`} className="article-item">
          <img src={urlToImage} />
          <div className="article-item-body">
            <h4>{title}</h4>
            <a href={url} target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
