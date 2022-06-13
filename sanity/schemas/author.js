import { MdFace } from 'react-icons/md'

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: MdFace,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'string'
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram', type: 'string' },
        { name: 'github', title: 'GitHub', type: 'string' },
        { name: 'twitter', title: 'Twitter', type: 'string' },
        { name: 'discord', title: 'Discord', type: 'string' },
        { name: 'linkedin', title: 'LinkedIn', type: 'string' },
        { name: 'website', title: 'Website', type: 'string' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'avatar'
    }
  }
}
