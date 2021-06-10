import React from 'react';
import { playerColor } from '../types/types';

type HomeBoxProps = {
    color : playerColor,
    chips : number,
}

type HomeBoxState = {
}

export class HomeBox extends React.Component<HomeBoxProps, HomeBoxState>{
    
    constructor(props: HomeBoxProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <></>
    }
}