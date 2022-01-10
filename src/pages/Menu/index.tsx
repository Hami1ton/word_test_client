import * as React from 'react';
import './index.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import TakeExam from '../TakeExam';
import ExamResult from '../ExamResult';
import LoginStore from '../../core/store/LoginStore';

export interface IMenu {
  loginStore: LoginStore;
}

class Menu extends React.Component<IMenu> {

  render() {
    return (
      <div className="menu">
        <p>
          Welcome To Word Test !
        </p>
        <BrowserRouter>
          <Link to="/TakeExam" className="link" >テストを受ける</Link><br />
          <Link to="/ExamResult" className="link">過去の結果をみる</Link><br />

          <Switch>
            <Route exact path="/TakeExam" render={ () => <TakeExam loginStore={this.props.loginStore} /> } />
            <Route exact path="/ExamResult" render={() => <ExamResult loginStore={this.props.loginStore} /> } />
          </Switch>
        </BrowserRouter>
      </div>
    );

  }
}

export default Menu;