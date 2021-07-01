import * as React from 'react';
import Problem from '../../core/component/Problem';
import ApiRequestUtil from '../../util/ApiRequestUtil';

export interface IWordTest {
  problems: Array<Array<String>>;
}

interface IState {
  answers: Array<Array<String>>;
}

class WordTest extends React.Component<IWordTest, IState> {

  constructor(props: IWordTest) {
    super(props); 
    this.state = {
      answers: [],
    };
  }

  noItemRenderer() {
    return <div></div>
  }


  submitAnswer = async () => {
    const res = await ApiRequestUtil.submitAnswer();

  }

  onSelectAnswer = (answer : Array<String>) => {
    console.log('hoge');
    this.state.answers.push(answer);
    console.log(this.state.answers);
  }

  problemListRenderer() {
    // TODO stateか何かに答えを詰めてAPIに送るようにする
    const listItems = this.props.problems.map((problem) => (
      <li key={problem[0].toString()}>
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
