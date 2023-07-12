import React, { useState } from 'react';
import styled from 'styled-components';
import MenuList from '../components/layout/MenuList';

const Page = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Header = styled.header`
  height: 200px;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Banniere = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

const H1 = styled.h1`
  margin: 0;
  padding: 0;
  color: rgb(19, 129, 255);
`;

const Menu = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(19, 129, 255);
  box-shadow: 0.1px 0.4px 5px black;
`;



const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(219, 230, 255);
`;

const MiniContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #999;
  border-radius: 10px;
  padding: 15px;
  background-color: rgb(252, 252, 252);

  h2 {
    background-color: rgba(19, 129, 255, 0.806);
    padding: 5px 10px;
    border-radius: 5px;
    color: #ffffffdd;
  }

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`;

const Footer = styled.footer`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #001d4e;
  color: #fff;
  width: 100%;
`;

const Home = () => {
  const [articles, setArticles] = useState([
    { titre: 'Article 1', contenu: 'Contenu de l\'article 1' },
    { titre: 'Article 2', contenu: 'Contenu de l\'article 2' },
    { titre: 'Article 3', contenu: 'Contenu de l\'article 3' },
  ]);

  const [categories, setCategories] = useState([
    { id: 1, libelle: 'Catégorie 1' },
    { id: 2, libelle: 'Catégorie 2' },
    { id: 3, libelle: 'Catégorie 3' },
  ]);

  return (
    <Page>
      <Header>
        <Banniere>
          <H1>actualités Polytechniciennes</H1>
        </Banniere>
        <Menu>
          <MenuList/>
        </Menu>
      </Header>
      <Container>
        <h2>Les dernières actualités</h2>
        <MiniContainer>
          {articles.map((article, index) => (
            <Article key={index}>
              <h2>{article.titre}</h2>
              <p>{article.contenu}</p>
            </Article>
          ))}
        </MiniContainer>
      </Container>
      <Footer>
        <p>Droits d'auteur &copy; Projet Mglsi 2023 - Tous droits réservés</p>
      </Footer>
    </Page>
  );
};

export default Home;
