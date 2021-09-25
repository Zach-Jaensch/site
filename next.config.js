/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  excludeFile: (str) => /\*.{stories,test}.{js,jsx,ts,tsx}/.test(str),
  env: {
    OWM_API_KEY: process.env.OWM_API_KEY,
  },
}
