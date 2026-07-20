import { APP_NAME } from '@/shared/constants'
import { Container, Section, Text } from '@/shared/ui'
import { landingNavigationItems } from '@/shared/config/navigation'

import styles from './footer.module.css'

const footerContacts = [
  {
    label: 'Телефон',
    value: '+7 (4872) 30-00-00',
    href: 'tel:+74872300000',
  },
  {
    label: 'Почта',
    value: 'hello@granitka71.ru',
    href: 'mailto:hello@granitka71.ru',
  },
]

const footerSocials = [
  {
    label: 'VK',
    href: 'https://vk.com/',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/',
  },
]

export function Footer() {
  return (
    <footer>
      <Section className={styles.section} tone="primary">
        <Container>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <Text
                as="a"
                className={styles.logo}
                href="/"
                size="lg"
                tone="inverse"
                weight="semibold"
              >
                {APP_NAME}
              </Text>
              <Text tone="inverse">
                Каркас landing page подготовлен к наполнению бизнес-виджетами и
                дальнейшей интеграции с CRM API.
              </Text>
            </div>

            <div className={styles.column}>
              <Text as="span" size="sm" tone="accent" weight="semibold">
                Навигация
              </Text>
              <ul className={styles.list}>
                {landingNavigationItems.map((item) => (
                  <li key={item.id}>
                    <a className={styles.link} href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <Text as="span" size="sm" tone="accent" weight="semibold">
                Контакты
              </Text>
              <ul className={styles.list}>
                {footerContacts.map((item) => (
                  <li key={item.label}>
                    <a className={styles.link} href={item.href}>
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <Text as="span" size="sm" tone="accent" weight="semibold">
                Соцсети
              </Text>
              <ul className={styles.list}>
                {footerSocials.map((item) => (
                  <li key={item.label}>
                    <a
                      className={styles.link}
                      href={item.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.bottom}>
            <Text size="sm" tone="inverse">
              © 2026 {APP_NAME}. Foundation и landing shell готовы к развитию.
            </Text>
          </div>
        </Container>
      </Section>
    </footer>
  )
}
