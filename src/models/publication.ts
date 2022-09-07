import mongoose from '@/db/mongoose'
import {
  IAuthor,
  IInstitution,
  IPublicationAsset,
  IReference,
} from '@/types/publication.types'
import { Schema, model, Model, InferSchemaType } from 'mongoose'

export type PublicationModelType = Model<IPublicationAsset>

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
    institution: {
      name: {
        type: String,
        required: true,
      },
    },
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
  institution: {
    name: {
      type: String,
      required: true,
    },
  },

  references: [referenceSchema],

  nftCID: { type: String, unique: true },
})

publicationSchema.index({ '$**': 'text' })

export const Publication = model<IPublicationAsset, PublicationModelType>(
  'Publication',
  publicationSchema
)

export type PublicationModel = InferSchemaType<typeof publicationSchema>
