import styles from "./LoginPage.module.css"

import truckImage from "../../assets/images/3d-casual-life-delivery-truck-back-side-view 1.svg"
import LogoImage from "../../assets/images/WhatsApp Image 2024-03-15 at 1.48 1.svg"

function LoginPage() {
    return (


        <div className={styles["container"]}>
            <aside className={styles["sidebar"]}>
                <div className={styles["logo__img"]}>
                    <img src={LogoImage} alt="" />
                </div>

                <div className={styles["sidebar__featured__img"]}>
                    <img

                        src={truckImage} alt="" />
                </div>


                <p>"Ship smarter,ship faster"</p>

            </aside>


            <div className={styles["right__side"]}>
                <div className={styles["text"]}>
                    <h1>Log in</h1>
                    <p>Log in if you have an account in here</p>
                </div>

                <div className={styles["form__container"]}>
                    <form className={styles["form"]} >



                    </form>
                </div>
            </div>



        </div>


    )
}

export default LoginPage