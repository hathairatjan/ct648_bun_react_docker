import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

// Define the styled component for the background
const BackgroundWrapper = styled.div`
  position: fixed; /* ใช้ fixed เพื่อให้พื้นหลังไม่เลื่อนไปกับเนื้อหา */
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: -1; /* ให้พื้นหลังอยู่ด้านหลังของเนื้อหา */
  // background-color: #87ceeb; /* Sky blue background */
  background-image: url("https://i.ytimg.com/vi/ekFELSnhqD8/maxresdefault.jpg"); /* เปลี่ยนเป็น URL ของภาพพื้นหลังที่ต้องการ */
  background-size: cover; /* ทำให้ภาพพื้นหลังครอบคลุมเต็มพื้นที่ */
  background-position: center; /* จัดตำแหน่งภาพพื้นหลังให้อยู่ตรงกลาง */
  background-repeat: no-repeat; /* ป้องกันการซ้ำของภาพพื้นหลัง */
`;

// Define the styled component for each Pokémon image
const PokemonImage = styled(animated.img)`
  position: absolute;
  width: 150px;
  height: auto;
  animation: movePokemon 20s linear infinite;

  @keyframes movePokemon {
    0% {
      transform: translateX(-150px);
    }
    50% {
      transform: translateX(calc(100vw + 150px));
    }
    100% {
      transform: translateX(-150px);
    }
  }
`;

// Define the React component
const PokemonBackground: React.FC = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  // List of Pokémon images (30 Pokémon)
  const pokemons = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png", // Bulbasaur
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png", // Charmander
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png", // Squirtle
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", // Pikachu
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png", // Jigglypuff
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png", // Machop
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png", // Gengar
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png", // Eevee
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png", // Mewtwo
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png", // Chikorita
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png", // Charmander
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png", // Charizard
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png", // Blastoise
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png", // Caterpie
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png", // Butterfree
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png", // Beedrill
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png", // Pidgey
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png", // Pidgeot
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png", // Raticate
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png", // Fearow
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", // Pikachu
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png", // Sandshrew
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png", // Nidoran
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png", // Nidoqueen
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png", // Nidoking
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png", // Nidoking
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png", // Clefable
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png", // Ninetales
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png", // Wigglytuff
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png", // Zubat
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png", // Goldbat
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png", // Diglett
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png", // Dugtrio
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png", // Paras
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png", // Parasect
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png", // Venonat
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png", // Venomoth
  ];

  return (
    <BackgroundWrapper>
      {pokemons.map((src, index) => (
        <PokemonImage
          key={index}
          style={{
            ...springProps,
            animationDelay: `${Math.random() * 10}s`, // Random delay for each Pokémon
            top: `${Math.random() * 100}vh`, // Random vertical position
            left: `${Math.random() * 100}vw`, // Random horizontal position
            animationDuration: `${10 + Math.random() * 10}s`, // Random animation duration
          }}
          src={src}
          alt={`Pokémon ${index}`}
        />
      ))}
    </BackgroundWrapper>
  );
};

export default PokemonBackground;
