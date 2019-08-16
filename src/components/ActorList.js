import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react'

const ActorList = props => {
    return (
        <div>
            <Grid stackable columns={3}>
                {
                    props.actors.map((actor, key) => (
              
                        <Grid.Column key={key}>
                            <Card>
                                <Image src={actor.photo} size='massive' rounded />
                                <Card.Content>
                                    <Card.Header>{actor.name}</Card.Header>
                                    <Card.Description>{actor.description}</Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    ))
                }
            </Grid>
        </div>
    );
};


export default ActorList;