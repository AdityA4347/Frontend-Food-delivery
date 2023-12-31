import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";
import fooddata from "./data.json";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");
  const [cartdata, setCartdata] = useState([]);
  const navigate = useNavigate();

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

  const handelClick = (name, img) => {
    let newObj = { name: name, image: img };
    setCartdata([...cartdata, newObj]);
  };
  console.log(cartdata);
  function handelsubmit() {
    navigate("my-cart", { state: { data: cartdata } });
  }

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search Food" />

            <Cartbutton className="cart-button" onClick={handelsubmit}>
              <FaCartArrowDown></FaCartArrowDown>
            </Cartbutton>
          </div>
        </TopContainer>
        <FilterContainer>
          <Button onClick={() => filteredFood("all")}>All</Button>
          <Button onClick={() => filteredFood("breakfast")}>Breakfast</Button>
          <Button onClick={() => filteredFood("lunch")}>Lunch</Button>
          <Button onClick={() => filteredFood("Dinner")}>Dinner</Button>
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} handelClick={handelClick} />
    </>
  );
};

export default App;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  .my-food {
    font-size: 30px;
    display: flex;
    gap: 3px;
  }
  .search {
    display: flex;
    align-items: center;
    gap: 10px;
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
const Cartbutton = styled.button`
  padding: 6px 12px;
  border-radius: 5px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #da0d0d;
  }
  font-size: 25px;
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
