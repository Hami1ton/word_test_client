import { observable, action, makeObservable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { ProblemInfo } from '../../core/component/data/ProblemInfo';
import Problem from '../../core/component/Problem';
import LoginStore from '../../core/store/LoginStore';
import ApiRequestUtil from '../../util/ApiRequestUtil';

export interface ITakeExam {
  loginStore: LoginStore;
  problems: Array<ProblemInfo>;
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
    const listItems = this.props.problems.map((problem) => (
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
    if (this.props.problems === undefined) {
      // URL直うちされるなどして、問題が取得できていない場合には何も表示しない
      return this.noItemRenderer();
    }
    return this.problemListRenderer();
  }
}

export default TakeExam;
