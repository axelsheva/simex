import fetch from 'node-fetch';

import { Pair, SerializedPair } from 'src/models/pair';

const BASE_URL = 'https://simex.global/api';

export const getPairs = async (): Promise<Array<Pair>> => {
    const res = await fetch(`${BASE_URL}/pairs`);
    const json: { data: Array<SerializedPair> } = await res.json();

    return json.data.map(pair => Pair.deserialize(pair));
}
