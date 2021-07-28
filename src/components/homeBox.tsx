import React from 'react';
import { playerColor } from '../types/types';
import {homeBoxStyle, basesRowStyle} from './styles/homeBoxStyles';
import {BaseChip} from './baseChip';
import { Chip } from './chip';

type HomeBoxProps = {
    color : playerColor,
    chips : number,
    size: number
}

type HomeBoxState = {
}

export class HomeBox extends React.Component<HomeBoxProps, HomeBoxState>{
    
    constructor(props: HomeBoxProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <div style={{...homeBoxStyle, width: this.props.size, height:this.props.size, backgroundColor: this.props.color }}> 
            <div style={basesRowStyle}>
                <BaseChip size={48}>
                <Chip size={28} color={this.props.color}></Chip>
                </BaseChip>
                <BaseChip size={48}>
                <Chip size={28} color={this.props.color}></Chip>
                </BaseChip>
            </div>
            <div style={basesRowStyle}>
                <BaseChip size={48}>
                <Chip size={28} color={this.props.color}></Chip>
                </BaseChip>
                <BaseChip size={48}>
                <Chip size={28} color={this.props.color}></Chip>
                </BaseChip>
            </div>
        </div>
    }
}