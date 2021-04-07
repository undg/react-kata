import React, { useContext } from 'react'
import { LoadingComponent } from '.'
import { HackerNewsItem } from '../api'
import { TopStoriesContext } from '../context'

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
            <h3 className="stories__item__title">{props.title}</h3>
            <p className="stories__item__author">by: {props.by}</p>
            <div className="stories__item__date">{new Date(props.time).toDateString()}</div>
            <a className="stories__item__link" href={props.url}>Link</a>
            <hr />
        </>
    )
}
