import React from 'react';
import { playerColor } from '../types/types';

type SquareProps = {
    color : playerColor,
    chips : number,
}

type SquareState = {
}

export class Square extends React.Component<SquareProps, SquareState>{
    
    constructor(props: SquareProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <></>
    }
}