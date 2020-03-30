import React from 'react';
import { Image, Dimmer } from 'semantic-ui-react';
import Spinhead from '../img/spinhead.gif';

export default function Loader(props) {
    return (
            <Dimmer active ref={props.ref}>
                <div className="item-img">
                    <Image
                        src={Spinhead}
                        centered
                        rounded
                        verticalAlign='middle'
                        className='deb-loader'
                    />
                    <span className="img-block"><b>Loading...</b></span>
                </div>
            </Dimmer>
    );
}
