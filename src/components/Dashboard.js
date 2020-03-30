import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import TopDashboard from './TopDashboards';
import BottomDashboard from './BottomDashboards';

export default function Dashboard(props) {
    const style = {
        main: { height: "100%", margin: 0},
        compacts: { height: "100%", margin: 0, paddingLeft: props.isMobile ? '' : 0 },
        top: { height: props.isMobile ? "100%" : "20%", margin: 0, padding: 0 },
        bot: { height: props.isMobile ? "100%" : "80%", margin: 0, padding: 0 },
    };
   
    return (
        <Segment basic style={style.compacts}>
            <Grid stackable divided='vertically' className='full-view' style={style.main}>
                <Grid.Row columns={1} style={style.top}>
                    <Grid.Column style={style.main}>
                        <TopDashboard {...props} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} style={style.bot}>
                    <Grid.Column style={style.main}>
                        <BottomDashboard {...props} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>
    );
}
