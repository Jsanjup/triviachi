import React from 'react';

type ComponentProps = {
}

type ComponentState = {
}

export class ClassComponent extends React.Component<ComponentProps, ComponentState>{
    
    constructor(props: ComponentProps){
        super(props);
        this.state = {}
    }

    render(): JSX.Element{
        return <></>
    }
}