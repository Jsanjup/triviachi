import React from 'react';
import { homeBoxStyle } from './styles/homeBoxStyles'

type MiddleBoxProps = {
    size : number
}

type MiddleBoxState = {
}

export class MiddleBox extends React.Component<MiddleBoxProps, MiddleBoxState>{
    
    constructor(props: MiddleBoxProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <div style={{...homeBoxStyle, width: this.props.size, height: this.props.size}}>
            Middle Box
            </div>
    }
}