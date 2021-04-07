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
            <div className="stories__item__title">{props.title}</div>
            <div className="stories__item__author">{props.by}</div>
            <div className="stories__item__date">{props.time}</div>
            <a className="stories__item__link" href={props.url}>
                Go to article
            </a>
        </>
    )
}
