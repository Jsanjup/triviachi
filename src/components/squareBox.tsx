import React from 'react';
import { playerColor } from '../types/types';
import { Square } from './square';
import {squareBoxColumnStyle, squareBoxStyle} from './styles/squareBoxStyles';

type SquareBoxProps = {
    size: number
    rotation: number //angulo en grados
    centralColor: playerColor
    initialNumber: number
}

type SquareBoxState = {
}

export class SquareBox extends React.Component<SquareBoxProps, SquareBoxState>{
    
    constructor(props: SquareBoxProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <div style={{...squareBoxStyle, transform: `rotate(${this.props.rotation}deg)`, width: this.props.size, height:this.props.size}}>
             <div style={{...squareBoxColumnStyle, height:this.props.size, width:this.props.size/3
                }}>
                <Square squareType={"Regular"}
                    index={this.props.initialNumber + 1} size={this.props.size/6}></Square>
                <Square squareType={"Regular"}
                    index={this.props.initialNumber +2} size={this.props.size/6}></Square>
                <Square squareType={"Regular"}
                    index={this.props.initialNumber +3} size={this.props.size/6}></Square>
                <Square squareType={"ThrowAgain"}
                    index={this.props.initialNumber +4} size={this.props.size/6}></Square>
                <Square squareType={"Regular"}
                    index={this.props.initialNumber +5} size={this.props.size/6}></Square>
                <Square squareType={"Regular"}
                    index={this.props.initialNumber +6} size={this.props.size/6}></Square>
            </div>
             <div style={{...squareBoxColumnStyle, height:this.props.size, width:this.props.size/3
                }}>
                <Square color={this.props.centralColor}
                    squareType={"Final"}
                    size={this.props.size/6}></Square>
                <Square color={this.props.centralColor}
                    squareType={"Final"}
                    size={this.props.size/6} ></Square>
                <Square color={this.props.centralColor}
                    squareType={"Final"}
                    size={this.props.size/6}></Square>
                <Square color={this.props.centralColor}
                    squareType={"Final"}
                     size={this.props.size/6}></Square>
                <Square color={this.props.centralColor}
                    squareType={"Final"}
                    size={this.props.size/6}></Square>
                <Square 
                    squareType={"ThrowAgain"}
                    index={this.props.initialNumber +7} size={this.props.size/6}></Square>
            </div>
            <div style={{...squareBoxColumnStyle, height:this.props.size, width:this.props.size/3
                }}>
                <Square squareType={"Regular"}
                    index={(this.props.initialNumber +13)%60} size={this.props.size/6}></Square>
                <Square squareType={"Regular"}
                    index={(this.props.initialNumber +12)%60} size={this.props.size/6}></Square>
                <Square squareType={"Regular"}
                    index={(this.props.initialNumber +11)%60} size={this.props.size/6}></Square>
                <Square squareType={"ThrowAgain"}
                    index={this.props.initialNumber +10} size={this.props.size/6}></Square>
                <Square squareType={"Regular"}
                    index={this.props.initialNumber +9} size={this.props.size/6}></Square>
                <Square squareType={"Regular"}
                    index={this.props.initialNumber +8} size={this.props.size/6}></Square>
            </div>
             </div>
    }
}