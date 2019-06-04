export type SerializedPair = {
    id: number,
    name: string,
    base: {
        id: number,
        name: string,
        description: string,
    },
    quote: {
        id: number,
        name: string,
        description: string,
    },
    high_price: string,
    low_price: string,
    buy_price: string,
    sell_price: string,
    last_price: string,
    change_amount: string,
    change_percent: string,
    base_volume: string,
    quote_volume: string,
    is_security: boolean,
};

export class Pair {
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
        id: number,
        name: string,
        base: {
            id: number,
            name: string,
            description: string,
        },
        quote: {
            id: number,
            name: string,
            description: string,
        },
        highPrice: number,
        lowPrice: number,
        buyPrice: number,
        sellPrice: number,
        lastPrice: number,
        changeAmount: number,
        changePercent: number,
        baseVolume: number,
        quoteVolume: number,
        isSecurity: boolean,
    }) {
        this.id = data.id;
        this.name = data.name;
        this.base = data.base;
        this.quote = data.quote;
        this.highPrice = data.highPrice;
        this.lowPrice = data.lowPrice;
        this.buyPrice = data.buyPrice;
        this.sellPrice = data.sellPrice;
        this.lastPrice = data.lastPrice;
        this.changeAmount = data.changeAmount;
        this.changePercent = data.changePercent;
        this.baseVolume = data.baseVolume;
        this.quoteVolume = data.quoteVolume;
        this.isSecurity = data.isSecurity;
    }

    static deserialize(pair: SerializedPair): Pair {
        return new Pair({
            id: pair.id,
            name: pair.name,
            base: {
                id: pair.base.id,
                name: pair.base.name,
                description: pair.base.description,
            },
            quote: {
                id: pair.quote.id,
                name: pair.quote.name,
                description: pair.quote.description,
            },
            highPrice: Number(pair.high_price),
            lowPrice: Number(pair.low_price),
            buyPrice: Number(pair.buy_price),
            sellPrice: Number(pair.sell_price),
            lastPrice: Number(pair.last_price),
            changeAmount: Number(pair.change_amount),
            changePercent: Number(pair.change_percent),
            baseVolume: Number(pair.base_volume),
            quoteVolume: Number(pair.quote_volume),
            isSecurity: pair.is_security,
        });
    }

    serialize(): SerializedPair {
        return {
            id: this.id,
            name: this.name,
            base: {
                id: this.base.id,
                name: this.base.name,
                description: this.base.description,
            },
            quote: {
                id: this.quote.id,
                name: this.quote.name,
                description: this.quote.description,
            },
            high_price: this.highPrice.toString(),
            low_price: this.lowPrice.toString(),
            buy_price: this.buyPrice.toString(),
            sell_price: this.sellPrice.toString(),
            last_price: this.lastPrice.toString(),
            change_amount: this.changeAmount.toString(),
            change_percent: this.changePercent.toString(),
            base_volume: this.baseVolume.toString(),
            quote_volume: this.quoteVolume.toString(),
            is_security: this.isSecurity,
        };
    }
}
