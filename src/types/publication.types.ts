export interface Author {
  name: string
}

export interface Institution {
  name: string
}

export interface PublicationMetadata {
  type: 'blog-post' | 'publication'
  authors: Array<Author>
  keywords?: Array<string>
  abstract?: string
  date?: Date
  institution?: Institution
}
