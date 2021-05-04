import * as React from 'react';

export interface ITextInput {
    value?: string;
    onChange: (event: any) => void;
}
  

class TextInput extends React.Component<ITextInput, {inputText: string;}> {

    constructor(props: ITextInput) {
        super(props);
        // ステートの初期化（最初は入力エリアは空っぽ）
        this.state = {inputText: ''};
    }

    changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        // arrow関数にしないとthisが変なものを参照しpropsがreadできない
        this.props.onChange(e);
        this.setState({inputText: e.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputText} onChange={this.changeText} />
            </div>
        );
    }
}

export default TextInput;
