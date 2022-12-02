'use strict';

function Homepage() {


  return  <React.Fragment>  <h1>welcome user</h1>
  <a href="/cards">click for cards</a>
  <img src="/static/img/balloonicorn.jpg" alt="" /></React.Fragment>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
