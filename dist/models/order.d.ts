export declare type SerializedOrder = {
    id: number;
    side: string;
    price: number;
    size: number;
    amount: number;
    status: string;
};
export declare class Order {
    id: number;
    side: string;
    price: number;
    size: number;
    amount: number;
    status: string;
    constructor(data: {
        id: number;
        side: string;
        price: number;
        size: number;
        amount: number;
        status: string;
    });
    serialize: () => SerializedOrder;
    static deserialize: (data: SerializedOrder) => Order;
}
