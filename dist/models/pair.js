"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pair {
    constructor(data) {
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
    static deserialize(pair) {
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
    serialize() {
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
exports.Pair = Pair;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFpci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcGFpci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQXlCQSxNQUFhLElBQUk7SUF3QmIsWUFBWSxJQXVCWDtRQUNHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBb0I7UUFDbkMsT0FBTyxJQUFJLElBQUksQ0FBQztZQUNaLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJ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