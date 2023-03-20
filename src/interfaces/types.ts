export interface Teams {
    name: string;
    group: string;
}

export interface Encounters {
  date: Date;
  group: string;
  home_team: string;
  guest_team: string;
  home_points: number;
  guest_points: number;
  url: string;
  verified: boolean;
}

export interface TableEntry {
  name: string;
  games: number;
  wins: number;
  loses: number;
  plus: number;
  minus: number;
  points: number;
}

export interface Sponsor {
  source: string;
  name: string;
}

export interface Admin {
  uid: string;
  team: string;
}