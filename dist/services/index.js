"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const pair_1 = require("src/models/pair");
const BASE_URL = 'https://simex.global/api';
exports.getPairs = () => __awaiter(this, void 0, void 0, function* () {
    const res = yield node_fetch_1.default(`${BASE_URL}/pairs`);
    const json = yield res.json();
    return json.data.map(pair => pair_1.Pair.deserialize(pair));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDREQUErQjtBQUUvQiwwQ0FBdUQ7QUFFdkQsTUFBTSxRQUFRLEdBQUcsMEJBQTBCLENBQUM7QUFFL0IsUUFBQSxRQUFRLEdBQUcsR0FBK0IsRUFBRTtJQUNyRCxNQUFNLEdBQUcsR0FBRyxNQUFNLG9CQUFLLENBQUMsR0FBRyxRQUFRLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sSUFBSSxHQUFvQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUUvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQSxDQUFBIn0=