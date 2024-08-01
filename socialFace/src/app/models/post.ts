export interface Post {
    id: number;
    content: string;
    author: string;
    likes: number;
    comments: string[];
    image: string;
    createdAt: Date;
    updatedAt: Date;
}