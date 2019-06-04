export declare type SerializedPair = {
    id: number;
    name: string;
    base: {
        id: number;
        name: string;
        description: string;
    };
    quote: {
        id: number;
        name: string;
        description: string;
    };
    high_price: string;
    low_price: string;
    buy_price: string;
    sell_price: string;
    last_price: string;
    change_amount: string;
    change_percent: string;
    base_volume: string;
    quote_volume: string;
    is_security: boolean;
};
export declare class Pair {
    id: number;
    name: string;
    base: {
        id: number;
        name: string;
        description: string;
    };
    quote: {
        id: number;
        name: string;
        description: string;
    };
    highPrice: number;
    lowPrice: number;
    buyPrice: number;
    sellPrice: number;
    lastPrice: number;
    changeAmount: number;
    changePercent: number;
    baseVolume: number;
    quoteVolume: number;
    isSecurity: boolean;
    constructor(data: {
        id: number;
        name: string;
        base: {
            id: number;
            name: string;
            description: string;
        };
        quote: {
            id: number;
            name: string;
            description: string;
        };
        highPrice: number;
        lowPrice: number;
        buyPrice: number;
        sellPrice: number;
        lastPrice: number;
        changeAmount: number;
        changePercent: number;
        baseVolume: number;
        quoteVolume: number;
        isSecurity: boolean;
    });
    static deserialize(pair: SerializedPair): Pair;
    serialize(): SerializedPair;
}
