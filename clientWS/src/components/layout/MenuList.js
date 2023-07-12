import React, { useState } from 'react';
import styled from 'styled-components';

const MenuListStyle = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const MenuItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    padding: 15px 30px;
    height: 100%;

    &:hover {
      background-color: rgba(255, 255, 255, 0.338);
      border-bottom: 4px solid #fff;
    }
  }
`;

const MenuList = () => {
    const categories = [
      { id: 1, libelle: 'Catégorie 1' },
      { id: 2, libelle: 'Catégorie 2' },
      { id: 3, libelle: 'Catégorie 3' },
    ];
  
    return (
      <MenuListStyle>
        <MenuItem>
          <a href="/">Accueil</a>
        </MenuItem>
        {categories.map((categorie) => (
          <MenuItem key={categorie.id}>
            <a href={`/categorie${categorie.id}`}>{categorie.libelle}</a>
          </MenuItem>
        ))}
      </MenuListStyle>
    );
  };
  
  export default MenuList;
  