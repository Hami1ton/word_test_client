import * as React from 'react';
import LoginStore from '../../core/store/LoginStore';
import ApiRequestUtil from '../../util/ApiRequestUtil';
import { ExamResultInfo } from './ExamResultInfo';


export interface IExamResult {
  loginStore: LoginStore;
}

interface ExamResultState {
  examResultList: Array<ExamResultInfo>;
}

class ExamResult extends React.Component<IExamResult, ExamResultState> {

  constructor(props: IExamResult) {
    super(props); 
    this.state = {examResultList: []};
  }

  getExamResultList = async () => {
    const res = await ApiRequestUtil.getExamResultList(this.props.loginStore.userId);
    this.setState({
      examResultList: res
    })
  }

  render() {
    const listItems = this.state.examResultList?.map((result) => (
      <div key={result.id}> | {result.score} | {result.userId} | </div> 
    ));

    return (
      <div className="ExamResult">
        <button onClick={this.getExamResultList}>
            取得
        </button>
        {listItems}
      </div>

    );

  }
}

export default ExamResult;
