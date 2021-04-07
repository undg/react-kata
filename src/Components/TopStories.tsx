import React, { useContext } from 'react'
import { LoadingComponent } from '.'
import { TopStoriesContext } from '../context'

export const TopStoriesComponent: React.FC = () => {
    const ctx = useContext(TopStoriesContext)
    return (
        <>
            <LoadingComponent show={!ctx.items?.length} />
            <h4>{ctx.items[0]?.title ?? ''}</h4>
        </>
    )
}
