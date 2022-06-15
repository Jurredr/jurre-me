// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
// import svgUploadPreview from 'sanity-plugin-inline-svg'

// We import object and document schemas
import blockContent from './blockContent'
import techstack from './techstack'
import project from './project'
import author from './author'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'jurre.me',
  types: schemaTypes.concat([
    project,
    author,
    techstack,
    blockContent
    // svgUploadPreview
  ])
})
