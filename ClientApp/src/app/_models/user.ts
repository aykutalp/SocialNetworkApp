import { Photo } from "./photo";

export interface User {
    id: number;
    username: string;
    email: string;
    knownAs: string;
    age: number;
    gender: string;
    created: string;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interest?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
