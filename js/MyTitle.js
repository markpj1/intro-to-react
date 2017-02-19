import React from 'react'
// every component must have a render method that returns markup
// and must be a pure function ie returns the same value every time.
var MyTitle = React.createClass({
  render: function () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style} >
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default MyTitle
