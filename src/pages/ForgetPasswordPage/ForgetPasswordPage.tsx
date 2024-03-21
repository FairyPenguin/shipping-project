import styles from "./ForgetPasswordPage.module.css"

import ProjectImage from "../../assets/images/DrawKit Vector Illustration Project Manager (10) 1.svg"
import LogoImage from "../../assets/images/WhatsApp Image 2024-03-15 at 1.48 1.svg"
import ForgetPasswordForm from "@components/ForgetPasswordForm/ForgetPasswordForm"

function ForgetPasswordPage() {
    return (


        <div className={styles["container"]}>
            <aside className={styles["sidebar"]}>
                <div className={styles["logo__img"]}>
                    <img src={LogoImage} alt="" />
                </div>

                <div className={styles["sidebar__featured__img"]}>
                    <img

                        src={ProjectImage} alt="" />
                </div>


                {/* <p>"Ship smarter,ship faster"</p> */}

            </aside>


            <div className={styles["right__side"]}>


                <div className={styles["right__side__logo__img"]}>
                    <img src={LogoImage} alt="" />
                </div>


                <div className={styles["form__container"]}>
                    {/* <form className={styles["form"]} >
                    </form> */}
                    <div className={styles["right__side__text"]}>
                        <h2>Forget password</h2>
                        {/* <p>Log in if you have an account in here</p> */}
                    </div>

                    <ForgetPasswordForm />
                </div>
            </div>



        </div>


    )
}

export default ForgetPasswordPage