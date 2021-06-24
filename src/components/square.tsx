import React from 'react';
import { playerColor, subject, squareType } from '../types/types';

type SquareProps = {
    squareType : squareType,
    color ?: playerColor,
    subject ?: subject,
    index ?:string,
}

type SquareState = {
}

export class Square extends React.Component<SquareProps, SquareState>{
    
    constructor(props: SquareProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <>{this.props.index}</>
    }
}