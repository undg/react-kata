import {createContext, useEffect, useState} from "react"
import {fetchAPi, HackerNewsApiEndpoint, HackerNewsItem, HackerNewsTopStories} from "../api"

export const TopStoriesContext = createContext<{items: HackerNewsItem[]}>({
    items: []
})

export const TopStoriesContextProvider: React.FC = props => {
    const [items, setItems] = useState<HackerNewsItem[]>([])
    useEffect(() => {
        setItemsAsync({ setItems, from: 0, to: 10 })
    }, [])

    return (
        <TopStoriesContext.Provider value={{items: items}}>
            {props.children}
        </TopStoriesContext.Provider>
    )
}

interface SetItemsAsync {
    setItems: React.Dispatch<React.SetStateAction<HackerNewsItem[]>>
    from?: number
    to?: number
}

async function setItemsAsync({ setItems, from, to }: SetItemsAsync): Promise<void> {
    const itemsIds: HackerNewsTopStories = await fetchAPi(HackerNewsApiEndpoint.topstories)
    const _from = from ?? 0
    const _to = to ?? 10

    let items = []
    for (let idx = _from; idx < _to; idx++) {
        const id = itemsIds[idx]
        const item = await fetchAPi('item/' + id)
        items.push(item)
    }

    setItems(items)
}
