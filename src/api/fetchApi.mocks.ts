export const mockApiRes = {
    mockTest: { msg: 'MOCK ok' },
    missingMock: { msg: 'missing MOCK' },
    topStories: topStories(),
    item: oneItem(),
}

// https://hacker-news.firebaseio.com/v0/topstories.json
function topStories() {
    // prettier-ignore
    return [26712524,26711434,26709159,26697932,26711862,26709019,26709848,26711997,26709357,26710013,26709053,26699106,26710782,26708061,26711718,26708089,26707368,26709628,26713105,26709951,26713028,26706750,26711551,26710344,26694972,26708959,26701045,26688091,26711308,26706424,26704472,26680269,26700319,26703491,26708457,26711698,26703404,26710589,26711156,26709617,26709871,26694974,26700770,26708324,26690354,26706281,26706570,26707737,26697892,26710028,26708148,26704600,26709678,26701149,26697325,26704088,26692144,26710068,26703808,26688311,26707679,26691868,26705218,26702659,26690199,26706187,26704694,26703023,26697227,26691626,26693909,26696396,26708584,26709387,26698898,26706397,26705742,26698180,26705539,26679857,26702345,26695608,26708960,26708847,26701602,26701079,26702584,26695976,26697354,26679749,26693959,26706664,26708298,26708291,26694585,26694307,26699423,26688341,26682097,26711182,26679682,26702222,26695060,26697768,26707751,26706802,26710007,26694557,26708736,26678982,26698475,26697729,26686804,26688390,26688142,26705429,26680158,26693695,26687858,26677112,26707987,26698371,26695694,26703099,26692308,26694685,26708240,26700562,26701871,26702647,26671136,26700442,26698492,26693410,26693052,26696876,26707304,26695911,26698087,26690182,26701328,26699137,26690358,26703874,26697128,26704258,26693705,26707244,26703203,26674244,26691749,26693740,26707822,26691147,26686770,26688832,26676957,26705040,26687871,26686926,26694165,26685975,26685906,26694316,26680455,26710261,26709226,26690044,26700983,26678444,26690126,26680035,26699466,26681984,26688149,26689442,26686378,26685156,26684601,26681969,26707618,26698378,26702293,26677035,26703824,26681936,26692639,26691596,26684247,26712084,26706255,26689601,26679067,26684792,26707665,26702202,26680235,26689492,26706628,26690279,26671383,26687865,26682980,26671914,26706369,26688529,26682333,26707742,26700975,26695795,26692573,26700533,26689239,26688738,26680266,26694819,26688888,26681672,26707677,26688453,26674756,26682921,26692531,26686393,26678723,26686197,26710695,26683337,26686615,26680159,26687685,26688433,26671851,26707920,26692575,26694221,26674863,26678420,26698969,26704817,26707805,26682488,26703180,26687343,26704408,26693494,26690751,26685058,26683510,26680483,26698047,26691397,26673221,26693360,26688965,26685244,26684894,26678430,26672263,26687154,26680790,26705820,26688301,26698310,26690630,26688148,26685014,26704765,26679421,26685272,26688295,26681857,26678812,26681518,26685980,26687997,26680839,26684838,26692410,26688153,26679770,26696326,26692631,26682582,26685694,26678304,26706258,26671603,26691569,26677630,26688455,26676729,26686234,26686241,26703762,26689643,26697269,26673134,26705915,26698963,26698914,26684655,26683755,26683637,26684519,26703124,26703080,26692592,26708899,26685042,26682605,26680060,26708849,26686463,26691807,26705470,26683832,26671848,26675984,26676625,26679009,26686159,26689395,26692171,26693217,26693318,26695204,26698074,26696423,26701219,26704205,26672059,26692190,26682128,26704137,26688222,26707879,26698382,26691445,26696537,26681667,26674352,26707289,26678699,26685900,26678957,26676551,26703346,26671336,26703317,26672052,26691368,26685641,26686476,26699396,26673987,26681530,26695980,26687212,26684871,26672117,26678700,26696958,26684178,26689584,26680375,26681443,26687087,26695106,26672479,26692537,26672407,26689577,26684868,26678553,26671731,26671057,26681618,26681372,26678762,26693776,26691425,26691340,26705432,26691169,26700632,26688778,26672785,26695666,26700048,26671204,26672877,26686193,26688866,26683317,26672024,26678946,26700159,26691091,26683943,26690992,26678945,26698612,26694950,26692151,26698363,26672951,26705475,26674781,26674381,26694928,26673892,26681273,26674491,26681057,26693027,26695878,26673364,26688420,26685045,26672694,26672613,26692008,26691933,26694623,26684364,26691819,26674279,26685056,26679175,26674956,26675718,26675545,26693278,26684219,26684743,26694673,26701336,26705979,26686177,26683080,26688586,26671089,26694326,26673335,26696272,26694243,26704608,26689983,26681405,26678447,26677046,26691493,26675526,26679172,26674282,26671748,26691541,26671928,26684671,26677678,26684660,26695316,26682023,26695061,26678977,26678970,26671948,26695033,26671526,26671754,26694659,26700933,26688367,26694414,26694411,26701795,26675581,26677013,26701537,26700069,26678950,26673017,26678040,26693447,26671827,26695896,26686030,26689269,26685754,26685697,26680600,26674014,26688614,26692792,26671393,26692633,26672316,26678604,26687605]
}

// https://hacker-news.firebaseio.com/v0/item/26712524.json?print=pretty
function oneItem() {
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
