import React from 'react';

import NYANGPORING from './NYANGPORING.gif';
import icAccount from './ic-account.svg';
import icMessages from './ic-messages.svg';
import icSettings from './ic-settings.svg';
import icStore from './ic-store.svg';
import icHome from './ic-home.svg';

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="page-container" style={{ backgroundColor: 'red', flexDirection: 'column' }}>
                <div className="main-nav-bar">
                    <div style={{ display: 'flex', justifyContent: 'center', padding: 8, alignItems: 'center', marginLeft: 8 }}>
                        <img src={NYANGPORING} height={32} />
                        <h3 style={{ marginLeft: 8 }}>JOGAR</h3>
                    </div>
                    <div className="main-nav-bar menu">
                        <div className="icon-btn">
                            <img src={icHome} width={24} />
                        </div>
                        <div className="icon-btn">
                            <img src={icAccount} width={24} />
                        </div>
                        <div className="icon-btn">
                            <img src={icStore} width={24} />
                        </div>
                        <div className="icon-btn">
                            <img src={icMessages} width={24} />
                        </div>
                        <div className="icon-btn">
                            <img src={icSettings} width={24} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}