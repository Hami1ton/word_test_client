import * as React from 'react';
import LoginStore from '../../core/store/LoginStore';
import ApiRequestUtil from '../../util/ApiRequestUtil';
import { ExamResultInfo } from './ExamResultInfo';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    // const listItems = this.state.examResultList?.map((result) => (
    //   <div key={result.id}> | {result.score} | {result.userId} | </div> 
    // ));
    const examResultList = this.state.examResultList;

    return (
      <div className="ExamResult">
        <button onClick={this.getExamResultList}>
            取得
        </button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell>score</TableCell>
                <TableCell>userId</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {examResultList.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.score}</TableCell>
                  <TableCell>{row.userId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    );

  }
}

export default ExamResult;
