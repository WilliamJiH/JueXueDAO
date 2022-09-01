import mongoose from '@/db/mongoose'
import {
  IAuthor,
  IInstitution,
  IPublicationMetadata,
} from '@/types/publication.types'
import { IRegisteredScholar, IUser } from '@/types/user.types'
import { Schema, model, Model, InferSchemaType } from 'mongoose'

export type UserModelType = Model<IUser>

export const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  publicKey: {
    type: String,
  },
})

export const User = model<IUser, UserModelType>('User', userSchema)

export type UserModel = InferSchemaType<typeof userSchema>
