import React, { Component, Fragment } from 'react';
import { Button } from "antd";

class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                Home
                <Button type="primary">button</Button>
            </Fragment>
        )
    }
}

export default Home;