import React, { useContext } from 'react'
import { LoadingComponent } from '.'
import { HackerNewsItem } from '../api'
import { TopStoriesContext } from '../context'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'

export const TopStoriesComponent: React.FC = () => {
    const ctx = useContext(TopStoriesContext)
    return (
        <>
            <LoadingComponent show={!ctx.items?.length} />
            {ctx.items.map((props) => (
                <TopStoriesItem key={props.id} {...props} />
            ))}
        </>
    )
}

export const TopStoriesItem: React.FC<HackerNewsItem> = (props) => {
    return (
        <>
            <Card className="stories__item" variant="outlined">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className="stories__item__title">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" component="p" color="primary" className="stories__item__author">
                        by: {props.by}
                    </Typography>
                    <Typography variant="body2" component="p" color="textSecondary" className="stories__item__date">
                        {new Date(props.time).toDateString()}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button variant="contained" size="small" className="stories__item__link" href={props.url}>
                        Link
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
