export interface User {
  name: string;
  lastName: string;
  email: string;
  birthDate: Date;
  country: string;
  notificationPreferences: string;
  avatar: string;
  role: string;
  likedPosts: number[];
}