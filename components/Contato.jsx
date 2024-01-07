import { useState } from 'react'
import style from '../styles/contato.module.css'

export default function Contato() {

    const textoOriginal = {
        github: 'Github',
        email: 'Email',
        linkedin: 'LinkdIn',
        cv: 'Baixar'
    }

    const TextoIndicado = {
        github: 'github/geovaniorsoli',
        email: 'geovanispop@gmail.com',
        linkedin: 'In/geovaniorsoli',
        cv: 'Clique para baixar!'
    }

    const [btnTxt, setBtnTxt] = useState(textoOriginal)

    const mouseOn = (btn) => {
        const novoTxt = {
            ...btnTxt,
            [btn]: TextoIndicado[btn] 
        }
        setBtnTxt(novoTxt)
    }

    const mouseOff = () => {
        setBtnTxt({...textoOriginal })
    }


    return (
        <div className={style.body}>

            <div className={style.containerCenter}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className={style.title}>CONTATOS</h1>
                            <form>
                                <label className={style.subTitleForm} htmlFor="nome">Nome</label>
                                <input type="text" id='nome' name='nome' className={style.inputForm} />

                                <label className={style.subTitleForm} htmlFor="email">Email</label>
                                <input type="email" id='email' name='email' className={style.inputForm} />

                                <label className={style.subTitleForm} htmlFor="msg">Escreva uma mensagem!</label>
                                <textarea id='msg' name='msg' className={style.inputForm} />
                            </form>
                        </div>

                        <div className="col-md-6">
                            <div className={style.gridBtn}>
                                <h1 className={style.title}>MÍDIA SOCIAIS</h1>
                                <div className={style.socialLinks}>

                                    <a href='#'
                                        onMouseOver={() => mouseOn('github')}
                                        onMouseOut={mouseOff}
                                        className={style.buttonGithub}>
                                        {btnTxt.github}
                                    </a>
                                    <a href='#'
                                        onMouseOver={() => mouseOn('email')}
                                        onMouseOut={mouseOff}
                                        className={style.buttonEmail}>
                                        {btnTxt.email}
                                    </a>
                                    <a href='#'
                                        onMouseOver={() => mouseOn('linkedin')}
                                        onMouseOut={mouseOff}
                                        className={style.buttonLinkedIn}>
                                        {btnTxt.linkedin}
                                    </a>
                                    <h1 className={style.title2}>CURRICULO</h1>

                                    <a href='#'
                                        onMouseOver={() => mouseOn('cv')}
                                        onMouseOut={mouseOff}
                                        className={style.buttonCV}>
                                        {btnTxt.cv}
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


