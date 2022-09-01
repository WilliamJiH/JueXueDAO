import mongoose from '@/db/mongoose'
import { NFTMetadata } from '@/db/nft-storage'
import {
  Author,
  Institution,
  PublicationMetadata,
} from '@/types/publication.types'
import { Schema, model, Model, InferSchemaType } from 'mongoose'

interface IPublication extends NFTMetadata {
  properties: PublicationMetadata
  nftToken: {
    ipnft: string
    url: string
  }
}

type PublicationModelType = Model<IPublication>

export const authorSchema = new Schema<Author>({
  name: {
    type: String,
    required: true,
  },
  publicKey: {
    type: String,
  },
})

export const institutionSchema = new Schema<Institution>({
  name: {
    type: String,
    required: true,
  },
})

export const publicationSchema = new Schema<IPublication>({
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

export const Publication = model<IPublication, PublicationModelType>(
  'Publication',
  publicationSchema
)

export type PublicationModel = InferSchemaType<typeof publicationSchema>
