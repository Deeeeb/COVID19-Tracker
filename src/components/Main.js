import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Dashboard from './Dashboard';
import FormsAndFilters from './FormsAndFilters';
import Loader from './Loader';
const axios = require('axios');
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overAllData: [],
            allcountry: [],
            news: [],
            stats: [],
            selectedCountry: null,
            isAll: true,
            loading: true,
            isMobile: false,
        }
    }

    UNSAFE_componentWillMount() {
        this.handleFetchData();
        window.addEventListener('resize', this.isMobile)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.isMobile)
    }

    isMobile = () => {
        if(/Mobi|Android/i.test(navigator.userAgent)){
            this.setState({isMobile: true});
        }else{
            this.setState({isMobile: false});
        }
    }

    handleFetchData = async () => {
        try {
            const response = await axios.get('https://corona.lmao.ninja/all');
            const hasCovidCountry = await axios.get('https://corona.lmao.ninja/countries');
            
            const instance = await axios.create({
                baseURL: 'https://api.smartable.ai/coronavirus/news/US-NY',
                headers: {
                    'Cache-Control': "no-cache",
                    'Subscription-Key': "8220849dcb65434fb0f5590fce3b9cdb"
                }
              });

            const instance1 = await axios.create({
                    baseURL: 'https://api.smartable.ai/coronavirus/stats/global',
                    headers: {
                        'Cache-Control': "no-cache",
                        'Subscription-Key': "8220849dcb65434fb0f5590fce3b9cdb"
                    }
                  });

            const smart = await instance.get('https://api.smartable.ai/coronavirus/news/US-NY');
            const stats = await instance1.get('https://api.smartable.ai/coronavirus/stats/global');

            if (response.status === 200 && hasCovidCountry.status === 200 && smart.status === 200 && stats.status === 200) {
                hasCovidCountry.data.forEach(element => {
                    let val = {
                        "country": element.country,
                        "cases": element.cases, 
                        "deaths": element.deaths, 
                        "recovered": element.recovered, "active": element.active,
                        "critical": element.critical,
                    }
                    element['key'] = element.country;
                    element['value'] = val;
                    element['text'] = element.country;
                    element['image'] = element.countryInfo.flag
                });
                let finalStats = [];
                stats.data.stats.history.forEach((element, i) => {
                    let dates = new Date(element.date);
                    let formatted_date = (dates.getMonth() + 1) + "-" + dates.getDate() + "-" + dates.getFullYear()
                    finalStats.push(
                        {
                            id: i+.1,
                            title: element.confirmed+' Cases',
                            start: formatted_date,
                            end: formatted_date,
                            allDay: true,
                            color: '#ff5d5d'
                        },{
                            id: i+.2,
                            title: element.recovered+' Recovered',
                            start: formatted_date,
                            end: formatted_date,
                            allDay: true,
                            color: '#03b900'
                        },{
                            id: i+.3,
                            title: element.deaths+' Deaths',
                            start: formatted_date,
                            end: formatted_date,
                            allDay: true,
                            color: '#949494'
                        }
                    )
                })

                this.setState({ overAllData: response.data, allcountry: hasCovidCountry.data, news: smart.data, stats: finalStats })
                setTimeout(() => this.setState({ loading: false }), 3000)
            }
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const {isAll} = this.state;
        return (
            <div className="full-view" style={{ overflowY: 'auto'}}>
                {this.state.loading ? <Loader /> : <span />}
                <Grid divided='vertically' stackable style={{ height: "100%", margin: 0 }}>
                    <Grid.Row columns={2} className="full-view" style={{ height: "100%"}}>
                        <Grid.Column width={4} className="full-view" style={{ height: "100%",  margin: 0, paddingRight: 0 }}>
                            <FormsAndFilters 
                                isMobile={this.state.isMobile}
                                allcountry={this.state.allcountry}
                                news={this.state.news}
                                isAll={isAll}
                                handleCheckBox={()=> this.setState({isAll: !isAll, selectedCountry: null})}
                                SelectedCountry={(value) => this.setState({selectedCountry: value, isAll: !isAll})}
                            />
                        </Grid.Column>
                        <Grid.Column width={12} className="full-view" style={{ height: "100%",  margin: 0, paddingLeft: 0 }}>
                            <Dashboard
                                overAllData={this.state.overAllData}
                                allcountry={this.state.allcountry}
                                stats={this.state.stats}
                                isMobile={this.state.isMobile}
                                selectedCountry={this.state.selectedCountry}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div >
        );
    }
}
