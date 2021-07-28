import React from 'react';
import { playerColor, subject, squareType } from '../types/types';
import {squareStyle} from './styles/squareStyles'

type SquareProps = {
    squareType : squareType,
    color ?: playerColor,
    subject ?: subject,
    index ?:number,
    size: number
}

type SquareState = {
}

export class Square extends React.Component<SquareProps, SquareState>{
    
    constructor(props: SquareProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <div style={{...squareStyle, height: this.props.size, width: 2*this.props.size, backgroundColor: this.props.color}}>{this.props.index}
        {this.props.children}</div>
    }
}