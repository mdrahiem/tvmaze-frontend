export interface Schedule {
  time?: string | null;
  days?: string[] | null;
}

export interface Rating {
  average?: number | null;
}

export interface Country {
  name?: string | null;
  code?: string | null;
  timezone?: string | null;
}

export interface Network {
  id?: number | null;
  name?: string | null;
  country?: Country | null;
  officialSite?: string | null;
}

export interface Country2 {
  name?: string | null;
  code?: string | null;
  timezone?: string | null;
}

export interface WebChannel {
  id?: number | null;
  name?: string | null;
  country?: Country2 | null;
  officialSite?: string | null;
}

export interface DvdCountry {
  name?: string | null;
  code?: string | null;
  timezone?: string | null;
}

export interface Externals {
  tvrage?: number | null;
  thetvdb?: number | null;
  imdb?: string | null;
}

export interface Image {
  medium?: string;
  original?: string;
}

export interface Self {
  href?: string;
}

export interface Previousepisode {
  href?: string;
}

export interface Nextepisode {
  href?: string;
}

export interface Links {
  self?: Self;
  previousepisode?: Previousepisode;
  nextepisode?: Nextepisode;
}

export interface IShow {
  id: number;
  url?: string | null;
  name?: string | null;
  type?: string | null;
  language?: string | null;
  genres?: string[];
  status?: string | null;
  runtime?: number | null;
  averageRuntime?: number | null;
  premiered?: string | null;
  ended?: string | null;
  officialSite?: string | null;
  schedule?: Schedule | null;
  rating?: Rating | null;
  weight?: number | null;
  network?: Network | null;
  webChannel?: WebChannel | null;
  dvdCountry?: DvdCountry | null;
  externals?: Externals | null;
  image?: Image;
  summary?: string | null;
  updated?: number | null;
  _links?: Links | null;
}

export interface IShows {
  shows: IShow[];
}
