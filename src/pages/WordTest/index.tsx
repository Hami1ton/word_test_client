import * as React from 'react';
import ApiRequestUtil from '../../util/ApiRequestUtil';

class WordTest extends React.Component {

  render() {
    ApiRequestUtil.startTest();
    return (
      <div className="WordTest">
        WordTest開始
      </div>
    );

  }
}

export default WordTest;
