export interface User {
  name: string;
  lastName: string;
  email: string;
  birthDate: Date;
  country: string;
  notificationPreferences: string;
  profilePicture: string;
  role: string;
  likedPosts: number[];
}