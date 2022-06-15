import { MdBusinessCenter } from 'react-icons/md'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: MdBusinessCenter,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'techstack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'techstack' } }]
    },
    {
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        { name: 'website', title: 'Project Website', type: 'string' },
        { name: 'github', title: 'GitHub Repository', type: 'string' }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
