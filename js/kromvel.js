var my_news = [
  {
    author: 'Alex Pechkin',
    text: 'On Tuesday we go cinema'
  },
  {
    author: 'Valeriy Kosov',
    text: 'Leon has left'
  },
  {
    author: 'Josef Lee',
    text: 'Nuclear war is coming'
  }
]


var News = React.createClass({
  render: function() {
    var newsTemplate = this.props.content.map(function(item, index) {
      return (
        <div key={index}>
          <p className="news_author">{item.author}:</p>
          <p className="news_text">{item.text}</p>
        </div>
      );
    });
    console.log(newsTemplate);
    return (
      <div className="news">
        {newsTemplate}
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Hello ebat, ya tut news otobrazhayu
        <News content={my_news}/>
        <Comments />
      </div>
    );
  }
});

var Comments = React.createClass({
  render: function() {
    return (
      <div className="comments">
        Da hule tut kommentirovar-to
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
