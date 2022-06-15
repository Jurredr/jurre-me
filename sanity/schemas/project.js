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
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required()
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
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'techstack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'techstack' } }],
      validation: (Rule) => Rule.required()
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
      type: 'datetime',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
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
