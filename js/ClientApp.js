import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='Hello React' color='Tomato' />
        <MyTitle title='Hello Mark' color='rebeccaPurple' />
        <MyTitle title='Hello Tina' color='mediumaquamarine' />
        <MyTitle title='Hello Reuben' color='purple' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
