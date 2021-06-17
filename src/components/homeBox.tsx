import React from 'react';
import { playerColor } from '../types/types';
import {homeBoxStyle} from './styles/homeBoxStyles'

type HomeBoxProps = {
    color : playerColor,
    chips : number,
    size : number
}

type HomeBoxState = {
}

export class HomeBox extends React.Component<HomeBoxProps, HomeBoxState>{
    
    constructor(props: HomeBoxProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <div style={{...homeBoxStyle, backgroundColor:this.props.color, width: this.props.size, height: this.props.size}}
        
        >Home Box</div>
    }
}