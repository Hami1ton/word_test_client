import * as React from 'react';
import './index.css';

export interface IProblem {
    problem: Array<String>;
    onSelected: (answer : Array<String>) => void;
}
  

class Problem extends React.Component<IProblem> {

    onClick = (event: any) => {
        const answerMean = event.target.value;
        const eWordId = this.props.problem[0];
        const answer = [eWordId , answerMean];
        this.props.onSelected(answer);

    }

    render() {
        const { problem } = this.props;
        const eword = problem[1].toString();
        return (
            <div className='problem' >
                {eword}の意味は？ <br/>
                <div className='problem_choices'>
                    <input type="radio" name={eword} value={problem[2][0]} onChange={this.onClick}/> {problem[2][0]} <br />
                    <input type="radio" name={eword} value={problem[2][1]} onClick={this.onClick}/> {problem[2][1]} <br />
                    <input type="radio" name={eword} value={problem[2][2]} onClick={this.onClick}/> {problem[2][2]} <br />
                </div>
            </div>
        );
    }
}

export default Problem;
