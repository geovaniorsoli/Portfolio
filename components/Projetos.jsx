import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import style from "../styles/projeto.module.css"

import img from "../public/img/preto.png"
export default function Projeto() {
    return (
        <div className={style.Projeto}>
            <div className={style.containerCenter}>
                <h1 className={style.title}> PROJETOS </h1>
            </div>

            <div className={style.Card}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <Image src={img} alt="Descrição da Imagem" width={200} height={200} objectFit="cover" />
                    </div>
                    <div className="col-md-8">
                        <div className={style.cardBody}>
                            <h5 className={style.cardTitle}>Card</h5>
                            <p className={style.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis animi sapiente quod. Eveniet totam nobis fugiat sint harum consequuntur temporibus perferendis officia officiis tempora, veritatis veniam similique nemo facere.</p>
                            <a href="#" className={style.cardLink1}>Code</a>
                            <a href="#" className={style.cardLink2}>View</a>
                        </div>
                    </div>
                </div>
            </div>



            <div className={style.Card}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <Image src={img} alt="Descrição da Imagem" width={200} height={200} objectFit="cover" />
                    </div>
                    <div className="col-md-8">
                        <div className={style.cardBody}>
                            <h5 className={style.cardTitle}>Card</h5>
                            <p className={style.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis animi sapiente quod. Eveniet totam nobis fugiat sint harum consequuntur temporibus perferendis officia officiis tempora, veritatis veniam similique nemo facere.</p>
                            <a href="#" className={style.cardLink1}>Code</a>
                            <a href="#" className={style.cardLink2}>View</a>
                        </div>
                    </div>
                </div>
            </div>






            <div className={style.Card}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <Image src={img} alt="Descrição da Imagem" width={200} height={200} objectFit="cover" />
                    </div>
                    <div className="col-md-8">
                        <div className={style.cardBody}>
                            <h5 className={style.cardTitle}>Card</h5>
                            <p className={style.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis animi sapiente quod. Eveniet totam nobis fugiat sint harum consequuntur temporibus perferendis officia officiis tempora, veritatis veniam similique nemo facere.</p>
                            <a href="#" className={style.cardLink1}>Code</a>
                            <a href="#" className={style.cardLink2}>View</a>
                        </div>
                    </div>
                </div>
            </div>




            <div className={style.Card}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <Image src={img} alt="Descrição da Imagem" width={200} height={200} objectFit="cover" />
                    </div>
                    <div className="col-md-8">
                        <div className={style.cardBody}>
                            <h5 className={style.cardTitle}>Card</h5>
                            <p className={style.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis animi sapiente quod. Eveniet totam nobis fugiat sint harum consequuntur temporibus perferendis officia officiis tempora, veritatis veniam similique nemo facere.</p>
                            <a href="#" className={style.cardLink1}>Code</a>
                            <a href="#" className={style.cardLink2}>View</a>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>

        
    )
}