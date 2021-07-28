import React from 'react';
import {baseChipStyle} from './styles/baseChipStyles';

type BaseChipProps = {
    size: number,
}

type BaseChipState = {
}

export class BaseChip extends React.Component<BaseChipProps, BaseChipState>{
    
    constructor(props: BaseChipProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <div style={{...baseChipStyle, width: this.props.size, height: this.props.size}}>
            {this.props.children}
        </div>
    }
}