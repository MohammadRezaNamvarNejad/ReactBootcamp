import { css } from 'styled-components'

export const mobileMediaString = `(max-width: 800px)`
export const notMobileMediaString = `(min-width: 800px)`

export const isMobileSC = typeof window !== 'undefined' && window.innerWidth <= 768
export const isTabletSC = typeof window !== 'undefined' && window.innerWidth > 768 && window.innerWidth < 1024
export const isDesktopSC = typeof window !== 'undefined' && window.innerWidth >= 1024 && window.innerWidth < 1440
export const isLargeDesktopSC = typeof window !== 'undefined' && window.innerWidth >= 1440 && window.innerWidth < 1920
export const isfullWidthDisplySC = typeof window !== 'undefined' && window.innerWidth >= 1920

export const mobile = (body) => css`
  @media (max-width: 768px) {
    ${body};
  }
`
export const notMobile = (body) => css`
  @media (min-width: 768px) {
    ${body};
  }
`
export const tablet = (body) => css`
  @media (min-width: 768px) and (max-width: 1023px) {
    ${body};
  }
`
export const desktop = (body) => css`
  @media (min-width: 1024px) and (max-width: 1439px) {
    ${body};
  }
`
export const largeDesktop = (body) => css`
  @media (min-width: 1440px) and (max-width: 1919px) {
    ${body};
  }
`
export const fullWidthDisply = (body) => css`
  @media (min-width: 1920px) {
    ${body};
  }
`
export const tabletAndSmaller = (body) => css`
  @media (max-width: 1023px) {
    ${body};
  }
`
export const tabletAndBigger = (body) => css`
  @media (min-width: 1023) {
    ${body}
  }
`
export const desktopAndSmaller = (body) => css`
  @media (max-width: 1439px) {
    ${body};
  }
`
export const desktopAndBigger = (body) => css`
  @media (min-width: 1440px) {
    ${body};
  }
`
export const smallLaptopAndSmaller = (body) => css`
  @media (max-width: 1366px) {
    ${body};
  }
`
export const largeDesktopBigger = (body) => css`
  @media (min-width: 2200px) {
    ${body};
  }
`
export const shortHeightScreen = (body) => css`
  @media (max-height: 768px) {
    ${body};
  }
`
export const highHeightScreen = (body) => css`
  @media (min-height: 1000px) {
    ${body};
  }
`
export const retina = (body) => css`
  @media only screen and (-webkit-min-device-pixel-ratio: 1.25),
    only screen and (min--moz-device-pixel-ratio: 1.25),
    only screen and (-o-min-device-pixel-ratio: 1.25/1),
    only screen and (min-device-pixel-ratio: 1.25),
    only screen and (min-resolution: 200dpi),
    only screen and (min-resolution: 1.25dppx) {
    ${body};
  }
`

// sizes for devices
export const sizes = {
  giant: 1440,
  desktop: 1024,
  tablet: 768,
  phone: 420,
}

export const screenSmallerThan = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (args) => css`
    @media (max-width: ${emSize}em) {
      ${css(args)};
    }
  `
  return accumulator
}, {})

export const screenLargerThan = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (args: any) => css`
    @media (min-width: ${emSize}em) {
      ${css(args)};
    }
  `
  return accumulator
}, {})

export const mediaQueries = {
  phone: `@media only screen and (max-width: ${sizes.tablet}px)`,
}
