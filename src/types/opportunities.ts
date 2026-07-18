export interface Country {
  name: string;
  code: string;
  states: string[];
  sectors: string[];
}

export type OpportunitiesData = Country[];

export interface Opportunity {
  ref: string;
  country: string;
  state: string;
  sector: string;
  title: string;
  price: number;
}
