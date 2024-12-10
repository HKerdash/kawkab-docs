import nextra from 'nextra'
 

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})
 
export default withNextra({
  /*
  output: 'export', 
  images: {
    unoptimized: true 
  },
  */
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en'
  }
})
