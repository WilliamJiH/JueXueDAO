import mongoose from '@/db/mongoose'
import { IAuthor, IInstitution } from '@/types/article.types'
import { IRegisteredScholar, IUser, memberStatus } from '@/types/user.types'
import { Schema, model, Model } from 'mongoose'

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
  description: String,
  contacts: {
    email: String,
    phone: String,
    address: String,
    institution: institutionSchema,
  },
  memberStatus: {
    type: String,
    default: 'pending',
    enum: ['pending', 'rejected', 'registered'],
  },
})

scholarSchema.index(
  { publicKey: 1, name: 'text', 'contacts.email': 'text', description: 'text' },
  { unique: true }
)

export const User = model<IUser, UserModelType>('User', userSchema, 'users')
export const Scholar = model<IRegisteredScholar, ScholarModelType>(
  'Scholar',
  scholarSchema,
  'users'
)
