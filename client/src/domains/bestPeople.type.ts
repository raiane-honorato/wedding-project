export interface BestPerson {
  name: string;
  description: string;
  photo: string;
}

export interface BestPeople {
  groom: Array<BestPerson>;
  bride: Array<BestPerson>;
}
