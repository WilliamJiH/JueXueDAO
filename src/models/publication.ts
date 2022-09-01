import mongoose from '@/db/mongoose'
import {
  IAuthor,
  IInstitution,
  IPublicationAsset,
} from '@/types/publication.types'
import { Schema, model, Model, InferSchemaType } from 'mongoose'

export type PublicationModelType = Model<IPublicationAsset>

export const institutionSchema = new Schema<IInstitution>({
  name: {
    type: String,
    required: true,
  },
})

export const authorSchema = new Schema<IAuthor>({
  name: {
    type: String,
    required: true,
  },
  publicKey: {
    type: String,
  },
  contacts: {
    email: String,
    phone: String,
    address: String,
    institution: institutionSchema,
  },
})

export const publicationSchema = new Schema<IPublicationAsset>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  properties: {
    type: { type: String },
    authors: [authorSchema],
    keywords: [String],
    institution: institutionSchema,
  },
  nftToken: {
    ipnft: String,
    url: String,
  },
})

export const Publication = model<IPublicationAsset, PublicationModelType>(
  'Publication',
  publicationSchema
)

export type PublicationModel = InferSchemaType<typeof publicationSchema>
