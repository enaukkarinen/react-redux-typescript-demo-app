import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {

    constructor() {
        super();

        var a = { name: 'Will', things: [1, 2, 3] };
        var b = (Object as any).assign({}, a, { name: 'Fred' });

        console.log(a, b);

    }
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}