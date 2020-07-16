<h3 align="center">Componente de paginação</h3>

<p align="center"> Um componente que sempre preciso utilizar durante o desenvolvimento de uma listagem então decidi deixar salvo aqui 😁
    <br> 
</p>

## 🧐 Exemplo <a name = "about"></a>

## 🏁 Código-font <a name = "getting_started"></a>

```
const Pagination: React.FC<Props> = ({
  perPage,
  total,
  paginate,
  current,
  withFooter,
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
      {withFooter && <p>{message}</p>}
    </Container>
  );
};
```

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

## 🔧 Running the tests <a name = "tests"></a>

Explain how to run the automated tests for this system.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system.

## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@kylelobo](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
