import React from 'react';
import { HomeBox } from '../components/homeBox'
import { MiddleBox } from '../components/middleBox'
import { SquareBox } from '../components/squareBox'
import { mainBoardStyle, boxSize } from './styles/mainBoardStyles'

type BoardProps = {
}

type BoardState = {
}

export class MainBoard extends React.Component<BoardProps, BoardState>{

    constructor(props: BoardProps) {
        super(props);
        this.state = {}
    }

    render(): JSX.Element {
        return <div style={mainBoardStyle}>
            <div >
                <HomeBox color='red' chips={4} size={boxSize} ></HomeBox>
                <SquareBox size={boxSize} rotation={270} ></SquareBox>
                <HomeBox color='blue' chips={4} size={boxSize}></HomeBox>
            </div>
            <div>
                <SquareBox size={boxSize} rotation={180} ></SquareBox>
                <MiddleBox size={boxSize} ></MiddleBox>
                <SquareBox size={boxSize} rotation={0}></SquareBox>
            </div>
            <div>
                <HomeBox color='yellow' chips={4} size={boxSize}></HomeBox>
                <SquareBox size={boxSize} rotation={90}></SquareBox>
                <HomeBox color='green' chips={4} size={boxSize}> </HomeBox>
            </div>

        </div>
    }
}