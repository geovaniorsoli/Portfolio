import { useState } from 'react'
import style from '../styles/contato.module.css'

export default function Contato() {
    //trocar texto do botao ao passar o mouse
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
        setBtnTxt({ ...textoOriginal })
    }

    //copiar elemento para area de transfencia
    const [copiado, setCopiado] = useState(false)

    const copiarParaArea = () => {
        navigator.clipboard.writeText('geovanispop@gmail.com').then(() => {
            SetMostrarAlerta(true)
            setTimeout(() => {
                SetMostrarAlerta(false)
            }, 2000)
        });
    };

    //mostrat alerta
    const [mostrarAlerta, SetMostrarAlerta] = useState(false)
    return (
        <div className={style.body}>

            <div className={style.containerCenter}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className={style.title}>CONTATOS</h1>
                            <form action="https://formspree.io/f/mjvqzowo"method="POST">
                                <label className={style.subTitleForm} htmlFor="nome">Nome</label>
                                <input type="text" id='nome' name='nome' className={style.inputForm} />

                                <label className={style.subTitleForm} htmlFor="email">Email</label>
                                <input type="email" id='email' name='email' className={style.inputForm} />

                                <label className={style.subTitleForm} htmlFor="msg">Escreva uma mensagem!</label>
                                <textarea id='msg' name='msg' className={style.inputForm} />

                                <button type='submit' className={style.inputButton}> Enviar </button>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <div className={style.gridBtn}>
                                <div className={style.socialLinks}>
                                <h1 className={style.title}>MÍDIA SOCIAIS</h1>

                                    <a href='#'
                                        onMouseOver={() => mouseOn('github')}
                                        onMouseOut={mouseOff}
                                        className={style.buttonGithub}>
                                        {btnTxt.github}
                                    </a>
                                    <a
                                        onMouseOver={() => mouseOn('email')}
                                        onClick={copiarParaArea}
                                        onMouseOut={mouseOff}
                                        className={style.buttonEmail}>
                                        {btnTxt.email}
                                    </a>

                                    {mostrarAlerta && (
                                        <div className={style.alertaCopiado}>
                                            Copiado para a área de transferência.
                                        </div>
                                    )}

                                    <a href='https://br.linkedin.com/in/geovani-orsoli-6b8481223'
                                        onMouseOver={() => mouseOn('linkedin')}
                                        onMouseOut={mouseOff}
                                        className={style.buttonLinkedIn}>
                                        {btnTxt.linkedin}
                                    </a>
                                    <h1 className={style.title2}>CURRICULO</h1>

                                    <a href='/cv/Geovani Orsoli Gongora (CV).pdf'
                                        download
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


