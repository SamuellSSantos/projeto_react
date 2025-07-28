import styles from './Perfil.module.css';

const Perfil = ({nomeUsuario}) =>{
return (
    <header className= {styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}
            alt= {`Avatar de ${nomeUsuario}`}/>
            <h1  className= {styles.name}>
                {nomeUsuario}
                </h1>
        </header>
    )
}
//const Perfil = () => {

export default Perfil;