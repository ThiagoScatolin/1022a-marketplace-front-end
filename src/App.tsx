import { useEffect, useState } from 'react'
import './App.css'
type ProdutoType = {
  id:number,
  nome:string,
  preco:string,
  descricao:string,
  imagem:string
}
function App() {
  const [nome, setNome] = useState("")
  const [produtos, setProdutos] = useState<ProdutoType []>([])
  //useEffects(O que fazer, quando fazer) [] => Hora do carregamento da pagina
  useEffect(() => {
    setNome("Thiago Amaral Scatolin")
    //Buscar os dados do backEnd
    fetch("https://one022a-marketplace-l68l.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
    //Colocar em uma variavel

  }, [])


  return (
    <>
      <h1>{nome}</h1>
      <div className='produtos-container'>
        {
          produtos.map(produto => {
            return (
              <div key={produto.id} className='produto-item'>
                <h1>{produto.nome}</h1>
                <img src={produto.imagem} alt=""></img>
                <p>{produto.preco}</p>
                <p>{produto.descricao}</p>
              </div>
            )
          })
        }

      </div>
    </>
  )
}


function Pedro() {
  const [nome, setNome] = useState("")
  const [produtos, setProdutos] = useState<ProdutoType []>([])
  //useEffects(O que fazer, quando fazer) [] => Hora do carregamento da pagina
  useEffect(() => {
    setNome("Thiago Amaral Scatolin")
    //Buscar os dados do backEnd
    fetch("https://one022a-marketplace-l68l.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
    //Colocar em uma variavel

  }, [])


  return (
    <>
      <h1>{nome}</h1>
      <div className='produtos-container'>
        {
          produtos.map(produto => {
            return (
              <div key={produto.id} className='produto-item'>
                <h1>{produto.nome}</h1>
                <img src={produto.imagem} alt=""></img>
                <p>{produto.preco}</p>
                <p>{produto.descricao}</p>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default App;Pedro
