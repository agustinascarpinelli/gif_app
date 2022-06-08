import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifCollection } from "./components/GifCollection";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Welcome']);

  return (
    <>
      <h2 className="title"> Gif Expert App</h2>
      <h3 className="secTitle">Search a gif:</h3>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => {
  
           return  <GifCollection key={category} category={category} />;
          })}
        
      </ol>
    </>
  );
};
