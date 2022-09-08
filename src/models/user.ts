import mongoose from '@/db/mongoose'
import { IAuthor, IInstitution, IArticleMetadata } from '@/types/article.types'
import { IRegisteredScholar, IUser } from '@/types/user.types'
import { Schema, model, Model, InferSchemaType } from 'mongoose'

export type UserModelType = Model<IUser>
export type ScholarModelType = Model<IRegisteredScholar>

export const institutionSchema = new Schema<IInstitution>({
  name: {
    String,
    required: true,
  },
})

export const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  publicKey: {
    type: String,
  },
})

export const scholarSchema = new Schema<IRegisteredScholar>({
  name: {
    type: String,
    required: true,
  },
  publicKey: {
    type: String,
    required: true,
  },
  contacts: {
    email: String,
    phone: String,
    address: String,
    institution: institutionSchema,
  },
  memberStatus: {
    type: String,
    default: 'pending',
  },
})

scholarSchema.index(
  { publicKey: 1, name: 1, 'contacts.email': 1 },
  { unique: true }
)

export const User = model<IUser, UserModelType>('User', userSchema, 'users')
export const Scholar = model<IRegisteredScholar, ScholarModelType>(
  'Scholar',
  scholarSchema,
  'users'
)
