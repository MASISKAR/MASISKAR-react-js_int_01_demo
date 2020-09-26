import React, { PureComponent } from 'react';


class D extends PureComponent {
    state = {
        inputValue: ''
    };

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    handleClick = () => {
        this.props.onSendValue(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    };

    render() {

        return (
            <div className="d">
                <input
                    type='text'
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleClick}
                >
                    Send
       </button>
      Name: {this.props.data}
            </div>
        );
    }


}

export default D;