import React from 'react';
import {homeBoxStyle} from './styles/homeBoxStyles';

type SquareBoxProps = {
    size: number
    rotation: number //angulo en grados
}

type SquareBoxState = {
}

export class SquareBox extends React.Component<SquareBoxProps, SquareBoxState>{
    
    constructor(props: SquareBoxProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <div style={{...homeBoxStyle, transform: `rotate(${this.props.rotation}deg)`, width: this.props.size, height:this.props.size}}>
             Square Box
             </div>
    }
}