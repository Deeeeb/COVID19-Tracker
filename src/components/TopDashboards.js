import React from 'react';
import { Segment, Grid, Label, Statistic, Image } from 'semantic-ui-react';
import Death from '../img/coronavirus.png';
import Confirm from '../img/sneeze.png';
import Active from '../img/woman.png';
import Recovered from '../img/stay-home.png';

export default function TopDashboard(props) {
    const style = {
        top: { height: "100%", margin: 0 }
    }

    let updates = new Date(props.overAllData.updated)
    let formatted_date = (updates.getMonth() + 1) + "-" + updates.getDate() + "-" + updates.getFullYear()

    function handleCases(){
        return props.selectedCountry ? props.selectedCountry.cases : props.overAllData.cases;
    }
    function handleRecovered(){
        return props.selectedCountry ? props.selectedCountry.recovered : props.overAllData.recovered;
    }
    function handleDeath(){
        return props.selectedCountry ? props.selectedCountry.deaths : props.overAllData.deaths;
    }
    function handleActive(){
        return props.selectedCountry ? props.selectedCountry.active : props.overAllData.active;
    }
    return (
        <Grid divided='vertically' stackable style={style.top} >
            <Grid.Row columns={4} style={style.top}>
                {/* ******* First TOP BOARD **************** */}
                <Grid.Column >
                    <Segment className="card-styles">
                        <Grid style={{ width: "100%", height: "100%" }}>
                            <Grid.Row columns={2} style={{ padding: 0, height: "100%" }}>
                                <Grid.Column width={5} verticalAlign="middle" style={{ height: "100%" }}>
                                    <Image src={Confirm} floated="left" className="full-view" />
                                </Grid.Column>
                                <Grid.Column width={11} textAlign="right" verticalAlign="middle" style={{ height: "100%" }}>
                                    <Statistic size="mini" style={{ padding: "5%" }}>
                                        <Statistic.Value style={{ color: "white" }}> {parseInt(handleCases()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Statistic.Value>
                                        <Statistic.Label style={{ color: "white", fontWeight: "normal" }}>
                                            {formatted_date}
                                        </Statistic.Label>
                                    </Statistic>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Label attached="bottom right" className='App card-styles-label confirm-bg' style={{ color: 'white' }}>CASES</Label>
                    </Segment>
                </Grid.Column>

                {/* ******* First 2.0 TOP BOARD **************** */}
                <Grid.Column >
                    <Segment inverted className="card-styles">
                        <Grid style={{ width: "100%", height: "100%" }}>
                            <Grid.Row columns={2} style={{ padding: 0, height: "100%" }}>
                                <Grid.Column width={5} verticalAlign="middle" style={{ height: "100%" }}>
                                    <Image src={Active} floated="left" className="full-view" />
                                </Grid.Column>
                                <Grid.Column width={11} textAlign="right" verticalAlign="middle" style={{ height: "100%" }}>
                                    <Statistic size="mini" style={{ padding: "5%" }}>
                                        <Statistic.Value style={{ color: "white" }}> {parseInt(handleActive()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Statistic.Value>
                                        <Statistic.Label style={{ color: "white", fontWeight: "normal" }}>
                                            {formatted_date}
                                        </Statistic.Label>
                                    </Statistic>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Label attached="bottom right" className='App card-styles-label active-bg' style={{ color: 'white' }}>ACTIVE</Label>
                    </Segment>
                </Grid.Column>

                {/* ******* Second TOP BOARD **************** */}
                <Grid.Column >
                    <Segment inverted className="card-styles">
                        <Grid style={{ width: "100%", height: "100%" }}>
                            <Grid.Row columns={2} style={{ padding: 0, height: "100%" }}>
                                <Grid.Column width={5} verticalAlign="middle" style={{ height: "100%" }}>
                                    <Image src={Recovered} floated="left" className="full-view" />
                                </Grid.Column>
                                <Grid.Column width={11} textAlign="right" verticalAlign="middle" style={{ height: "100%" }}>
                                    <Statistic size="mini" style={{ padding: "5%" }}>
                                        <Statistic.Value style={{ color: "white" }}> {parseInt(handleRecovered()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Statistic.Value>
                                        <Statistic.Label style={{ color: "white", fontWeight: "normal" }}>
                                            {formatted_date}
                                        </Statistic.Label>
                                    </Statistic>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Label attached="bottom right" className='App card-styles-label recovered-bg' style={{ color: 'white' }}>RECOVERED</Label>
                    </Segment>
                </Grid.Column>

                {/* ******* Third TOP BOARD **************** */}
                <Grid.Column >
                    <Segment inverted className="card-styles">
                        <Grid style={{ width: "100%", height: "100%" }}>
                            <Grid.Row columns={2} style={{ padding: 0, height: "100%" }}>
                                <Grid.Column width={5} verticalAlign="middle" style={{ height: "100%" }}>
                                    <Image src={Death} floated="left" className="full-view" />
                                </Grid.Column>
                                <Grid.Column width={11} textAlign="right" verticalAlign="middle" style={{ height: "100%" }}>
                                    <Statistic size="mini" style={{ padding: "5%" }}>
                                        <Statistic.Value style={{ color: "white" }}> {parseInt(handleDeath()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Statistic.Value>
                                        <Statistic.Label style={{ color: "white", fontWeight: "normal" }}>
                                            {formatted_date}
                                        </Statistic.Label>
                                    </Statistic>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Label attached="bottom right" className='App card-styles-label death-bg' style={{ color: 'white' }}>DEATH</Label>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}
