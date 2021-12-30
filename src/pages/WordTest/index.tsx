import { observable, action, makeObservable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { ProblemInfo } from '../../core/component/data/ProblemInfo';
import Problem from '../../core/component/Problem';
import ApiRequestUtil from '../../util/ApiRequestUtil';

export interface IWordTest {
  problems: Array<ProblemInfo>;
}

interface IState {
  answers: Map<String,String>; // キー: 英単語ID, 値: 選択した回答
}

@observer
class WordTest extends React.Component<IWordTest, IState> {

  @observable
  score: number = 0;

  @observable
  answerIsSubmitted: boolean = false;

  constructor(props: IWordTest) {
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
    const res = await ApiRequestUtil.submitAnswer(this.state.answers);
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
      <li key={problem.word}>
        <Problem problem={problem} onSelected={this.onSelectAnswer}/>
      </li>
    ));

    return (
      <div className="WordTest">
        WordTest開始
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

export default WordTest;
