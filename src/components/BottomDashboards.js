import React from 'react';
import { Segment, Grid} from 'semantic-ui-react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import "./react-big-calendar-backup-code.css";
import moment from 'moment';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map(k => Views[k])
export default function BottomDashboard(props) {
    const chartConfigs = {
        type: 'Pie3D',
        width: '90%',
        height: '90%',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "COVID-19 Report",
                "subCaption": "For a total or specific country",
                "showValues": "1",
                "showPercentInTooltip": "0",
                "numberPrefix": "$",
                "enableMultiSlicing": "1",
                "theme": "fusion"
            },
            "data": [
                {
                    "label": "Cases",
                    "value": props.selectedCountry ? props.selectedCountry.cases : props.overAllData.cases
                }, {
                    "label": "Recovered",
                    "value": props.selectedCountry ? props.selectedCountry.recovered : props.overAllData.recovered
                }, {
                    "label": "Death",
                    "value": props.selectedCountry ? props.selectedCountry.deaths : props.overAllData.deaths
                }, {
                    "label": "Active",
                    "value": props.selectedCountry ? props.selectedCountry.active : props.overAllData.active
                }
            ]
        }
        ,
    };

    const style = {
        main: { height: "100%", margin: 0 },
        bot: { height: "100%", margin: 0, padding: 0 },
        grid: { margin: 0, padding: 0 }
    } 

    return (
        <Grid divided='vertically' stackable className="full-view" style={style.bot}>
            <Grid.Row columns={2} style={style.grid}>
                <Grid.Column width={9} style={style.main}>
                    <Segment className="full-view card-styles">
                            <Calendar
                                className="resizable-day"
                                localizer={localizer}
                                events={props.stats}
                                // views={{ month: true, week: true, day: true, list: true }}
                                views={allViews}
                                step={60}
                                defaultDate={new Date()}
                                // onSelectEvent={event => this.handleClickEvent(event)}
                                eventPropGetter={event => {
                                    return {
                                        style: { backgroundColor: event.color }
                                    }
                                }}
                            // startAccessor='startDate'
                            // endAccessor='endDate'
                            style={{ height: "100%", width: "100%" }}
                            />
                    </Segment>
                </Grid.Column>
                <Grid.Column width={7} style={style.main}>
                    <Segment className="full-view card-styles" style={{ height: "100%" }}>
                        <ReactFC {...chartConfigs} />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}
