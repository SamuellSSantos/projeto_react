import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);

  useEffect(() => {
    setEstaCarregando(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then(res => res.json())
      .then(resJson => {
        setTimeout(() => {
          setRepos(resJson);
          setEstaCarregando(false);
        }, 3000);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      {estaCarregando ? (
        <h1>Carregando...</h1>
      ) : (
        <ul className={styles.list}>
          {repos.map(repo => (
            <li className={styles.listItem} key={repo.id}>
              <div className={styles.itemName}>
                <b>Nome:</b> {repo.name}
              </div>
              <div className={styles.itemLanguage}>
                <b>Linguagem:</b> {repo.language}
              </div>
              <a
                className={styles.listItemLink}
                target="_blank"
                rel="noopener noreferrer"
                href={repo.html_url}
              >
                Visitar no GitHub
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
