var div = React.DOM.div
var h1 = React.DOM.h1

// every component must have a render method that returns markup
// and must be a pure function ie returns the same value every time.
var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,  // this refers to createClass, props reads properties created by it's parents and cannot modify, title is refering to key in object.
        h1({style: {color: this.props.color, fontweight: 'bold' } }, this.props.title)
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
          MyTitleFactory({title: 'props are the best', color: 'tomato'}),
          MyTitleFactory({title: 'props are the worst', color: 'blue'}),
          MyTitleFactory({title: 'props are the Mehhh', color: 'peru'}),
          MyTitleFactory({title: 'props are the Whatever', color: 'mediumaquamarine'})
        ]
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
