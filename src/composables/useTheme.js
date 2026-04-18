import { ref } from 'vue'

const STORAGE_KEY = 'vg-theme'

function getInitial() {
  if (typeof window === 'undefined') return 'dark'
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch (_) {}
  if (typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  }
  return 'dark'
}

function apply(value) {
  if (typeof document === 'undefined') return
  const el = document.documentElement
  if (value === 'dark') el.classList.add('dark')
  else el.classList.remove('dark')
  el.style.colorScheme = value
}

const theme = ref(getInitial())

if (typeof window !== 'undefined') {
  apply(theme.value)
}

export function useTheme() {
  function set(value) {
    theme.value = value
    apply(value)
    try { localStorage.setItem(STORAGE_KEY, value) } catch (_) {}
  }
  function toggle() {
    set(theme.value === 'dark' ? 'light' : 'dark')
  }
  return { theme, toggle, set }
}
