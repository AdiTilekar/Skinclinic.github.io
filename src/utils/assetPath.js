export function resolveAssetPath(path) {
  if (!path) return path

  const value = String(path)
  if (
    value.startsWith('http://')
    || value.startsWith('https://')
    || value.startsWith('data:')
    || value.startsWith('blob:')
  ) {
    return value
  }

  if (!value.startsWith('/')) {
    return value
  }

  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  return `${normalizedBase}${value}`
}
