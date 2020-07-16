<h3 align="center">Componente de paginação</h3>

<p align="center"> Um componente que sempre preciso utilizar durante o desenvolvimento de uma listagem então decidi deixar salvo aqui 😁
    <br> 
</p>

## 🧐 Exemplo <a name = "about"></a>

  <img src="https://i.imgur.com/PG8yNTo.png" >

  #### Aplicação em deploy aqui:
  <a href="https://pagination-component.netlify.app/">Pagination-Component</a>

## 🏁 Código-font <a name = "getting_started"></a>


#### Exemplo com TypeScript (.tsx) <img src="https://image.flaticon.com/icons/svg/919/919832.svg" width="16" />

```
interface Props {
  perPage: any;
  total: any;
  paginate: Function;
  current: Number;
  withFooter?: Boolean;
}
const Pagination: React.FC<Props> = ({ 
  perPage, 
  total, 
  paginate, 
  current, 
  withFooter 
}) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <ul>
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={current === page ? "active" : ""}
            onClick={() => paginate(page)}
          >
            {page}
          </li>
        ))}
      </ul>
      {withFooter && (
        <p>
          Página {current} de {Math.ceil(total / perPage)}
        </p>
      )}
    </Container>
  );
};
```

#### Exemplo com Javascript (.jsx) <img src="https://image.flaticon.com/icons/svg/919/919828.svg" width="16" />

```
const Pagination = ({ perPage, total, paginate, current, withFooter }) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <ul>
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={current === page ? "active" : ""}
            onClick={() => paginate(page)}
          >
            {page}
          </li>
        ))}
      </ul>
      {withFooter && (
        <p>
          Página {current} de {Math.ceil(total / perPage)}
        </p>
      )}
    </Container>
  );
};
```

## 🏁 Como rodar projeto

- Acessar terminal no diretório do projeto e inserir os comandos:

```
npm install
npm start
```

## 🙌🏾 Como Contribuir

### Fork

- Faça um fork deste repositório para dentro da sua conta no Github e siga os passos abaixo para rodar a aplicação de forma local 😀
- Cria uma branch com a sua feature: git checkout -b minha-feature;
- Faça commit das suas alterações: git commit -m 'feat: Minha nova feature';
  Faça push para a sua branch: git push origin minha-feature.
