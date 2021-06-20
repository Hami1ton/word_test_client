import * as React from 'react';
import ApiRequestUtil from '../../util/ApiRequestUtil';

export interface IWordTest {
  problems: Array<Array<String>>;
}

class WordTest extends React.Component<IWordTest> {

  noItemRenderer() {
    return <div></div>
  }

  problemListRenderer() {
    return (
      <div className="WordTest">
        WordTest開始
        {this.props.problems}
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
