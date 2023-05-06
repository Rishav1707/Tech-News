import { useEffect, useState } from "react";
import axios from "axios";
import TopHeadlines from "./TopHeadlines";
import news from "./assets/news.png";
import "./App.css";

const AUTH_ENDPOINT = "https://newsapi.org/v2/top-headlines?";
const COUNTRY = "in";
const PAGESIZE = "100";
const APIKEY = "976540986a6b48cd9b24fdadfd866626";

function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTopHeadlines() {
      try {
        const response = await axios.get(
          `${AUTH_ENDPOINT}country=${COUNTRY}&pageSize=${PAGESIZE}&apiKey=${APIKEY}`
        );
        setTopHeadlines(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    getTopHeadlines();
  }, []);

  return (
    <>
      <h1>
        Top Headlines<img src={news} alt="News Logo" className="HeadLogo"></img>
      </h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <TopHeadlines topHeadlines={topHeadlines} />
      )}
    </>
  );
}

export default App;
