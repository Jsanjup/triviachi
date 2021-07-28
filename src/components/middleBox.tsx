import React from 'react';
import { Square } from './square';
import {baseRowStyle, middleBoxStyle, middleSquareStyle} from './styles/middleBoxStyles';

type MiddleBoxProps = {
    size: number
}

type MiddleBoxState = {
}

export class MiddleBox extends React.Component<MiddleBoxProps, MiddleBoxState>{
    
    constructor(props: MiddleBoxProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <div style={{...middleBoxStyle, width: this.props.size, height:this.props.size}}>
            {/* <div style={{...baseRowStyle,transform:"rotate(180deg)"}}>
            <Square squareType={"Regular"}
                    index={50} size={this.props.size/6}></Square>
                <Square color={"red"}
                    squareType={"Final"}
                    size={this.props.size/6}></Square>
                <Square squareType={"Regular"}
                    index={4} size={this.props.size/6}></Square>
            </div>
            <div style={baseRowStyle}>
            <div style={{...baseRowStyle,transform:"rotate(90deg)"}}>
            <Square squareType={"Regular"}
                    index={5} size={this.props.size/6}></Square>
                <Square color={"green"}
                    squareType={"Final"}
                    size={this.props.size/6}></Square>
                <Square squareType={"Regular"}
                    index={19} size={this.props.size/6}></Square>
            </div> */}
             <div style={{...middleSquareStyle, width: this.props.size*2/3, height:this.props.size*2/3}} ></div>
             {/* <div style={{...baseRowStyle,transform:"rotate(270deg)"}}>
            <Square squareType={"Regular"}
                    index={21} size={this.props.size/6}></Square>
                <Square color={"green"}
                    squareType={"Final"}
                    size={this.props.size/6}></Square>
                <Square squareType={"Regular"}
                    index={49} size={this.props.size/6}></Square>
            </div>
            </div>
             <div style={baseRowStyle}>
             <Square squareType={"Regular"}
                    index={20} size={this.props.size/6}></Square>
                <Square color={"yellow"}
                    squareType={"Final"}
                    size={this.props.size/6}></Square>
                <Square squareType={"Regular"}
                    index={34} size={this.props.size/6}></Square>
            </div> */}
            </div>
    }
}