import * as React from 'react';
import ApiRequestUtil from '../../util/ApiRequestUtil';

class WordTest extends React.Component {

  problems!: Array<any>;

  getProblems = async () => {
    const res = await ApiRequestUtil.startTest();
    this.problems = res;
  }

  render() {
    // 問題を取得
    this.getProblems();
    console.log(this.problems);
    return (
      <div className="WordTest">
        WordTest開始
        {this.problems}
      </div>
    );

  }
}

export default WordTest;
