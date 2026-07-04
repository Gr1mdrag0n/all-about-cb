import '@testing-library/jest-dom/vitest'

// jsdom doesn't implement scrollIntoView or IntersectionObserver
Element.prototype.scrollIntoView = () => {}

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return [] }
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})
