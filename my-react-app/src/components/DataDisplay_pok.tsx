import { useState, useEffect } from "react";
import axios from "axios";

interface PokemonData {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string;
  };
}

const DataDisplay_pok = () => {
  const [data, setData] = useState<PokemonData | null>(null);
  const [pokemonName, setPokemonName] = useState<string>("pikachu");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (name: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(pokemonName);
  }, [pokemonName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(pokemonName.toLowerCase());
  };

  // สไตล์สำหรับพื้นหลัง
  const containerStyle: React.CSSProperties = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    background: `linear-gradient(to bottom right, rgba(17, 240, 6, 0.7), rgba(31, 246, 246, 0.7)), url('/path-to-your-background-image.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "#ff6347", fontSize: "24px", marginBottom: "20px" }}>
        Pokémon Info
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Enter Pokémon name"
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "5px",
            marginRight: "10px",
            flexGrow: 1,
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            backgroundColor: "#ff6347",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {loading ? (
        <div style={{ fontSize: "18px", color: "#666" }}>Loading...</div>
      ) : data ? (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            marginTop: "20px",
          }}
        >
          <h3
            style={{
              textTransform: "capitalize",
              color: "#333",
              fontSize: "20px",
            }}
          >
            {data.name}
          </h3>
          <img
            src={data.sprites.front_default}
            alt={data.name}
            style={{ maxWidth: "150px", marginTop: "10px" }}
          />
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              marginTop: "10px",
              color: "#333",
            }}
          >
            <li>Height: {data.height} decimetres</li>
            <li>Weight: {data.weight} hectograms</li>
            <li>Base Experience: {data.base_experience}</li>
          </ul>
        </div>
      ) : (
        <div style={{ fontSize: "18px", color: "#666" }}>No data found</div>
      )}
    </div>
  );
};

export default DataDisplay_pok;
