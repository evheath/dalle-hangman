import { Timestamp } from "firebase/firestore";
export interface Dalle {
    prompt: string;
    images: string[];
    timestamp: Timestamp;
}
