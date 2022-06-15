import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch
} from 'sanity-codegen'

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch
}

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: 'project'

  /**
   * Title — `string`
   *
   *
   */
  title: string

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: 'slug'; current: string }

  /**
   * Author — `reference`
   *
   *
   */
  author: SanityReference<Author>

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  description?: string

  /**
   * Tech Stack — `array`
   *
   *
   */
  techstack: Array<Techstack>

  /**
   * Links — `object`
   *
   *
   */
  links?: {
    _type: 'links'
    /**
     * Project Website — `string`
     *
     *
     */
    website?: string

    /**
     * GitHub Repository — `string`
     *
     *
     */
    github?: string
  }

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt: string

  /**
   * Body — `blockContent`
   *
   *
   */
  body: BlockContent
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: 'author'

  /**
   * Name — `string`
   *
   *
   */
  name: string

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: 'slug'; current: string }

  /**
   * Avatar — `image`
   *
   *
   */
  avatar?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Bio — `string`
   *
   *
   */
  bio?: string

  /**
   * Socials — `object`
   *
   *
   */
  socials: {
    _type: 'socials'
    /**
     * Instagram — `string`
     *
     *
     */
    instagram?: string

    /**
     * GitHub — `string`
     *
     *
     */
    github?: string

    /**
     * Twitter — `string`
     *
     *
     */
    twitter?: string

    /**
     * Discord — `string`
     *
     *
     */
    discord?: string

    /**
     * LinkedIn — `string`
     *
     *
     */
    linkedin?: string

    /**
     * Website — `string`
     *
     *
     */
    website?: string
  }
}

/**
 * Tech Stack
 *
 *
 */
export interface Techstack extends SanityDocument {
  _type: 'techstack'

  /**
   * Name — `string`
   *
   *
   */
  name: string

  /**
   * Color — `color`
   *
   *
   */
  color?: Color

  /**
   * SVG Icon — `svgUploadPreview`
   *
   *
   */
  icon?: SvgUploadPreview
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }>
>

export type Documents = Project | Author | Techstack

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Color = string

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type SvgUploadPreview = string
