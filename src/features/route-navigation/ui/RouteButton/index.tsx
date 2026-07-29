import { useState } from 'react'
import { Navigation } from 'lucide-react'

import type { ContactLocation } from '@/entities/contact'

import { Button } from '@/shared/ui'

import { RouteModal } from '../RouteModal'

interface RouteButtonProps {
  location: ContactLocation
}

export function RouteButton({
  location,
}: RouteButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
      >
        <Navigation size={18} /> Построить маршрут
      </Button>

      <RouteModal
        open={open}
        onClose={() => setOpen(false)}
        location={location}
      />
    </>
  )
}