import React from 'react';
import { playerColor } from '../types/types';

type ChipProps = {
    color : playerColor,
}

type ChipState = {
}

export class Chip extends React.Component<ChipProps, ChipState>{
    
    constructor(props: ChipProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <></>
    }
}