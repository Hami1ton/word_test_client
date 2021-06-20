import * as React from 'react';
import './index.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import WordTest from '../WordTest';
import ExamResult from '../ExamResult';
import ApiRequestUtil from '../../util/ApiRequestUtil';

class Menu extends React.Component {

  componentDidMount() {
    // 初回時にも問題を作成してpropsとして渡せるように、Menu画面レンダーに問題一覧を取得する
    this.getProblems();
  }

  problems: Array<Array<String>> = [];

  onClick = async () => {
    console.log('テストを受ける');
  }

  // サーバに問い合わせ問題を取得する
  getProblems = async () => {
    const res = await ApiRequestUtil.startTest();
    this.problems = res;
  }

  render() {
    return (
      <div className="menu">
        <p>
          Welcome To Word Test !
        </p>
        <BrowserRouter>
          <Link to="/WordTest" className="link" onClick={this.getProblems}>テストを受ける</Link><br />
          <Link to="/ExamResult" className="link">過去の結果をみる</Link><br />

          <Switch>
            <Route exact path="/WordTest" render={ () => <WordTest problems={this.problems} /> } />
            <Route exact path="/ExamResult" component={ExamResult} />
          </Switch>
        </BrowserRouter>
      </div>
    );

  }
}

export default Menu;