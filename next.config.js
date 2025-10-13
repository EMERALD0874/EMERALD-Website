/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/adachi',
        destination: 'https://www.reddit.com/r/OkBuddyPersona/comments/ptzrc0/who_is_a_detective_who_lives_in_inaba/',
        permanent: false,
      },
      {
        source: '/audioguide',
        destination: 'https://github.com/EMERALD0874/AudioLoader-PackDB#-creating-a-pack',
        permanent: false,
      },
      {
        source: '/audioloader',
        destination: 'https://github.com/EMERALD0874/SDH-AudioLoader',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
