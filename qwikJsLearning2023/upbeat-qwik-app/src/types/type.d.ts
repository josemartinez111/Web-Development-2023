// FILE: types/type.d.ts
// _______________________________________________

// _______________________________________________


export type Song = {
  src: string;
  preview: string;
  name: string;
  artist: string;
  cover: string;
  tags: Array<string>;
  id: number;
}

export type SongsListResponse = Array<Song>
// _______________________________________________

export type SideBarItemType = {
  name: string
  route: string
  icon: string
}

export type SideBarItemsListType = Array<SideBarItemType>
// _______________________________________________
