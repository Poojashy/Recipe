import { useEffect, useState } from 'react';
import './App.css';
import RecipeCard from './Components/RecipeCard';
import axios from 'axios';
import { TextField } from '@mui/material';

function App() {
  const [recipes, setRecipes] = useState([]);  // Original data
  const [searchData, setSearchData] = useState([]); // Filtered data
  const [searchTerm, setSearchTerm] = useState(""); // Stores search input

  // Fetch data on component mount
  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then((res) => {
        console.log(res.data.recipes, 111);
        setRecipes(res.data.recipes);
        setSearchData(res.data.recipes); // Initialize searchData
      })
      .catch((err) => {
        console.log(err, 222);
      });
  }, []);

  // Handle Search Input
  const handleSearch = (e) => {
    let search = e.target.value.toLowerCase();
    setSearchTerm(search);

    // Filter recipes based on input
    let filteredData = recipes.filter((item) =>
      item.name.toLowerCase().includes(search)
    );

    setSearchData(filteredData); // Update filtered results
  };

  return (
    <>
      {/* Search Bar */}
      <TextField 
        name="search" 
        label="Search Here" 
        variant="outlined"
        fullWidth
        onChange={handleSearch} 
        sx={{ marginBottom: 3 }}
      />

      {/* Recipe List */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {searchData.length > 0 ? (
          searchData.map((item) => <RecipeCard key={item.id} item={item} />)
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </>
  );
}

export default App;