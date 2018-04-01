import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props);
        this.getCssName = this.getCssName.bind(this);
    }

    getCssName(){
        var css = "button ";
        if(this.props.disabled === 'true'){
            this.props.isPrimary === 'true'?
            css = css + "disabledPrimary":
            css = css + "disabledSecondary";
        }
        else{
            if(this.props.isPrimary === 'true'){
                css = css + "primary ";
            }
            else{
                css = css + "secondary ";                
            }
            switch(this.props.size){
                case 'normal':
                    css = css + "normal ";
                    break;
                case 'large':
                    css = css + "large ";
                    break;
                case 'full-width':
                    css = css + "fullWidth ";
                    break;
                default:
                    break;
            }
        }

        return css;
    }

    render(){
        return (
        <div>
            <button className={this.getCssName()} value={this.props.value}> {this.props.text} </button>
        </div>
        )
    }
}

export default Button;
