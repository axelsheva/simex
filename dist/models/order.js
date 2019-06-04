"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(data) {
        this.serialize = () => {
            return {
                id: this.id,
                side: this.side,
                price: this.price,
                size: this.size,
                amount: this.amount,
                status: this.status,
            };
        };
        this.id = data.id;
        this.side = data.side;
        this.price = data.price;
        this.size = data.size;
        this.amount = data.amount;
        this.status = data.status;
    }
}
Order.deserialize = (data) => {
    return new Order({
        id: data.id,
        side: data.side,
        price: data.price,
        size: data.size,
        amount: data.amount,
        status: data.status,
    });
};
exports.Order = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL29yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0EsTUFBYSxLQUFLO0lBUWQsWUFBWSxJQU9YO1FBU0QsY0FBUyxHQUFHLEdBQW9CLEVBQUU7WUFDOUIsT0FBTztnQkFDSCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3RCLENBQUM7UUFDTixDQUFDLENBQUE7UUFqQkcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDOUIsQ0FBQzs7QUFhTSxpQkFBVyxHQUFHLENBQUMsSUFBcUIsRUFBUyxFQUFFO0lBQ2xELE9BQU8sSUFBSSxLQUFLLENBQUM7UUFDYixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtLQUN0QixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUE7QUE1Q0wsc0JBNkNDIn0=