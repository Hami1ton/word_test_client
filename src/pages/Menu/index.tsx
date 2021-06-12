import * as React from 'react';
import './index.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import WordTest from '../WordTest';
import ExamResult from '../ExamResult';


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
        <BrowserRouter>
          <Link to="/WordTest" className="link">テストを受ける</Link><br />
          <Link to="/ExamResult" className="link">過去の結果をみる</Link><br />

          <Switch>
            <Route exact path="/WordTest" component={WordTest} />
            <Route exact path="/ExamResult" component={ExamResult} />
          </Switch>
        </BrowserRouter>
      </div>
    );

  }
}

export default Menu;