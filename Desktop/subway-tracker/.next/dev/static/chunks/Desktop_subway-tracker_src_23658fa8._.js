(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/subway-tracker/src/constants/stations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LINE_3_STATIONS",
    ()=>LINE_3_STATIONS,
    "LINE_6_STATIONS",
    ()=>LINE_6_STATIONS,
    "findStation",
    ()=>findStation,
    "getStationsBetween",
    ()=>getStationsBetween
]);
const LINE_6_STATIONS = [
    {
        name: '응암',
        code: '610',
        line: '6호선',
        index: 0
    },
    {
        name: '역촌',
        code: '611',
        line: '6호선',
        index: 1
    },
    {
        name: '불광',
        code: '612',
        line: '6호선',
        index: 2
    },
    {
        name: '독바위',
        code: '613',
        line: '6호선',
        index: 3
    },
    {
        name: '연신내',
        code: '614',
        line: '6호선',
        index: 4
    },
    {
        name: '구산',
        code: '615',
        line: '6호선',
        index: 5
    },
    {
        name: '새절',
        code: '616',
        line: '6호선',
        index: 6
    },
    {
        name: '증산',
        code: '617',
        line: '6호선',
        index: 7
    },
    {
        name: '디지털미디어시티',
        code: '618',
        line: '6호선',
        index: 8
    },
    {
        name: '월드컵경기장',
        code: '619',
        line: '6호선',
        index: 9
    },
    {
        name: '마포구청',
        code: '620',
        line: '6호선',
        index: 10
    },
    {
        name: '망원',
        code: '621',
        line: '6호선',
        index: 11
    },
    {
        name: '합정',
        code: '622',
        line: '6호선',
        index: 12
    },
    {
        name: '상수',
        code: '623',
        line: '6호선',
        index: 13
    },
    {
        name: '광흥창',
        code: '624',
        line: '6호선',
        index: 14
    },
    {
        name: '대흥',
        code: '625',
        line: '6호선',
        index: 15
    },
    {
        name: '공덕',
        code: '626',
        line: '6호선',
        index: 16
    },
    {
        name: '효창공원앞',
        code: '627',
        line: '6호선',
        index: 17
    },
    {
        name: '삼각지',
        code: '628',
        line: '6호선',
        index: 18
    },
    {
        name: '녹사평',
        code: '629',
        line: '6호선',
        index: 19
    },
    {
        name: '이태원',
        code: '630',
        line: '6호선',
        index: 20
    },
    {
        name: '한강진',
        code: '631',
        line: '6호선',
        index: 21
    },
    {
        name: '버티고개',
        code: '632',
        line: '6호선',
        index: 22
    },
    {
        name: '약수',
        code: '633',
        line: '6호선',
        index: 23
    },
    {
        name: '청구',
        code: '634',
        line: '6호선',
        index: 24
    },
    {
        name: '신당',
        code: '635',
        line: '6호선',
        index: 25
    },
    {
        name: '동묘앞',
        code: '636',
        line: '6호선',
        index: 26
    },
    {
        name: '창신',
        code: '637',
        line: '6호선',
        index: 27
    },
    {
        name: '보문',
        code: '638',
        line: '6호선',
        index: 28
    },
    {
        name: '안암',
        code: '639',
        line: '6호선',
        index: 29
    },
    {
        name: '고려대',
        code: '640',
        line: '6호선',
        index: 30
    },
    {
        name: '월곡',
        code: '641',
        line: '6호선',
        index: 31
    },
    {
        name: '상월곡',
        code: '642',
        line: '6호선',
        index: 32
    },
    {
        name: '돌곶이',
        code: '643',
        line: '6호선',
        index: 33
    },
    {
        name: '석계',
        code: '644',
        line: '6호선',
        index: 34
    },
    {
        name: '태릉입구',
        code: '645',
        line: '6호선',
        index: 35
    },
    {
        name: '화랑대',
        code: '646',
        line: '6호선',
        index: 36
    },
    {
        name: '봉화산',
        code: '647',
        line: '6호선',
        index: 37
    },
    {
        name: '신내',
        code: '648',
        line: '6호선',
        index: 38
    }
];
const LINE_3_STATIONS = [
    {
        name: '대화',
        code: '309',
        line: '3호선',
        index: 0
    },
    {
        name: '주엽',
        code: '310',
        line: '3호선',
        index: 1
    },
    {
        name: '정발산',
        code: '311',
        line: '3호선',
        index: 2
    },
    {
        name: '마두',
        code: '312',
        line: '3호선',
        index: 3
    },
    {
        name: '백석',
        code: '313',
        line: '3호선',
        index: 4
    },
    {
        name: '대곡',
        code: '314',
        line: '3호선',
        index: 5
    },
    {
        name: '화정',
        code: '315',
        line: '3호선',
        index: 6
    },
    {
        name: '원당',
        code: '316',
        line: '3호선',
        index: 7
    },
    {
        name: '원흥',
        code: '317',
        line: '3호선',
        index: 8
    },
    {
        name: '삼송',
        code: '318',
        line: '3호선',
        index: 9
    },
    {
        name: '지축',
        code: '319',
        line: '3호선',
        index: 10
    },
    {
        name: '구파발',
        code: '320',
        line: '3호선',
        index: 11
    },
    {
        name: '연신내',
        code: '321',
        line: '3호선',
        index: 12
    },
    {
        name: '불광',
        code: '322',
        line: '3호선',
        index: 13
    },
    {
        name: '녹번',
        code: '323',
        line: '3호선',
        index: 14
    },
    {
        name: '홍제',
        code: '324',
        line: '3호선',
        index: 15
    },
    {
        name: '무악재',
        code: '325',
        line: '3호선',
        index: 16
    },
    {
        name: '독립문',
        code: '326',
        line: '3호선',
        index: 17
    },
    {
        name: '경복궁',
        code: '327',
        line: '3호선',
        index: 18
    },
    {
        name: '안국',
        code: '328',
        line: '3호선',
        index: 19
    },
    {
        name: '종로3가',
        code: '329',
        line: '3호선',
        index: 20
    },
    {
        name: '을지로3가',
        code: '330',
        line: '3호선',
        index: 21
    },
    {
        name: '충무로',
        code: '331',
        line: '3호선',
        index: 22
    },
    {
        name: '동대입구',
        code: '332',
        line: '3호선',
        index: 23
    },
    {
        name: '약수',
        code: '333',
        line: '3호선',
        index: 24
    },
    {
        name: '금호',
        code: '334',
        line: '3호선',
        index: 25
    },
    {
        name: '옥수',
        code: '335',
        line: '3호선',
        index: 26
    },
    {
        name: '압구정',
        code: '336',
        line: '3호선',
        index: 27
    },
    {
        name: '신사',
        code: '337',
        line: '3호선',
        index: 28
    },
    {
        name: '잠원',
        code: '338',
        line: '3호선',
        index: 29
    },
    {
        name: '고속터미널',
        code: '339',
        line: '3호선',
        index: 30
    },
    {
        name: '교대',
        code: '340',
        line: '3호선',
        index: 31
    },
    {
        name: '남부터미널',
        code: '341',
        line: '3호선',
        index: 32
    },
    {
        name: '양재',
        code: '342',
        line: '3호선',
        index: 33
    },
    {
        name: '매봉',
        code: '343',
        line: '3호선',
        index: 34
    },
    {
        name: '도곡',
        code: '344',
        line: '3호선',
        index: 35
    },
    {
        name: '대치',
        code: '345',
        line: '3호선',
        index: 36
    },
    {
        name: '학여울',
        code: '346',
        line: '3호선',
        index: 37
    },
    {
        name: '대청',
        code: '347',
        line: '3호선',
        index: 38
    },
    {
        name: '일원',
        code: '348',
        line: '3호선',
        index: 39
    },
    {
        name: '수서',
        code: '349',
        line: '3호선',
        index: 40
    },
    {
        name: '가락시장',
        code: '350',
        line: '3호선',
        index: 41
    },
    {
        name: '경찰병원',
        code: '351',
        line: '3호선',
        index: 42
    },
    {
        name: '오금',
        code: '352',
        line: '3호선',
        index: 43
    }
];
function findStation(name, line) {
    const stations = line === '6호선' ? LINE_6_STATIONS : LINE_3_STATIONS;
    return stations.find((s)=>s.name === name);
}
function getStationsBetween(fromName, toName, line) {
    const stations = line === '6호선' ? LINE_6_STATIONS : LINE_3_STATIONS;
    const fromIdx = stations.findIndex((s)=>s.name === fromName);
    const toIdx = stations.findIndex((s)=>s.name === toName);
    if (fromIdx === -1 || toIdx === -1) return [];
    if (fromIdx <= toIdx) {
        return stations.slice(fromIdx, toIdx + 1);
    } else {
        return stations.slice(toIdx, fromIdx + 1).reverse();
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/constants/lines.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LINE_COLORS",
    ()=>LINE_COLORS,
    "LINE_IDS",
    ()=>LINE_IDS,
    "LINE_NAMES",
    ()=>LINE_NAMES
]);
const LINE_COLORS = {
    '1호선': '#0052A4',
    '2호선': '#009B3E',
    '3호선': '#EF7C1A',
    '4호선': '#00A2D1',
    '5호선': '#996CAC',
    '6호선': '#CD7C2F',
    '7호선': '#747F00',
    '8호선': '#E6186C',
    '9호선': '#BDB092'
};
const LINE_IDS = {
    '1호선': '1001',
    '2호선': '1002',
    '3호선': '1003',
    '4호선': '1004',
    '5호선': '1005',
    '6호선': '1006',
    '7호선': '1007',
    '8호선': '1008',
    '9호선': '1009'
};
const LINE_NAMES = {
    '1001': '1호선',
    '1002': '2호선',
    '1003': '3호선',
    '1004': '4호선',
    '1005': '5호선',
    '1006': '6호선',
    '1007': '7호선',
    '1008': '8호선',
    '1009': '9호선'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/constants/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_CONFIG",
    ()=>API_CONFIG,
    "TRANSFER_WALKING_MINUTES",
    ()=>TRANSFER_WALKING_MINUTES
]);
const API_CONFIG = {
    SEOUL_API_BASE: 'http://swopenAPI.seoul.go.kr/api/subway',
    POLLING_INTERVALS: {
        POSITION: 5000,
        ARRIVAL: 10000,
        CONGESTION: 30000
    },
    RETRY: {
        COUNT: 3,
        DELAY: 1000
    }
};
const TRANSFER_WALKING_MINUTES = {
    '약수': 3
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/services/routeCalculator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateProgress",
    ()=>calculateProgress,
    "calculateRoute",
    ()=>calculateRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$stations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/constants/stations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$lines$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/constants/lines.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/constants/config.ts [app-client] (ecmascript)");
;
;
;
function calculateRoute(fromName, toName) {
    // 태릉입구(6호선) → 약수(환승) → 매봉(3호선) 경로
    // 6호선에서 태릉입구→약수 방향은 index가 감소하는 방향 (35→23)
    const line6From = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$stations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE_6_STATIONS"].find((s)=>s.name === fromName);
    const line6Transfer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$stations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE_6_STATIONS"].find((s)=>s.name === '약수');
    const line3Transfer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$stations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE_3_STATIONS"].find((s)=>s.name === '약수');
    const line3To = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$stations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE_3_STATIONS"].find((s)=>s.name === toName);
    if (!line6From || !line6Transfer || !line3Transfer || !line3To) {
        return null;
    }
    // 6호선 구간: 태릉입구(idx:35) → 약수(idx:23) - index 감소 = 상행(내선순환)
    const segment1Stations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$stations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStationsBetween"])(fromName, '약수', '6호선');
    // 3호선 구간: 약수(idx:24) → 매봉(idx:34) - index 증가 = 하행(오금방면)
    const segment2Stations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$stations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStationsBetween"])('약수', toName, '3호선');
    const segment1 = {
        line: '6호선',
        lineId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$lines$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE_IDS"]['6호선'],
        lineColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$lines$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE_COLORS"]['6호선'],
        direction: 'up',
        fromStation: line6From,
        toStation: line6Transfer,
        stations: segment1Stations,
        estimatedMinutes: (segment1Stations.length - 1) * 2
    };
    const segment2 = {
        line: '3호선',
        lineId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$lines$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE_IDS"]['3호선'],
        lineColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$lines$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE_COLORS"]['3호선'],
        direction: 'down',
        fromStation: line3Transfer,
        toStation: line3To,
        stations: segment2Stations,
        estimatedMinutes: (segment2Stations.length - 1) * 2
    };
    const transfer = {
        station: line6Transfer,
        fromLine: '6호선',
        toLine: '3호선',
        walkingMinutes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFER_WALKING_MINUTES"]['약수'] || 3
    };
    const totalStations = segment1Stations.length - 1 + (segment2Stations.length - 1);
    return {
        segments: [
            segment1,
            segment2
        ],
        transfers: [
            transfer
        ],
        totalStations,
        totalEstimatedMinutes: segment1.estimatedMinutes + transfer.walkingMinutes + segment2.estimatedMinutes
    };
}
function calculateProgress(route, currentStation, trainStatus, segmentIndex, isTransferring) {
    let stationsPassed = 0;
    // 완료된 구간의 역 수
    for(let i = 0; i < segmentIndex; i++){
        stationsPassed += route.segments[i].stations.length - 1;
    }
    // 현재 구간에서 지나온 역 수
    if (!isTransferring && segmentIndex < route.segments.length) {
        const currentSegment = route.segments[segmentIndex];
        const stationIdx = currentSegment.stations.findIndex((s)=>s.name === currentStation);
        if (stationIdx !== -1) {
            stationsPassed += stationIdx;
        }
    }
    // trainSttus 기반 미세 조정
    const statusOffset = {
        '0': 0.3,
        '1': 0.5,
        '2': 0.8
    };
    const offset = statusOffset[trainStatus] || 0;
    const progress = Math.min(100, (stationsPassed + offset) / route.totalStations * 100);
    const stationsRemaining = route.totalStations - stationsPassed;
    // 상태 메시지 생성
    let statusMessage = '';
    if (isTransferring) {
        statusMessage = '약수역에서 3호선으로 환승하세요!';
    } else {
        const statusMessages = {
            '0': `열차가 ${currentStation}역에 들어가고 있어요!`,
            '1': `${currentStation}역에 도착했어요!`,
            '2': `${currentStation}역을 출발했어요!`
        };
        statusMessage = statusMessages[trainStatus] || `${currentStation} 부근을 지나고 있어요`;
    }
    return {
        currentSegmentIndex: segmentIndex,
        currentStationName: currentStation,
        trainStatus,
        stationsPassed,
        stationsRemaining,
        progress,
        isTransferring,
        statusMessage,
        eta: null
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/stores/routeStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRouteStore",
    ()=>useRouteStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$routeCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/services/routeCalculator.ts [app-client] (ecmascript)");
;
;
const useRouteStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        departure: '태릉입구',
        arrival: '매봉',
        route: null,
        isTracking: false,
        setStations: (departure, arrival)=>{
            const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$routeCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateRoute"])(departure, arrival);
            set({
                departure,
                arrival,
                route
            });
        },
        startTracking: ()=>{
            set((state)=>{
                if (!state.route) {
                    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$routeCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateRoute"])(state.departure, state.arrival);
                    return {
                        route,
                        isTracking: true
                    };
                }
                return {
                    isTracking: true
                };
            });
        },
        stopTracking: ()=>set({
                isTracking: false
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/stores/trackingStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTrackingStore",
    ()=>useTrackingStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useTrackingStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        progress: null,
        selectedTrainNo: null,
        lastUpdated: null,
        error: null,
        setProgress: (progress)=>set({
                progress,
                lastUpdated: new Date(),
                error: null
            }),
        setSelectedTrain: (trainNo)=>set({
                selectedTrainNo: trainNo
            }),
        setError: (error)=>set({
                error
            }),
        reset: ()=>set({
                progress: null,
                selectedTrainNo: null,
                lastUpdated: null,
                error: null
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/services/seoulMetroApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchCongestion",
    ()=>fetchCongestion,
    "fetchRealtimeArrival",
    ()=>fetchRealtimeArrival,
    "fetchRealtimePosition",
    ()=>fetchRealtimePosition
]);
async function fetchRealtimePosition(line) {
    const res = await fetch(`/api/realtime-position?line=${encodeURIComponent(line)}`);
    if (!res.ok) throw new Error('Failed to fetch position data');
    const data = await res.json();
    return data.realtimePositionList || [];
}
async function fetchRealtimeArrival(station) {
    const res = await fetch(`/api/realtime-arrival?station=${encodeURIComponent(station)}`);
    if (!res.ok) throw new Error('Failed to fetch arrival data');
    const data = await res.json();
    return data.realtimeArrivalList || [];
}
async function fetchCongestion(line, station) {
    const res = await fetch(`/api/congestion?line=${encodeURIComponent(line)}&station=${encodeURIComponent(station)}`);
    if (!res.ok) throw new Error('Failed to fetch congestion data');
    return res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/hooks/useRealtimePosition.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRealtimePosition",
    ()=>useRealtimePosition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$seoulMetroApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/services/seoulMetroApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/constants/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useRealtimePosition(line, enabled = true) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'realtimePosition',
            line
        ],
        queryFn: {
            "useRealtimePosition.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$seoulMetroApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRealtimePosition"])(line)
        }["useRealtimePosition.useQuery"],
        refetchInterval: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].POLLING_INTERVALS.POSITION,
        enabled,
        retry: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].RETRY.COUNT,
        retryDelay: {
            "useRealtimePosition.useQuery": (attempt)=>Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].RETRY.DELAY * 2 ** attempt, 5000)
        }["useRealtimePosition.useQuery"],
        staleTime: 3000
    });
}
_s(useRealtimePosition, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/hooks/useRealtimeArrival.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRealtimeArrival",
    ()=>useRealtimeArrival
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$seoulMetroApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/services/seoulMetroApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/constants/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useRealtimeArrival(station, enabled = true) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'realtimeArrival',
            station
        ],
        queryFn: {
            "useRealtimeArrival.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$seoulMetroApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRealtimeArrival"])(station)
        }["useRealtimeArrival.useQuery"],
        refetchInterval: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].POLLING_INTERVALS.ARRIVAL,
        enabled,
        retry: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].RETRY.COUNT,
        staleTime: 5000
    });
}
_s(useRealtimeArrival, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/hooks/useCongestion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCongestion",
    ()=>useCongestion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$seoulMetroApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/services/seoulMetroApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/constants/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useCongestion(line, station, enabled = true) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'congestion',
            line,
            station
        ],
        queryFn: {
            "useCongestion.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$seoulMetroApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCongestion"])(line, station)
        }["useCongestion.useQuery"],
        refetchInterval: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].POLLING_INTERVALS.CONGESTION,
        enabled: enabled && !!station,
        retry: 1,
        staleTime: 15000
    });
}
_s(useCongestion, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StationSearch",
    ()=>StationSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$stores$2f$routeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/stores/routeStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function StationSearch() {
    _s();
    const { departure, arrival, isTracking, setStations, startTracking, stopTracking } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$stores$2f$routeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouteStore"])();
    const [fromInput, setFromInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(departure);
    const [toInput, setToInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(arrival);
    const handleStart = ()=>{
        setStations(fromInput, toInput);
        startTracking();
    };
    const handleStop = ()=>{
        stopTracking();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl shadow-lg p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-3 items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-gray-500 mb-1 block",
                                children: "출발역"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-blue-500",
                                        children: "●"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: fromInput,
                                        onChange: (e)=>setFromInput(e.target.value),
                                        className: "w-full pl-8 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50",
                                        placeholder: "출발역 입력",
                                        disabled: isTracking
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:flex items-center pb-1 text-gray-300 text-xl",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-gray-500 mb-1 block",
                                children: "도착역"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-red-500",
                                        children: "●"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: toInput,
                                        onChange: (e)=>setToInput(e.target.value),
                                        className: "w-full pl-8 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50",
                                        placeholder: "도착역 입력",
                                        disabled: isTracking
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: isTracking ? handleStop : handleStart,
                        className: `
            px-6 py-2.5 rounded-lg text-sm font-semibold text-white whitespace-nowrap transition-all
            ${isTracking ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-lg'}
          `,
                        children: isTracking ? '추적 중지' : '경로 추적 시작'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            !isTracking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-400 mt-3",
                children: "기본 경로: 6호선 태릉입구 → 약수(환승) → 3호선 매봉"
            }, void 0, false, {
                fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(StationSearch, "PsQSUPGl2QL3Ia9HNMBwJ1PEZ9Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$stores$2f$routeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouteStore"]
    ];
});
_c = StationSearch;
var _c;
__turbopack_context__.k.register(_c, "StationSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteMapView",
    ()=>RouteMapView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$lines$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/constants/lines.ts [app-client] (ecmascript)");
'use client';
;
;
;
function RouteMapView({ route, tracking }) {
    const seg1 = route.segments[0];
    const seg2 = route.segments[1];
    const seg1Color = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$lines$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE_COLORS"][seg1.line];
    const seg2Color = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$lines$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE_COLORS"][seg2?.line] || seg1Color;
    // 전체 역 수
    const totalStations = seg1.stations.length + (seg2 ? seg2.stations.length - 1 : 0);
    // SVG 레이아웃 계산
    const padding = 40;
    const svgWidth = 800;
    const svgHeight = 200;
    const lineY1 = 60; // 6호선 Y 위치
    const lineY2 = 140; // 3호선 Y 위치
    const transferX = padding + (seg1.stations.length - 1) / (totalStations - 1) * (svgWidth - padding * 2);
    // 각 역의 X 좌표 계산
    const getStationX = (segmentIndex, stationIndex)=>{
        let globalIndex;
        if (segmentIndex === 0) {
            globalIndex = stationIndex;
        } else {
            globalIndex = seg1.stations.length - 1 + stationIndex;
        }
        return padding + globalIndex / (totalStations - 1) * (svgWidth - padding * 2);
    };
    // 현재 역 찾기
    const findCurrentStation = ()=>{
        if (!tracking) return null;
        for(let si = 0; si < route.segments.length; si++){
            const idx = route.segments[si].stations.findIndex((s)=>s.name === tracking.currentStationName);
            if (idx !== -1) return {
                segmentIndex: si,
                stationIndex: idx
            };
        }
        return null;
    };
    const currentPos = findCurrentStation();
    const trainX = currentPos ? getStationX(currentPos.segmentIndex, currentPos.stationIndex) : null;
    const trainY = currentPos ? currentPos.segmentIndex === 0 ? lineY1 : lineY2 : null;
    // 지나온 역 판단
    const isStationPassed = (segIdx, stnIdx)=>{
        if (!tracking) return false;
        if (segIdx < tracking.currentSegmentIndex) return true;
        if (segIdx > tracking.currentSegmentIndex) return false;
        const currentSeg = route.segments[segIdx];
        const currentIdx = currentSeg.stations.findIndex((s)=>s.name === tracking.currentStationName);
        return stnIdx <= currentIdx;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl shadow-lg p-4 overflow-x-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-gray-500 mb-2 px-2",
                children: "노선도"
            }, void 0, false, {
                fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: `0 0 ${svgWidth} ${svgHeight}`,
                className: "w-full min-w-[600px]",
                preserveAspectRatio: "xMidYMid meet",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: getStationX(0, 0),
                        y1: lineY1,
                        x2: transferX,
                        y2: lineY1,
                        stroke: seg1Color,
                        strokeWidth: 4,
                        strokeLinecap: "round",
                        opacity: 0.3
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    tracking && tracking.currentSegmentIndex === 0 && trainX && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                        x1: getStationX(0, 0),
                        y1: lineY1,
                        x2: trainX,
                        y2: lineY1,
                        stroke: seg1Color,
                        strokeWidth: 4,
                        strokeLinecap: "round",
                        animate: {
                            x2: trainX
                        },
                        transition: {
                            duration: 0.8
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    tracking && tracking.currentSegmentIndex > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: getStationX(0, 0),
                        y1: lineY1,
                        x2: transferX,
                        y2: lineY1,
                        stroke: seg1Color,
                        strokeWidth: 4,
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: transferX,
                        y1: lineY1 + 8,
                        x2: transferX,
                        y2: lineY2 - 8,
                        stroke: "#999",
                        strokeWidth: 2,
                        strokeDasharray: "4 3"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: transferX + 8,
                        y: (lineY1 + lineY2) / 2 + 4,
                        fill: "#999",
                        fontSize: 10,
                        children: "환승"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    seg2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: transferX,
                                y1: lineY2,
                                x2: getStationX(1, seg2.stations.length - 1),
                                y2: lineY2,
                                stroke: seg2Color,
                                strokeWidth: 4,
                                strokeLinecap: "round",
                                opacity: 0.3
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            tracking && tracking.currentSegmentIndex === 1 && trainX && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                                x1: transferX,
                                y1: lineY2,
                                x2: trainX,
                                y2: lineY2,
                                stroke: seg2Color,
                                strokeWidth: 4,
                                strokeLinecap: "round",
                                animate: {
                                    x2: trainX
                                },
                                transition: {
                                    duration: 0.8
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    seg1.stations.map((station, idx)=>{
                        const x = getStationX(0, idx);
                        const passed = isStationPassed(0, idx);
                        const isCurrent = tracking?.currentStationName === station.name && tracking?.currentSegmentIndex === 0;
                        const isTransfer = station.name === '약수';
                        const showLabel = idx === 0 || idx === seg1.stations.length - 1 || isTransfer || isCurrent || idx % 3 === 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                isTransfer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: x - 6,
                                    y: lineY1 - 6,
                                    width: 12,
                                    height: 12,
                                    transform: `rotate(45 ${x} ${lineY1})`,
                                    fill: passed ? seg1Color : 'white',
                                    stroke: passed ? seg1Color : '#ccc',
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: x,
                                    cy: lineY1,
                                    r: isCurrent ? 5 : 3.5,
                                    fill: passed ? seg1Color : 'white',
                                    stroke: passed ? seg1Color : '#ccc',
                                    strokeWidth: isCurrent ? 2.5 : 1.5
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this),
                                showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: x,
                                    y: lineY1 - 14,
                                    textAnchor: "middle",
                                    fontSize: isCurrent ? 11 : 9,
                                    fontWeight: isCurrent ? 'bold' : 'normal',
                                    fill: isCurrent ? seg1Color : passed ? '#666' : '#bbb',
                                    children: station.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, `s1-${idx}`, true, {
                            fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this);
                    }),
                    seg2?.stations.map((station, idx)=>{
                        const x = getStationX(1, idx);
                        const passed = isStationPassed(1, idx);
                        const isCurrent = tracking?.currentStationName === station.name && tracking?.currentSegmentIndex === 1;
                        const isTransfer = station.name === '약수';
                        const showLabel = idx === 0 || idx === seg2.stations.length - 1 || isTransfer || isCurrent || idx % 3 === 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                isTransfer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: x - 6,
                                    y: lineY2 - 6,
                                    width: 12,
                                    height: 12,
                                    transform: `rotate(45 ${x} ${lineY2})`,
                                    fill: passed ? seg2Color : 'white',
                                    stroke: passed ? seg2Color : '#ccc',
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                                    lineNumber: 200,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: x,
                                    cy: lineY2,
                                    r: isCurrent ? 5 : 3.5,
                                    fill: passed ? seg2Color : 'white',
                                    stroke: passed ? seg2Color : '#ccc',
                                    strokeWidth: isCurrent ? 2.5 : 1.5
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                                    lineNumber: 208,
                                    columnNumber: 17
                                }, this),
                                showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: x,
                                    y: lineY2 + 22,
                                    textAnchor: "middle",
                                    fontSize: isCurrent ? 11 : 9,
                                    fontWeight: isCurrent ? 'bold' : 'normal',
                                    fill: isCurrent ? seg2Color : passed ? '#666' : '#bbb',
                                    children: station.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, `s2-${idx}`, true, {
                            fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this);
                    }),
                    trainX && trainY && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        animate: {
                            x: 0,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                            x: trainX,
                            y: trainY,
                            textAnchor: "middle",
                            dominantBaseline: "central",
                            fontSize: 20,
                            animate: {
                                x: trainX,
                                y: trainY
                            },
                            transition: {
                                duration: 0.8,
                                ease: 'easeInOut'
                            },
                            children: "🚇"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: 4,
                        y: lineY1 - 10,
                        width: 40,
                        height: 20,
                        rx: 4,
                        fill: seg1Color
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: 24,
                        y: lineY1 + 4,
                        textAnchor: "middle",
                        fill: "white",
                        fontSize: 10,
                        fontWeight: "bold",
                        children: seg1.line
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    seg2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: 4,
                                y: lineY2 - 10,
                                width: 40,
                                height: 20,
                                rx: 4,
                                fill: seg2Color
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: 24,
                                y: lineY2 + 4,
                                textAnchor: "middle",
                                fill: "white",
                                fontSize: 10,
                                fontWeight: "bold",
                                children: seg2.line
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c = RouteMapView;
var _c;
__turbopack_context__.k.register(_c, "RouteMapView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CongestionPanel",
    ()=>CongestionPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function getCongestionColor(value) {
    if (value <= 40) return '#2DB400'; // 녹색 - 여유
    if (value <= 60) return '#FFD600'; // 노란색 - 보통
    if (value <= 80) return '#FF6B00'; // 주황 - 혼잡
    return '#FF0000'; // 빨강 - 매우 혼잡
}
function getCongestionLabel(value) {
    if (value <= 40) return '여유';
    if (value <= 60) return '보통';
    if (value <= 80) return '혼잡';
    return '매우혼잡';
}
function CongestionPanel({ congestion, isLoading }) {
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-lg p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-semibold text-gray-500 mb-4",
                    children: "칸별 혼잡도"
                }, void 0, false, {
                    fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-pulse flex gap-1.5",
                    children: Array.from({
                        length: 10
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 h-24 bg-gray-200 rounded"
                        }, i, false, {
                            fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    if (!congestion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-lg p-6 text-center text-gray-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-semibold text-gray-500 mb-2",
                    children: "칸별 혼잡도"
                }, void 0, false, {
                    fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: "열차 선택 후 혼잡도 정보가 표시됩니다"
                }, void 0, false, {
                    fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    const minCar = congestion.congestionCar.indexOf(Math.min(...congestion.congestionCar));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl shadow-lg p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-gray-500",
                        children: "칸별 혼잡도"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-400",
                        children: [
                            "전체 평균: ",
                            congestion.congestionTrain,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1 items-end",
                children: congestion.congestionCar.map((value, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-center",
                        children: [
                            idx === minCar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-green-600 font-bold mb-1",
                                children: "추천"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
                w-full rounded-t-sm relative
                ${idx === 0 ? 'rounded-l-md' : ''}
                ${idx === congestion.congestionCar.length - 1 ? 'rounded-r-md' : ''}
                ${idx === minCar ? 'ring-2 ring-green-400 ring-offset-1' : ''}
              `,
                                style: {
                                    height: `${Math.max(20, value * 0.8)}px`,
                                    backgroundColor: getCongestionColor(value),
                                    opacity: 0.85
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-600 mt-1 tabular-nums",
                                children: [
                                    value,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-400",
                                children: [
                                    idx + 1,
                                    "칸"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 mt-4 justify-center",
                children: [
                    {
                        label: '여유',
                        color: '#2DB400',
                        range: '~40%'
                    },
                    {
                        label: '보통',
                        color: '#FFD600',
                        range: '40~60%'
                    },
                    {
                        label: '혼잡',
                        color: '#FF6B00',
                        range: '60~80%'
                    },
                    {
                        label: '매우혼잡',
                        color: '#FF0000',
                        range: '80%~'
                    }
                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2.5 h-2.5 rounded-sm",
                                style: {
                                    backgroundColor: item.color
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-500",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.label, true, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = CongestionPanel;
var _c;
__turbopack_context__.k.register(_c, "CongestionPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/hooks/useCountdown.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCountdown",
    ()=>useCountdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useCountdown(targetSeconds) {
    _s();
    const [remaining, setRemaining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(targetSeconds);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountdown.useEffect": ()=>{
            if (targetSeconds === null || targetSeconds <= 0) {
                setRemaining(targetSeconds);
                return;
            }
            startTimeRef.current = Date.now();
            initialValueRef.current = targetSeconds;
            setRemaining(targetSeconds);
            const interval = setInterval({
                "useCountdown.useEffect.interval": ()=>{
                    if (startTimeRef.current === null || initialValueRef.current === null) return;
                    const elapsed = (Date.now() - startTimeRef.current) / 1000;
                    const newRemaining = Math.max(0, initialValueRef.current - elapsed);
                    setRemaining(Math.round(newRemaining));
                    if (newRemaining <= 0) {
                        clearInterval(interval);
                    }
                }
            }["useCountdown.useEffect.interval"], 1000);
            return ({
                "useCountdown.useEffect": ()=>clearInterval(interval)
            })["useCountdown.useEffect"];
        }
    }["useCountdown.useEffect"], [
        targetSeconds
    ]);
    const minutes = remaining !== null ? Math.floor(remaining / 60) : 0;
    const seconds = remaining !== null ? remaining % 60 : 0;
    return {
        remaining,
        minutes,
        seconds,
        formatted: remaining !== null ? `${minutes}분 ${String(seconds).padStart(2, '0')}초` : '--:--',
        isExpired: remaining !== null && remaining <= 0
    };
}
_s(useCountdown, "M5bGVLpXtLuht01waCwXpU4+ukU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpcomingTrains",
    ()=>UpcomingTrains
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$seoulMetroApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/services/seoulMetroApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useCountdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/hooks/useCountdown.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/constants/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ArrivalCountdown({ seconds }) {
    _s();
    const { minutes, seconds: secs, isExpired } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useCountdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountdown"])(seconds);
    if (isExpired) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-green-600 font-bold text-2xl",
        children: "곧 도착"
    }, void 0, false, {
        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
        lineNumber: 18,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "tabular-nums",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-bold text-gray-900",
                children: minutes
            }, void 0, false, {
                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-gray-400",
                children: "분 "
            }, void 0, false, {
                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-bold text-gray-900",
                children: String(secs).padStart(2, '0')
            }, void 0, false, {
                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-gray-400",
                children: "초"
            }, void 0, false, {
                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(ArrivalCountdown, "OQcrZzRFTABXPerO1NJuw8uPLTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useCountdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountdown"]
    ];
});
_c = ArrivalCountdown;
function UpcomingTrains({ station, targetLine, targetDirection, directionLabel }) {
    _s1();
    const { data: arrivals, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'upcoming-arrivals',
            station
        ],
        queryFn: {
            "UpcomingTrains.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$seoulMetroApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRealtimeArrival"])(station)
        }["UpcomingTrains.useQuery"],
        refetchInterval: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$constants$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].POLLING_INTERVALS.ARRIVAL,
        staleTime: 5000
    });
    const lineId = targetLine === '6호선' ? '1006' : '1003';
    const directionStr = targetDirection === 'up' ? '상행' : '하행';
    // 해당 노선 + 방향 + 아직 출발하지 않은 열차만 (arvlCd !== '2')
    const filtered = (arrivals ?? []).filter((a)=>a.subwayId === lineId && a.updnLine === directionStr && a.arvlCd !== '2').sort((a, b)=>parseInt(a.barvlDt) - parseInt(b.barvlDt));
    const getAdjustedSeconds = (arrival)=>{
        const seconds = parseInt(arrival.barvlDt, 10);
        if (isNaN(seconds)) return 0;
        const recptnTime = new Date(arrival.recptnDt.replace(' ', 'T')).getTime();
        if (isNaN(recptnTime)) return seconds;
        const elapsed = Math.max(0, (Date.now() - recptnTime) / 1000);
        return Math.max(0, Math.round(seconds - elapsed));
    };
    // 도착 시각 계산 (현재시각 + 남은초)
    const getArrivalTime = (seconds)=>{
        const arrival = new Date(Date.now() + seconds * 1000);
        return `${String(arrival.getHours()).padStart(2, '0')}:${String(arrival.getMinutes()).padStart(2, '0')}`;
    };
    const getStatusLabel = (code)=>{
        switch(code){
            case '0':
                return {
                    text: '진입 중',
                    color: 'bg-blue-500 text-white'
                };
            case '1':
                return {
                    text: '도착',
                    color: 'bg-green-500 text-white'
                };
            case '5':
                return {
                    text: '전역 도착',
                    color: 'bg-purple-100 text-purple-700'
                };
            case '4':
                return {
                    text: '전역 진입',
                    color: 'bg-orange-100 text-orange-700'
                };
            case '3':
                return {
                    text: '전역 출발',
                    color: 'bg-gray-100 text-gray-600'
                };
            default:
                return {
                    text: '접근 중',
                    color: 'bg-gray-100 text-gray-600'
                };
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-lg p-5 animate-pulse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-5 bg-gray-200 rounded w-48 mb-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-20 bg-gray-100 rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-20 bg-gray-100 rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-white font-bold text-base flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 bg-white rounded-full animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            station,
                            "역에 오는 열차"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-100 text-xs mt-0.5",
                        children: [
                            targetLine,
                            " · ",
                            directionLabel
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-3",
                children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8 text-gray-400 text-sm",
                    children: "현재 접근 중인 열차가 없습니다"
                }, void 0, false, {
                    fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this) : filtered.map((arrival, idx)=>{
                    const adjustedSec = getAdjustedSeconds(arrival);
                    const isFirst = idx === 0;
                    const status = getStatusLabel(arrival.arvlCd);
                    const arrivalTime = getArrivalTime(adjustedSec);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
                  rounded-xl border p-4 transition-all
                  ${isFirst ? 'border-blue-200 bg-blue-50/60 shadow-sm' : 'border-gray-100 bg-gray-50/30'}
                `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    isFirst && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs px-2 py-0.5 rounded-full bg-red-500 text-white font-bold",
                                        children: "첫 번째 열차"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                        lineNumber: 121,
                                        columnNumber: 21
                                    }, this),
                                    !isFirst && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-600",
                                        children: "다음 열차"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                        lineNumber: 126,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] px-1.5 py-0.5 rounded-full ${status.color}`,
                                        children: status.text
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                lineNumber: 119,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-end justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 mb-1",
                                                children: [
                                                    station,
                                                    "역 도착까지"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrivalCountdown, {
                                                seconds: adjustedSec
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                        lineNumber: 137,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "도착 예정"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                                lineNumber: 142,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrivalCountdown, {
                                                seconds: adjustedSec
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                                lineNumber: 143,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                        lineNumber: 141,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                lineNumber: 136,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2.5 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "현재 위치: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600 font-medium",
                                                children: arrival.arvlMsg3
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                                lineNumber: 149,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                        lineNumber: 149,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            arrival.bstatnNm,
                                            "행 · #",
                                            arrival.btrainNo
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                        lineNumber: 150,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                                lineNumber: 148,
                                columnNumber: 17
                            }, this)
                        ]
                    }, `${arrival.btrainNo}-${idx}`, true, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                        lineNumber: 108,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-2.5 bg-gray-50 border-t border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-gray-400 text-center",
                    children: "10초마다 자동 갱신 · 서울교통공사 실시간 데이터"
                }, void 0, false, {
                    fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s1(UpcomingTrains, "z895g/JZajBXIi/vtb/oZGG6euE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c1 = UpcomingTrains;
var _c, _c1;
__turbopack_context__.k.register(_c, "ArrivalCountdown");
__turbopack_context__.k.register(_c1, "UpcomingTrains");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/hooks/usePushNotification.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePushNotification",
    ()=>usePushNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function usePushNotification() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('loading');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePushNotification.useEffect": ()=>{
            if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
                setState('unsupported');
                return;
            }
            const checkState = {
                "usePushNotification.useEffect.checkState": async ()=>{
                    const permission = Notification.permission;
                    if (permission === 'denied') {
                        setState('denied');
                        return;
                    }
                    try {
                        const registration = await navigator.serviceWorker.getRegistration('/sw.js');
                        if (registration) {
                            const subscription = await registration.pushManager.getSubscription();
                            setState(subscription ? 'subscribed' : 'unsubscribed');
                        } else {
                            setState('unsubscribed');
                        }
                    } catch  {
                        setState('unsubscribed');
                    }
                }
            }["usePushNotification.useEffect.checkState"];
            checkState();
        }
    }["usePushNotification.useEffect"], []);
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePushNotification.useCallback[subscribe]": async ()=>{
            try {
                // 서비스워커 등록
                const registration = await navigator.serviceWorker.register('/sw.js');
                await navigator.serviceWorker.ready;
                // 알림 권한 요청
                const permission = await Notification.requestPermission();
                if (permission === 'denied') {
                    setState('denied');
                    return false;
                }
                // Push 구독
                const vapidKey = ("TURBOPACK compile-time value", "BPdaGKaaibSuvRYX2Xtsidu2ITY0W_gQb7oNuH4Yib8rB-ZPfcWyzP038Q-fN2Zcx849rIDTYyRxtEkoxeejMpM");
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                const subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(vapidKey).buffer
                });
                // 서버에 구독 정보 전송
                const res = await fetch('/api/push/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(subscription.toJSON())
                });
                if (res.ok) {
                    setState('subscribed');
                    return true;
                }
                return false;
            } catch (err) {
                console.error('Push subscription failed:', err);
                return false;
            }
        }
    }["usePushNotification.useCallback[subscribe]"], []);
    const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePushNotification.useCallback[unsubscribe]": async ()=>{
            try {
                const registration = await navigator.serviceWorker.getRegistration('/sw.js');
                if (registration) {
                    const subscription = await registration.pushManager.getSubscription();
                    if (subscription) {
                        await subscription.unsubscribe();
                    }
                }
                setState('unsubscribed');
                return true;
            } catch  {
                return false;
            }
        }
    }["usePushNotification.useCallback[unsubscribe]"], []);
    const testNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePushNotification.useCallback[testNotification]": async ()=>{
            try {
                const res = await fetch('/api/push/send', {
                    method: 'POST'
                });
                return res.ok;
            } catch  {
                return false;
            }
        }
    }["usePushNotification.useCallback[testNotification]"], []);
    return {
        state,
        subscribe,
        unsubscribe,
        testNotification
    };
}
_s(usePushNotification, "Ck7hhGuncMqAI3zZvRlOzns8fK4=");
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for(let i = 0; i < rawData.length; ++i){
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/components/push/PushNotificationToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PushNotificationToggle",
    ()=>PushNotificationToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$usePushNotification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/hooks/usePushNotification.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PushNotificationToggle() {
    _s();
    const { state, subscribe, unsubscribe, testNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$usePushNotification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePushNotification"])();
    const [testing, setTesting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (state === 'loading') return null;
    if (state === 'unsupported') return null;
    const handleToggle = async ()=>{
        if (state === 'subscribed') {
            await unsubscribe();
        } else {
            await subscribe();
        }
    };
    const handleTest = async ()=>{
        setTesting(true);
        await testNotification();
        setTesting(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between py-3 px-4 bg-white rounded-xl border border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg",
                        children: "🔔"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/push/PushNotificationToggle.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-gray-800",
                                children: "출근 알림"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/push/PushNotificationToggle.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400",
                                children: state === 'denied' ? '브라우저 설정에서 알림을 허용해주세요' : state === 'subscribed' ? '평일 오전 8:35 열차 도착 알림' : '알림을 켜면 출근 시간에 자동 알림'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/subway-tracker/src/components/push/PushNotificationToggle.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/push/PushNotificationToggle.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/subway-tracker/src/components/push/PushNotificationToggle.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 shrink-0",
                children: [
                    state === 'subscribed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleTest,
                        disabled: testing,
                        className: "text-xs text-blue-500 hover:text-blue-600 disabled:text-gray-300",
                        children: testing ? '전송중...' : '테스트'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/push/PushNotificationToggle.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleToggle,
                        disabled: state === 'denied',
                        className: `relative w-11 h-6 rounded-full transition-colors ${state === 'subscribed' ? 'bg-blue-500' : 'bg-gray-300'} ${state === 'denied' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${state === 'subscribed' ? 'translate-x-5' : 'translate-x-0'}`
                        }, void 0, false, {
                            fileName: "[project]/Desktop/subway-tracker/src/components/push/PushNotificationToggle.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/components/push/PushNotificationToggle.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/subway-tracker/src/components/push/PushNotificationToggle.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/subway-tracker/src/components/push/PushNotificationToggle.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(PushNotificationToggle, "YUK0GnADJwChOB4oNxszO9egumc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$usePushNotification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePushNotification"]
    ];
});
_c = PushNotificationToggle;
var _c;
__turbopack_context__.k.register(_c, "PushNotificationToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/subway-tracker/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$stores$2f$routeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/stores/routeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$stores$2f$trackingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/stores/trackingStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useRealtimePosition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/hooks/useRealtimePosition.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useRealtimeArrival$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/hooks/useRealtimeArrival.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useCongestion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/hooks/useCongestion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$routeCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/services/routeCalculator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$components$2f$search$2f$StationSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/components/search/StationSearch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$components$2f$route$2d$map$2f$RouteMapView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/components/route-map/RouteMapView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$components$2f$congestion$2f$CongestionPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/components/congestion/CongestionPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$components$2f$arrival$2f$UpcomingTrains$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/components/arrival/UpcomingTrains.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$components$2f$push$2f$PushNotificationToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/subway-tracker/src/components/push/PushNotificationToggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const { route, isTracking } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$stores$2f$routeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouteStore"])();
    const { progress, setProgress, setError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$stores$2f$trackingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrackingStore"])();
    // 현재 추적 중인 구간
    const currentSegment = route?.segments[progress?.currentSegmentIndex ?? 0];
    const currentLine = currentSegment?.line ?? '6호선';
    const currentStation = progress?.currentStationName ?? route?.segments[0]?.fromStation.name ?? '태릉입구';
    // 실시간 열차 위치 폴링 (5초)
    const { data: line6Trains } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useRealtimePosition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimePosition"])('6호선', isTracking);
    const { data: line3Trains } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useRealtimePosition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimePosition"])('3호선', isTracking);
    // 실시간 도착 정보 폴링 (10초)
    const { data: arrivalData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useRealtimeArrival$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimeArrival"])(currentStation, isTracking);
    // 칸별 혼잡도 (30초)
    const { data: congestion, isLoading: congestionLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useCongestion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCongestion"])(currentLine, currentStation, isTracking);
    // 열차 위치 업데이트 처리
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!isTracking || !route) return;
            const segmentIndex = progress?.currentSegmentIndex ?? 0;
            const segment = route.segments[segmentIndex];
            if (!segment) return;
            const trains = segmentIndex === 0 ? line6Trains : line3Trains;
            if (!trains || trains.length === 0) return;
            // 현재 경로 방향과 일치하는 열차 필터링
            const directionCode = segment.direction === 'up' ? '0' : '1';
            const routeStationNames = segment.stations.map({
                "Home.useEffect.routeStationNames": (s)=>s.name
            }["Home.useEffect.routeStationNames"]);
            const matchingTrains = trains.filter({
                "Home.useEffect.matchingTrains": (t)=>{
                    const matchesDirection = t.updnLine === directionCode;
                    const onRoute = routeStationNames.includes(t.statnNm);
                    return matchesDirection && onRoute;
                }
            }["Home.useEffect.matchingTrains"]);
            if (matchingTrains.length > 0) {
                // 출발역에서 가장 가까운 열차 선택
                const fromIdx = segment.stations.findIndex({
                    "Home.useEffect.fromIdx": (s)=>s.name === segment.fromStation.name
                }["Home.useEffect.fromIdx"]);
                let bestTrain = matchingTrains[0];
                let bestDistance = Infinity;
                for (const train of matchingTrains){
                    const trainIdx = segment.stations.findIndex({
                        "Home.useEffect.trainIdx": (s)=>s.name === train.statnNm
                    }["Home.useEffect.trainIdx"]);
                    const distance = Math.abs(trainIdx - fromIdx);
                    if (distance < bestDistance) {
                        bestDistance = distance;
                        bestTrain = train;
                    }
                }
                const newProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$services$2f$routeCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateProgress"])(route, bestTrain.statnNm, bestTrain.trainSttus, segmentIndex, false);
                setProgress(newProgress);
            }
        }
    }["Home.useEffect"], [
        line6Trains,
        line3Trains,
        isTracking,
        route,
        progress?.currentSegmentIndex,
        setProgress
    ]);
    // ETA 계산
    const eta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[eta]": ()=>{
            if (!arrivalData || arrivalData.length === 0) return null;
            // 현재 경로 방향과 일치하는 도착 정보 찾기
            const relevantArrival = arrivalData[0];
            if (!relevantArrival) return null;
            const seconds = parseInt(relevantArrival.barvlDt, 10);
            if (isNaN(seconds)) return null;
            // recptnDt 보정
            const recptnTime = new Date(relevantArrival.recptnDt).getTime();
            const now = Date.now();
            const elapsed = Math.max(0, (now - recptnTime) / 1000);
            return Math.max(0, Math.round(seconds - elapsed));
        }
    }["Home.useMemo[eta]"], [
        arrivalData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto px-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-bold text-gray-900 flex items-center gap-2",
                            children: "🚇 서울 지하철 실시간 추적"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 mt-1",
                            children: "배달의민족처럼 내 열차를 실시간으로 확인하세요"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto px-4 py-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$components$2f$search$2f$StationSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StationSearch"], {}, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$components$2f$arrival$2f$UpcomingTrains$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpcomingTrains"], {
                        station: "태릉입구",
                        targetLine: "6호선",
                        targetDirection: "up",
                        directionLabel: "약수·이태원 방면"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$components$2f$push$2f$PushNotificationToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PushNotificationToggle"], {}, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    route && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$components$2f$route$2d$map$2f$RouteMapView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteMapView"], {
                        route: route,
                        tracking: progress
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    isTracking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$components$2f$congestion$2f$CongestionPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CongestionPanel"], {
                        congestion: congestion ?? null,
                        isLoading: congestionLoading
                    }, void 0, false, {
                        fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    route && !isTracking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm",
                                children: [
                                    "총 ",
                                    route.totalStations,
                                    "개 역 | 예상 소요시간 약 ",
                                    route.totalEstimatedMinutes,
                                    "분"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-xs mt-1",
                                children: [
                                    "6호선 ",
                                    route.segments[0].stations.length - 1,
                                    "역 + 환승 + 3호선 ",
                                    route.segments[1]?.stations.length ? route.segments[1].stations.length - 1 : 0,
                                    "역"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/subway-tracker/src/app/page.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(Home, "PWdNDI58ooTeE8K55r1zpQ7wQD0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$stores$2f$routeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouteStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$stores$2f$trackingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrackingStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useRealtimePosition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimePosition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useRealtimePosition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimePosition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useRealtimeArrival$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimeArrival"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$subway$2d$tracker$2f$src$2f$hooks$2f$useCongestion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCongestion"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_subway-tracker_src_23658fa8._.js.map