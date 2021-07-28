import React from 'react';
import { playerColor } from '../types/types';
import { chipStyle} from './styles/chipStyles';

type ChipProps = {
    color : playerColor,
    size:number,
}

type ChipState = {
}

export class Chip extends React.Component<ChipProps, ChipState>{
    
    constructor(props: ChipProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <div style ={{...chipStyle, width: this.props.size, height:this.props.size, backgroundColor:this.props.color}}>

        </div>

    }
}