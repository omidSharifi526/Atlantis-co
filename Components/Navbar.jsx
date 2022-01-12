
import Image from "next/image"
import styles from './../styles/navbar.module.css';

import callImg from '../public/asset/imgs/Call_.png'


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src={callImg} width='32' height='32' />

                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>جهت خرید و مشاوره تلفنی تماس بگیرید</div>
                    <div className={styles.text}>09120996698</div>

                </div>

            </div>

            <div className={styles.item}>

            </div>
            <div className={styles.item}>

            </div>
        </div>
    )
}

export default Navbar
