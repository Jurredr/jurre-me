import { MdOutlineCode } from 'react-icons/md'

export default {
  name: 'techstack',
  title: 'Tech Stack',
  type: 'document',
  icon: MdOutlineCode,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color'
    },
    {
      name: 'icon',
      title: 'SVG Icon',
      type: 'svgUploadPreview'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
