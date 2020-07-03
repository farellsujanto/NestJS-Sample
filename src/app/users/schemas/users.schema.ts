import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop(String)
    name: string;

    @Prop(Number)
    age: number;

}

export const UserSchema = SchemaFactory.createForClass(User);
