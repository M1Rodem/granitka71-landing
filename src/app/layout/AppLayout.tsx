import type { ReactNode } from 'react'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import styles from './app-layout.module.css'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main} id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
