import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";
import fooddata from "./data.json";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    // const fetchFoodData = async () => {
    //   setLoading(true);
    //   try {
    //     const response = await fetch(BASE_URL);
    //     const json = await response.json();
    //     setData(json);
    //     setFilteredData(json);
    //     setLoading(false);
    //   } catch (error) {
    //     setError("Unable to fetch data");
    //   }
    // };
    // fetchFoodData();
    setData(fooddata);
    setFilteredData(fooddata);
  }, []);

  console.log(data);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue == "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filteredFood = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search Food" />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button onClick={() => filteredFood("all")}>All</Button>
          <Button onClick={() => filteredFood("breakfast")}>Breakfast</Button>
          <Button onClick={() => filteredFood("lunch")}>Lunch</Button>
          <Button onClick={() => filteredFood("Dinner")}>Dinner</Button>
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
};

export default App;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;
export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 5px;
  background: #ff4343;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #da0d0d;
  }
`;
