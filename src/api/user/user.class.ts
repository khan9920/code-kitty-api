import * as mongoose from 'mongoose';
import { IUser } from './user.interface';

export const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, required: true,
    displayName: { type: String, required: true },
    email: { type: String, required: true },
    photoURL: { type: String, required: true },
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;