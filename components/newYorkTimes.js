const apiKey = 'k4HlYKQm1KHDJ6aXb360eIowJyQCxGkN';
const url =
  'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json';

const NYTimes = {
  fetchCall(query, beginDate, endDate, page) {
    return fetch(
      `${url}?q=${query}&begin_date=${beginDate}&end_date=${endDate}&page=${page}&api-key=${apiKey}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return response.error;
      })
      .then(result => {
        console.log(result);
        return result.response.docs.map(
          ({ web_url, snippet, lead_paragraph, headline, _id, multimedia }) => {
            return {
              url: web_url,
              snippet: snippet,
              article: lead_paragraph,
              headline: headline.main,
              id: _id,
              img: multimedia[0]
                ? multimedia[0].url
                : 'image/2020/09/25/learning/VTS09-28-20LN/VTS09-28-20LN-videoLarge.jpg',
            };
          }
        );
      })
      .then(arr => {
        console.log(arr);
        return arr;
      })
      .catch(error => error);
  },
};

export default NYTimes;
