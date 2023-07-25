const getNews = async () => {
      const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=c8f3a1bd29f44d44a0d9f06a9c2e55e9");
      const data = await response.json();
      return data.articles;
}


export default getNews;
