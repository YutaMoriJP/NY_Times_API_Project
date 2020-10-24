import React from 'react';
import Display from './display';

class HandleDisplay extends React.Component {
  render() {
    const { nyTime, isLoaded, error } = this.props;
    console.log(nyTime);
    if (nyTime.length === 0) {
      return <Display zero={true} />;
    } else {
      return (
        <div className="populate">
          {nyTime.map(({ url, snippet, article, headline, id, img }) => {
            console.log(url);
            return (
              <div key={id}>
                <Display
                  url={url}
                  headline={headline}
                  article={article}
                  snippet={snippet}
                  keyValue={id}
                  className="box"
                  img={img}
                  isLoaded={isLoaded}
                  error={error}
                />
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default HandleDisplay;
