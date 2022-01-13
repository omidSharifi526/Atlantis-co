
import Image from "next/image"
import styles from './../styles/navbar.module.scss';

import callImg from '../public/asset/imgs/Call_.png'


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src={callImg} width='32' height='32' />

                </div>
                    <div className={styles.texts}>
                    <div className={styles.text}>     تماس بگیرید</div>
                    <div className={styles.text}>09120996698</div>

                </div>

            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>خانه</li>
                    <li className={styles.listItem}> فروشگاه</li>
                    <li className={styles.listItem}>سفارش قلیون</li>
                    <Image src={callImg} width='20' height='20'/>
                    <li className={styles.listItem}>گالری</li>
                    <li className={styles.listItem}>بخوانید</li>
                    <li className={styles.listItem}>درباره ما</li>
                </ul>

            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                <i class="fas fa-shopping-cart fs-3 text-light"></i>
                <div className={styles.counter}>2</div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
