import {IUserId} from './userId';
import { IskiSlopes } from './skiSlopes';

export interface Ipost {

        likes: string[],
        _id: string;
        text: string;
        userId: IUserId;
        themeId: IskiSlopes;
        created_at: string;
        updatedAt: string;
        __v: number;
}