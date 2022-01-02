import * as React from 'react';
import './index.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import TakeExam from '../TakeExam';
import ExamResult from '../ExamResult';
import ApiRequestUtil from '../../util/ApiRequestUtil';
import { ProblemInfo } from '../../core/component/data/ProblemInfo';

class Menu extends React.Component {

  componentDidMount() {
    // 初回時にも問題を作成してpropsとして渡せるように、Menu画面レンダー時に問題一覧を取得する
    this.getProblems();
  }

  // [英単語id, 英単語, 肢1, 肢2, 肢3]のリストのリスト
  problems: Array<ProblemInfo> = [];

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
          <Link to="/TakeExam" className="link" onClick={this.getProblems}>テストを受ける</Link><br />
          <Link to="/ExamResult" className="link">過去の結果をみる</Link><br />

          <Switch>
            <Route exact path="/TakeExam" render={ () => <TakeExam problems={this.problems} /> } />
            <Route exact path="/ExamResult" component={ExamResult} />
          </Switch>
        </BrowserRouter>
      </div>
    );

  }
}

export default Menu;