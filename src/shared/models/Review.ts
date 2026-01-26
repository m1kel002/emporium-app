import { User } from "./User";

export interface Review {
    id: string;
    productId: string;
    rating: number;
    comment: string;
    user: User;
}