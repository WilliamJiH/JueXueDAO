import mongoose from '@/db/mongoose'
import { IAuthor, IArticleAsset, IReference } from '@/types/article.types'
import { Schema, model, Model } from 'mongoose'
import { institutionSchema, Scholar, User } from './user'

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
    institution: institutionSchema,
  },
})

export const referenceSchema = new Schema<IReference>({
  url: String,
  nftCID: String,
  content: { type: String, required: true },
})
referenceSchema.index({ content: 'text' })

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
  institution: institutionSchema,

  references: [referenceSchema],

  nftCID: { type: String, unique: true },
})

articleSchema.index({ '$**': 'text' })

/**
  Find Authors that have registered.
*/
articleSchema.pre('save', async function (next) {
  const findAuthorPromises = this.authors.map((author) => async () => {
    const registeredUser = await Scholar.findOne({
      name: author.name,
      publicKey: author.publicKey,
    })
    return registeredUser || author
  })

  try {
    const populatedAuthors = await Promise.all(findAuthorPromises)
    this.authors = populatedAuthors
  } catch (e) {
    console.error(e)
  } finally {
    next()
  }
})

export const Article = model<IArticleAsset, ArticleModelType>(
  'Article',
  articleSchema
)
