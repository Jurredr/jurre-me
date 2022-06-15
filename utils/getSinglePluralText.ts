export default function getSinglePluralText(
  singleText: string,
  pluralText: string,
  count: number
) {
  return count == 1 ? singleText : pluralText
}
