import React, { useState, useEffect } from "react";
import { Container, Content, List, ListItem } from "./styles";
import Pagination from "./components/Pagination";
import planets from './planets';

interface Planet {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [page, setPage] = useState<any>(1);
  const perPage = 10;
  const [withFooter, setWithFooter] = useState<Boolean>(false);
  const paginate = (number: Number) => {
    setPage(number);
  };
  // const [total, setTotal] = useState<Number>(0);
  // const [items, setItems] = useState<Planet[]>([]);
  // const getList = async () => {
  //   try {
  //     const { data } = await axios.get("https://swapi.dev/api/planets", {
  //       params: { page },
  //     });
  //     setTotal(data.count);
  //     setItems(data.results);
  //   } catch (error) {
  //     console.log("erro", error);
  //   }
  // };
  // useEffect(() => {
  //   getList();
  // }, [page]);

  const indexOfLastPlanet = (page) * perPage;
  const indexofFirstPlanet = indexOfLastPlanet - perPage;
  const PlanetsPaginate = planets.slice(
    indexofFirstPlanet,
    indexOfLastPlanet,
  );


  return (
    <Container>
      <Content>
        <List>
          <ListItem>
            <strong>Nome</strong>
            <strong>URL exemplo</strong>
          </ListItem>
          {PlanetsPaginate &&
            PlanetsPaginate.map((planet) => (
              <ListItem>
                <div>{planet.name}</div>
                <div>
                  <a href={planet.url}>{planet.name}</a>
                </div>
              </ListItem>
            ))}
        </List>
        <label htmlFor="withFooter">
          Mostrar Footer? (exemplo withFooter)
          <input
            type="checkbox"
            id="withFooter"
            onChange={(e) => setWithFooter(e.target.checked)}
          />
        </label>
        <Pagination
          current={page}
          paginate={paginate}
          total={planets.length}
          perPage={10}
          withFooter={withFooter}
        />
      </Content>
    </Container>
  );
};

export default App;
