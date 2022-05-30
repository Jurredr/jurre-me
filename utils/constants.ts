import getMyCurrentAge from './getMyCurrentAge'

export const ORIGIN =
  process.env.NEXT_PUBLIC_HOST ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  ('jurre.me' as const)
export const PROTOCOL = process.env.NODE_ENV === 'production' ? 'https' : 'http'
export const HOST = `${PROTOCOL}://${ORIGIN}` as const

export const SEPARATOR = ' | '

export const SITE_TITLE = 'Jurre de Ruiter'
export const SITE_TITLE_TEMPLATE = `${SITE_TITLE} ${SEPARATOR} %s`
export const SHORT_DESCRIPTION = "Jurre's personal website & portfolio"
export const DEFAULT_DESCRIPTION = `Heyo, I'm Jurre; an ambitious ${getMyCurrentAge} year old full-stack developer, Computer Science student, and entrepreneur from The Netherlands!`

export const DEFAULT_IMAGE_URL = `/img/banner.png`
