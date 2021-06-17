import React from 'react';
import {homeBoxStyle} from './styles/homeBoxStyles'

type SquareBoxProps = {
    size : number
}

type SquareBoxState = {
}

export class SquareBox extends React.Component<SquareBoxProps, SquareBoxState>{
    
    constructor(props: SquareBoxProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <div style={{ ...homeBoxStyle, width: this.props.size, height: this.props.size}}
        > Square Box </div>
    }
}