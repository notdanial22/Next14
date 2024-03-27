import Image from 'next/image'
import styles from './about.module.css'

export default function aboutPage() {
  return (
    <div className={styles.imgContainer}>
      <Image src='/about.png' alt='' fill></Image>
    </div>
  )
}
