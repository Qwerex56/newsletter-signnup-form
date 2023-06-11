const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use '@/styles/variables' as *;`
  },
  async redirects() {
    return [{
      source: '/',
      destination: '/pages/NewsletterSignUp',
      permanent: true
    }]
  }
}

module.exports = nextConfig
