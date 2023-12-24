interface CompanyType {
  id: string;
  name: string;
  hrefLogo: string;
}

export const company: CompanyType = {
  id: "1",
  name: "Virtue Eye Care",
  hrefLogo: "https://picsum.photos/id/200/200",
};

interface LocationType {
  id: string;
  name: string;
  address?: string;
  hrefLogo: string;
}

export const locations: LocationType[] = [
  {
    id: "1",
    name: "Walmart 52nd",
    address: "1234 52nd St, Fargo, ND 58104",
    hrefLogo: "https://picsum.photos/id/120/200",
  },
  {
    id: "2",
    name: "LensCrafters",
    address: "567 13nd St, Fargo, ND 58104",
    hrefLogo: "https://picsum.photos/id/121/200",
  },
  {
    id: "3",
    name: "Costco",
    address: "890 2nd St, Fargo, ND 58104",
    hrefLogo: "https://picsum.photos/id/122/200",
  },
];

interface UserType {
  id: string;
  name: string;
  hrefProfile: string;
}
export const user: UserType = {
  id: "1",
  name: "Dr. Aaron Motacek",
  hrefProfile: "https://gravatar.com/avatar/hash",
};
