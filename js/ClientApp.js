var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1(null, 'Ooops I did it again')
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
        div(null,
         MyTitleFactory(MyTitle),
         MyTitleFactory(MyTitle),
         MyTitleFactory(MyTitle),
         MyTitleFactory(MyTitle)
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
