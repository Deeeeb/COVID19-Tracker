import React, { useState } from 'react';
import { Segment, Message, Icon, Form, Dropdown, Grid, Checkbox, Card, Image } from 'semantic-ui-react';
import Spinhead from '../img/spinhead.gif';

export default function FormsAndFilters(props) {
    const [country, setCountry] = useState([]);
    const style = {
        main: { height: "100%", margin: 0 },
        compacts: { height: "100%", margin: 0, paddingRight: props.isMobile ? '' : 0 },
        top: { height: props.isMobile ? "50%" : '35%' },
        bottom: { height: props.isMobile ? "50%" : '65%', overflowY: 'scroll' }
    }
    return (
        <Segment basic style={style.compacts}>
            <Segment className="full-view card-styles">
                <Grid stackable divided='vertically' className='full-view' style={style.main}>
                    <Grid.Row columns={1} style={style.top}>
                        <Grid.Column style={style.main}>
                            <Form className="full-view">
                                <Message icon color='teal'>
                                    <Icon name='circle notched' color='red' loading />
                                    <Message.Content>
                                        <Message.Header>COVID-19 Tracker</Message.Header>
                                    LIVE UPDATE
                                    </Message.Content>
                                </Message>

                                <Form.Field>
                                    <label style={{ color: 'white' }}>All Country:</label>
                                    <Checkbox checked={props.isAll} onClick={() => props.handleCheckBox()} />
                                </Form.Field>

                                <Form.Field>
                                    <label style={{ color: 'white' }}>Country:</label>
                                    <Dropdown placeholder='Country' value={country} onChange={(e, { value }) => { setCountry(value); props.SelectedCountry(value) }} search selection options={props.allcountry} />
                                </Form.Field>

                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} style={style.bottom}>
                        <Grid.Column style={style.main}>
                            {
                                props.news.length === 0 ? <span>No News for Today</span> :
                                    props.news.news.map((row, i) =>
                                        <Card key={i} fluid>
                                            <Card.Content>
                                                {
                                                    row.images !== null && row.images.length !== 0 ?
                                                        <Image
                                                            src={row.images[0].url}
                                                            href={row.webUrl}
                                                            target='_blank'
                                                        />
                                                        :
                                                        <Image src={Spinhead} />
                                                }
                                                <Card.Header>{row.title}</Card.Header>
                                                <Card.Meta>{row.provider.domain}</Card.Meta>
                                                <Card.Description>
                                                    {row.excerpt}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    )
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Segment>
    );
}



