import { useEffect, useState } from "react";
import axios from "axios";
import TopHeadlines from "./TopHeadlines";
import news from "./assets/news.png";
import "./App.css";

const APIKEY = import.meta.env.VITE_APIKEY;
const APIHOST = import.meta.env.VITE_APIHOST;
const URL = "https://news-api14.p.rapidapi.com/top-headlines";

function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `${URL}`,
      params: {
        country: "in",
        language: "en",
      },
      headers: {
        "X-RapidAPI-Key": `${APIKEY}`,
        "X-RapidAPI-Host": `${APIHOST}`,
      },
    };

    async function getTopHeadlines() {
      try {
        const response = await axios.request(options);
        setTopHeadlines(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
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
