import * as React from 'react';
import { ProblemInfo } from '../data/ProblemInfo';
import './index.css';

export interface IProblem {
    problem: ProblemInfo;
    onSelected: (answer : Array<String>) => void;
}
  

class Problem extends React.Component<IProblem> {

    onClick = (event: any) => {
        const answerMean = event.target.value;
        const eWord = this.props.problem.word;
        const answer = [eWord , answerMean];
        this.props.onSelected(answer);

    }

    render() {
        const { problem } = this.props;
        const eword = problem.word;
        return (
            <div className='problem' >
                {eword}の意味は？ <br/>
                <div className='problem_choices'>
                    <input type="radio" name={eword} value={problem.choice1} onChange={this.onClick}/> {problem.choice1} <br />
                    <input type="radio" name={eword} value={problem.choice2} onClick={this.onClick}/> {problem.choice2} <br />
                    <input type="radio" name={eword} value={problem.choice3} onClick={this.onClick}/> {problem.choice3} <br />
                </div>
            </div>
        );
    }
}

export default Problem;
