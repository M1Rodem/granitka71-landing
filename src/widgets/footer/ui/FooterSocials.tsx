import { motion } from 'framer-motion'

import { Icon } from '@/shared/icons'

import type { FooterSocial } from '@/entities/footer'

import { slideUpVariants } from '@/shared/motion'

import contactsStyles from './footer-contacts.module.css'

interface FooterSocialsProps {
  socials: FooterSocial[]
}

export function FooterSocials({ socials }: FooterSocialsProps) {
  return (
    <motion.div variants={slideUpVariants}>
      <div className={contactsStyles.socials}>
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={contactsStyles.socialLink}
            aria-label={social.label}
          >
            <Icon 
              name={social.icon as 'vk' | 'telegram' | 'whatsapp' | 'max'} 
              size={26} 
            />
          </a>
        ))}
      </div>
    </motion.div>
  )
}