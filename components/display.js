import React from 'react';

class Display extends React.Component {
  render() {
    const {
      zero,
      url,
      article,
      keyValue,
      headline,
      className,
      img,
      isLoaded,
      error,
    } = this.props;
    if (zero && isLoaded) {
      return <h1>No Results...Please search for something else...</h1>;
    } else if (error) {
      return <h1>Error Loading:{error.message}</h1>;
    } else if (!isLoaded) {
      return null;
    } else {
      return (
        <div key={keyValue} className={className}>
          <h1>{headline}</h1>
          <img src={`http://nytimes.com/${img}`} alt={headline}></img>
          <p>{article}</p>
          <a href={url}>Read Source</a>
        </div>
      );
    }
  }
}

export default Display;
