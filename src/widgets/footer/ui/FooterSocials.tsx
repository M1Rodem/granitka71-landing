import { motion } from 'framer-motion'

import { MaxIcon, TelegramIcon, VkIcon, WhatsAppIcon } from '@/shared/icons'

import type { FooterSocial } from '@/entities/footer'

import { slideUpVariants } from '@/shared/motion'

import contactsStyles from './footer-contacts.module.css'

interface FooterSocialsProps {
  socials: FooterSocial[]
}

const socialIcons = {
  telegram: TelegramIcon,
  vk: VkIcon,
  max: MaxIcon,
  whatsapp: WhatsAppIcon,
}

export function FooterSocials({ socials }: FooterSocialsProps) {
  return (
    <motion.div variants={slideUpVariants}>
      <div className={contactsStyles.socials}>
        {socials.map((social) => {
          const Icon = socialIcons[social.icon as keyof typeof socialIcons]
          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={contactsStyles.socialLink}
              aria-label={social.label}
            >
              <Icon size={20} />
            </a>
          )
        })}
      </div>
    </motion.div>
  )
}