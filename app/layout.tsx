import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import Sidebar from "@/components/Siderbar"
import Player from "@/components/Player"
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModelProvider from '@/providers/ModelProvider'
import ToasterProvider from '@/providers/ToastProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'

const font = Figtree({ subsets: ['latin'] })
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Sunlo - By Spotify',
  description: 'Get your ears on.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModelProvider />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
