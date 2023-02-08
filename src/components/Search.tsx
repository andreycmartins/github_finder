import {BsSearch} from "react-icons/bs"

import React from "react"

const Search = () => {
  return (
    <div>
      <h2>Busque por usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input type="text" placeholder="Digite o nome do usuário"/>
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  )
} 

export default Search
