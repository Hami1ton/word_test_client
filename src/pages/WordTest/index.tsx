import * as React from 'react';
import Problem from '../../core/component/Problem';
import ApiRequestUtil from '../../util/ApiRequestUtil';

export interface IWordTest {
  problems: Array<Array<String>>;
}

class WordTest extends React.Component<IWordTest> {

  noItemRenderer() {
    return <div></div>
  }


  submitAnswer = async () => {
    const res = await ApiRequestUtil.submitAnswer();

  }

  problemListRenderer() {
    // TODO stateか何かに答えを詰めてAPIに送るようにする
    const listItems = this.props.problems.map((problem) => (
      <li key={problem[0].toString()}>
        <Problem problem={problem}/>
      </li>
    ));

    return (
      <div className="WordTest">
        WordTest開始
        <ul>{listItems}</ul>
        <button onClick={this.submitAnswer}>
            Login
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
