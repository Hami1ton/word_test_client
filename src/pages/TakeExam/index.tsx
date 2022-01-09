import { observable, action, makeObservable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { ProblemInfo } from '../../core/component/data/ProblemInfo';
import Problem from '../../core/component/Problem';
import LoginStore from '../../core/store/LoginStore';
import ApiRequestUtil from '../../util/ApiRequestUtil';

export interface ITakeExam {
  loginStore: LoginStore;
}

interface IState {
  answers: Map<String,String>; // キー: 英単語ID, 値: 選択した回答
}

@observer
class TakeExam extends React.Component<ITakeExam, IState> {

  @observable
  score: number = 0;

  @observable
  answerIsSubmitted: boolean = false;

  // [英単語id, 英単語, 肢1, 肢2, 肢3]のリストのリスト
  @observable
  problems: Array<ProblemInfo> = [];

  @action
  componentDidMount() {
    this.getProblems();
  }

  constructor(props: ITakeExam) {
    super(props); 
    makeObservable(this);
    this.state = {
      answers: new Map(),
    };
  }

  noItemRenderer() {
    return <div></div>
  }

  // サーバに問い合わせ問題を取得する
  getProblems = async () => {
    const res = await ApiRequestUtil.startTest();
    this.problems = res;
  }

  submitAnswer = async () => {
    const res = await ApiRequestUtil.submitAnswer(this.props.loginStore.userId, this.state.answers);
    this.setScore(res);
    this.changeSubmitFlag();
  }

  @action
  setScore = (score: number) => {
    this.score = score;
  }

  @action
  changeSubmitFlag= () => {
    this.answerIsSubmitted = true;
  }

  onSelectAnswer = (answer : Array<String>) => {
    this.state.answers.set(answer[0], answer[1]);
  }

  problemListRenderer() {
    const listItems = this.problems.map((problem) => (
      <li key={problem.id}>
        <Problem problem={problem} onSelected={this.onSelectAnswer}/>
      </li>
    ));

    return (
      <div className="TakeExam">
        テスト開始
        <ul>{listItems}</ul>
        <button onClick={this.submitAnswer}>
            採点
        </button>
        {this.answerIsSubmitted
            ? <div>テスト結果: {this.score} / 5 </div>
            : <div></div>
        }
      </div>
    );
  }

  render() {
    if (this.problems === undefined) {
      // URL直うちされるなどして、問題が取得できていない場合には何も表示しない
      return this.noItemRenderer();
    }
    return this.problemListRenderer();
  }
}

export default TakeExam;
