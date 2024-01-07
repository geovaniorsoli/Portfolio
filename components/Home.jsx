//nexui
import { Tooltip } from "@nextui-org/react";
//imagem
import Image from 'next/image'
import img from '../public/img/pic.png'

//components
import style from '../styles/home.module.css'
export default function Home() {
    return (
        <>
            <div className={style.containerCenter}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8 text-start">
                        <h1 className={style.title}>Web dev.</h1>
                        <h2 className={style.subtitle}>Olá sou o Geovani Orsoli. Apaixonado por Front-end e design de UI UX</h2>
                        <div className={style.icon}>



                            <Tooltip className={style.tooltip} content="GitHub" color="primary">
                                <a href='https://github.com/geovaniorsoli'>
                                    <ion-icon name="logo-github" size="large"></ion-icon>
                                </a>
                            </Tooltip>

                            <Tooltip className={style.tooltip} content="Curriculum" color="primary">
                                <ion-icon name="document-outline" size="large"></ion-icon>
                            </Tooltip>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <Image src={img} alt="Descrição" width={300} height={300} />

                    </div>
                </div>
            </div>

            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </>
    )
}