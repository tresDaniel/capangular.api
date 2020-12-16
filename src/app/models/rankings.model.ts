export interface Ranking {
    account_id: number;
    score: number;
    personaname: string;
    name?: any;
    avatar: string;
    last_login?: Date;
    rank_tier?: number;
}

export interface Rankings {
    hero_id?: any;
    rankings: Ranking[];
}