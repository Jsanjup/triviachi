import React from 'react';
import {HomeBox} from '../components/homeBox'
import {MiddleBox} from '../components/middleBox'
import {SquareBox} from '../components/squareBox'
import {mainBoardStyle, boxSize} from './styles/mainBoardStyles'

type BoardProps = {
}

type BoardState = {
}

export class MainBoard extends React.Component<BoardProps, BoardState>{
    
    constructor(props: BoardProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <div style={mainBoardStyle}>
            <div>
            <HomeBox color="red" chips={0} size={boxSize}></HomeBox>
            <SquareBox size={boxSize}></SquareBox>
            <HomeBox color="blue" chips={0} size={boxSize}></HomeBox>
            </div>
            <div>
            <SquareBox size={boxSize}></SquareBox>
            <MiddleBox size={boxSize}></MiddleBox>
            <SquareBox size={boxSize}></SquareBox>
            </div>
            <div>
            <HomeBox color="green" chips={0} size={boxSize}></HomeBox>
            <SquareBox size={boxSize}></SquareBox>
            <HomeBox color="yellow" chips={0} size={boxSize}></HomeBox>
            </div>
        </div>
    }
}