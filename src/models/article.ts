import mongoose from '@/db/mongoose'
import {
  IAuthor,
  IInstitution,
  IArticleAsset,
  IReference,
} from '@/types/article.types'
import { Schema, model, Model, InferSchemaType } from 'mongoose'

export type ArticleModelType = Model<IArticleAsset>

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
      },
    },
  },
})

export const referenceSchema = new Schema<IReference>({
  url: String,
  nftCID: String,
  content: { type: String, required: true },
})

export const articleSchema = new Schema<IArticleAsset>({
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

articleSchema.index({ '$**': 'text' })

export const Article = model<IArticleAsset, ArticleModelType>(
  'Article',
  articleSchema
)

export type ArticleModel = InferSchemaType<typeof articleSchema>
