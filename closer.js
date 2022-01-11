"use strict";

const house = () => {
  let entires = 0;

  return (enterHouse = () => {
    entires++;
    console.log(`House Entry: ${entires}`);
  });
};

const key = house();
key();
key();
key();
