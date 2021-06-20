import * as React from 'react';

export interface IProblem {
    problem: Array<String>;
}
  

class Problem extends React.Component<IProblem> {

    render() {
        const { problem } = this.props;
        return (
            <div className='Problem' >
                {problem[1]}の意味は？ <br/>
                <input type="radio" name={problem[2][0]} value={problem[2][0]} /> {problem[2][0]} <br />
                <input type="radio" name={problem[2][1]} value={problem[2][1]} /> {problem[2][1]} <br />
                <input type="radio" name={problem[2][2]} value={problem[2][2]} /> {problem[2][2]} <br />
            </div>
        );
    }
}

export default Problem;
