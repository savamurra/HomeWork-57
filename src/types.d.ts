export interface IUsers {
  id: string;
  name: string;
  email: string;
  activity: boolean;
  role: string;
  urlImage: string;
}

export interface IUserMutation {
  name: string;
  email: string;
  activity: boolean;
  role: string;
  urlImage: string;
}