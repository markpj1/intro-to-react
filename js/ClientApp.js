var div = React.DOM.div
var h1 = React.DOM.h1

// every component must have a render method that returns markup
// and must be a pure function ie returns the same value every time.
var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1(null, 'Ooops I did it again')
      )
    )
  }
})
// React.createFactory an convenience method that passes components multiple times with passed in value.
var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
        div(null, [
          MyTitleFactory(null),
          MyTitleFactory(null),
          MyTitleFactory(null),
          MyTitleFactory(null)
        ]
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
