import { useState, useEffect } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Form from './components/Form';

function App() {

  const [articles, setArticles] = useState([]);
  const [editedArticle, setEditedArticle] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get", {
      "method": "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .catch(error => console.log(error))
  }, [])

  const editArticle = (article) => {
    // console.log("Hello, wor")
    setEditedArticle(article);
  }

  const updatedData = (article) => {
    const new_article = articles.map(my_article => {
      if (my_article.id === article.id) {

        return article;
      }
      else {

        return my_article;
      }
      setArticles(new_article);
    })
  }
  return (
    <div className="App">
      <h1>Flask and ReacyJS</h1>
      <ArticleList articles={articles} editArticle={editArticle}></ArticleList>

      {editedArticle ? <Form article={editedArticle} updatedData={updatedData} /> : null}
    </div>
  );
}

export default App;
