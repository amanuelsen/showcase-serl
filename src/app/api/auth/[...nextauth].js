// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { debug } from 'console'

// Configure NextAuth with Google and GitHub providers
const authOptions = {
  providers: [
    // Google OAuth Provider Configuration
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // Your Google Client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Your Google Client Secret
    }),
    // GitHub OAuth Provider Configuration
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID, // Your GitHub Client ID
      clientSecret: process.env.GITHUB_CLIENT_SECRET, // Your GitHub Client Secret
    }),
  ],
  debug: true,
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    },
  },
  pages: {
    signIn: '/auth/signin', // Optional: Custom sign-in page URL
  },
}

// Export the NextAuth configuration as default
export default NextAuth(authOptions)
