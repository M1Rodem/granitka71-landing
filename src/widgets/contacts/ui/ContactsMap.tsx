import styles from './contacts-map.module.css'

const MAP_URL =
  'https://yandex.ru/map-widget/v1/?um=constructor%3A2528278204ac0957cda7b1852f25e0b84c960cc35adadf77091521ac0fc2d546&source=constructor&scrollzoom=true&lang=ru_RU&supports=pan,zoom,rotate'

export function ContactsMap() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mapClip}>
        <iframe
          className={styles.map}
          src={MAP_URL}
          title="Карта Гранитка71"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="autoplay; encrypted-media; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock"
        />
      </div>
    </div>
  )
}