import { formatDateProperty } from '../../design-system'
import { PropertyType } from '../../../../backend/adapters/base-property'

export default (value: Date, propertyType: PropertyType): string => {
  if (!value) {
    return ''
  }
  const date = new Date(value)
  if (date) {
    return formatDateProperty(date, propertyType)
  }
  return ''
}
