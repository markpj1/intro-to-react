import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div
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
