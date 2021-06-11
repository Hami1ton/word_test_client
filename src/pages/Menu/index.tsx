import * as React from 'react';
import './index.css';

class Menu extends React.Component {

  onClick = async () => {
    console.log('テストを受ける');
  }

  render() {
    return (
      <div className="menu">
        <p>
          Welcome To Word Test !
        </p>
          <button
            type="button"
            className="button-like-link"
            onClick={this.onClick}
          >
            テストを受ける
          </button>
          <br></br>
          <button
            type="button"
            className="button-like-link"
            onClick={this.onClick}
          >
            過去の結果をみる
          </button>
          <br></br>
          <button
            type="button"
            className="button-like-link"
            onClick={this.onClick}
          >
            hoge
          </button>
      </div>
    );

  }
}

export default Menu;
