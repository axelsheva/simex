export type SerializedOrder = {
    id: number,
    side: string,
    price: number,
    size: number,
    amount: number,
    status: string,
};

export class Order {
    id: number;
    side: string;
    price: number;
    size: number;
    amount: number;
    status: string;

    constructor(data: {
        id: number,
        side: string,
        price: number,
        size: number,
        amount: number,
        status: string,
    }) {
        this.id = data.id;
        this.side = data.side;
        this.price = data.price;
        this.size = data.size;
        this.amount = data.amount;
        this.status = data.status;
    }

    serialize = (): SerializedOrder => {
        return {
            id: this.id,
            side: this.side,
            price: this.price,
            size: this.size,
            amount: this.amount,
            status: this.status,
        };
    }

    static deserialize = (data: SerializedOrder): Order => {
        return new Order({
            id: data.id,
            side: data.side,
            price: data.price,
            size: data.size,
            amount: data.amount,
            status: data.status,
        });
    }
}
