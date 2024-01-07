//style
import style from '../styles/sobre.module.css'
//font awesome
export default function Sobre() {
    return (
        <>
            <div className={style.container}>
                <h1 className={style.title}>
                    SOBRE MIM
                </h1>
                <h2 className={style.subtitle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aspernatur vitae commodi blanditiis laborum distinctio dolor temporibus corrupti, quasi quibusdam cum officia reprehenderit cumque voluptatibus quis suscipit natus et cupiditate!
                </h2>

                <h1 className={style.title}>STACK</h1>

                <img className={style.img} src="https://skillicons.dev/icons?i=html,css,js,bootstrap,next" />
                <img className={style.img} src="https://skillicons.dev/icons?i=express,mongo,nodejs" />

                <h1 className={style.title}>SOFTWARES</h1>
                <img className={style.img} src="https://skillicons.dev/icons?i=ps,ae,premiere,figma" />
            </div>
        </>
    )
}