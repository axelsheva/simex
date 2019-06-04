export type SerializedTrade = {
    id: number,
    side: string,
    price: number,
    size: number,
    amount: number,
    created_at: Date,
};

export class Trade {
    id: number;
    side: string;
    price: number;
    size: number;
    amount: number;
    createdAt: Date;

    constructor(data: {
        id: number,
        side: string,
        price: number,
        size: number,
        amount: number,
        createdAt: Date,
    }) {
        this.id = data.id;
        this.side = data.side;
        this.price = data.price;
        this.size = data.size;
        this.amount = data.amount;
        this.createdAt = data.createdAt;
    }

    serialize = (): SerializedTrade => {
        return {
            id: this.id,
            side: this.side,
            price: this.price,
            size: this.size,
            amount: this.amount,
            created_at: this.createdAt,
        };
    }

    static deserialize = (data: SerializedTrade): Trade => {
        return new Trade({
            id: data.id,
            side: data.side,
            price: data.price,
            size: data.size,
            amount: data.amount,
            createdAt: data.created_at,
        });
    }
}
