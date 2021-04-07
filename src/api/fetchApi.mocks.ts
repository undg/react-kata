import { EmptyMock, HackerNewsItem, HackerNewsTopStories, MockApiEndpoint } from '.'

export const mockApiRes: {[key in MockApiEndpoint]: HackerNewsTopStories | EmptyMock | HackerNewsItem  } = {
    topstories: topStories(),
    mockTest: { msg: 'MOCK ok' },
    missingMock: { msg: 'missing MOCK' },
    item0: item(),
    item1: item(),
    item2: item(),
    item3: item(),
    item4: item(),
    item5: item(),
    item6: item(),
    item7: item(),
    item8: item(),
    item9: item(),
}

// https://hacker-news.firebaseio.com/v0/topstories.json
function topStories(): HackerNewsTopStories {
    // prettier-ignore
    return [ 'item0', 'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', ]
}

// https://hacker-news.firebaseio.com/v0/item/26712524.json?print=pretty
function item(): HackerNewsItem {
    return {
        by: 'ryanmercer',
        descendants: 590,
        id: 26712524,
        // prettier-ignore
        kids: [ 26712893, 26712731, 26712843, 26713782, 26712800, 26712708, 26712856, 26712993, 26712712, 26712681, 26713353, 26712679, 26713017, 26712881, 26713180, 26712693, 26714163, 26712765, 26713276, 26712796, 26713030, 26712789, 26712770, 26713839, 26712737, 26712786, 26713425, 26714167, 26712990, 26712891, 26715347, 26712756, 26713613, 26712901, 26712997, 26712820, 26712725, 26714338, 26713230, 26713162, 26713007, 26713326, 26712858, 26714114, 26714191, 26713421, 26713095, 26713992, 26717178, 26713240, 26714319, 26714601, 26713036, 26712939, 26712956, 26722326, 26712751, 26713959, 26713635, 26713598, 26716892, 26713409, 26715305, 26713749, 26712818, 26713039, 26713994, 26713016, 26712845, 26713720, 26713581, 26712934, 26716723, 26713533, 26713897, 26713460, 26713232, 26713768, 26714328, 26712930, 26713019, 26715499, 26713810, 26715230, 26712846, 26713043, 26713630, 26713211, 26713565, 26713294, 26713802, 26713048, 26712784, 26714247, 26713002, 26713022, 26713707, 26713974, 26713910, 26713558, 26713130, 26713102, 26712758, 26715367, 26715789, 26713001, ],
        score: 650,
        time: 1617720854,
        title: 'I hope work from home continues',
        type: 'story',
        url:
            'https://www.ryanmercer.com/ryansthoughts/2021/4/6/some-of-the-reasons-i-hope-work-from-home-continues-and-i-never-have-to-return-to-an-office',
    }
}
