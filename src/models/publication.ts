import mongoose from '@/db/mongoose'
import {
  IAuthor,
  IInstitution,
  IPublicationAsset,
  IReference,
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
  publicKey: String,
  contacts: {
    email: String,
    phone: String,
    address: String,
    institution: institutionSchema,
  },
})

export const referenceSchema = new Schema<IReference>({
  url: String,
  nftCID: String,
  content: { type: String, required: true },
})

export const publicationSchema = new Schema<IPublicationAsset>({
  type: { type: String },

  title: {
    type: String,
    required: true,
  },
  abstract: String,
  keywords: [String],
  date: { type: Date, default: new Date() },

  authors: [authorSchema],
  institution: institutionSchema,

  references: [referenceSchema],

  nftCID: String,
})

publicationSchema.index({ '$**': 'text' })

export const Publication = model<IPublicationAsset, PublicationModelType>(
  'Publication',
  publicationSchema
)

export type PublicationModel = InferSchemaType<typeof publicationSchema>
