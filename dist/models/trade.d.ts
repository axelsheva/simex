export declare type SerializedTrade = {
    id: number;
    side: string;
    price: number;
    size: number;
    amount: number;
    created_at: Date;
};
export declare class Trade {
    id: number;
    side: string;
    price: number;
    size: number;
    amount: number;
    createdAt: Date;
    constructor(data: {
        id: number;
        side: string;
        price: number;
        size: number;
        amount: number;
        createdAt: Date;
    });
    serialize: () => SerializedTrade;
    static deserialize: (data: SerializedTrade) => Trade;
}
