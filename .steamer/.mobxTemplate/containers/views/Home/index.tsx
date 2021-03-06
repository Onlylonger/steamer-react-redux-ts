import * as React from "react";
import { observer, inject } from 'mobx-react'
import { computed } from 'mobx'

import * as styles from "./style.scss";

interface IP {
    globalStore: IGlobalStore.GlobalStore
}

@inject('globalStore')
@observer
class Home extends React.Component<IP> {
    @computed
    get hello() {
        const { test } = this.props.globalStore
        return test ? test.hello : ''
    }

    render() {
        return <div>
            <h1>Hello World!</h1>
            {this.hello}
        </div>;
    }
}

export default Home
