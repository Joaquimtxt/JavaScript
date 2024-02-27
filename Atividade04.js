var matriz = [
  [6, 7, 8],
  [7, 8, 9],
  [9, 10, 11],
];
console.table(matriz);

console.log(
  "Diagonal (0,0) - (1,1) - (2,2): " +
    matriz[0][0] +
    " " +
    matriz[1][1] +
    " " +
    matriz[2][2]
);

console.log("Diagonal (2,2) - (1,1) - (0,0): " +
matriz[2][2] +
" " +
matriz[1][1] +
" " +
matriz[0][0]
);

console.log(
    "Diagonal (2,0) - (1,2) - (2,0): " +
      matriz[2][0] +
      " " +
      matriz[1][1] +
      " " +
      matriz[0][2]
  );

  console.log(
    "Diagonal (2,0) - (1,2) - (2,0): " +
      matriz[0][2] +
      " " +
      matriz[1][1] +
      " " +
      matriz[2][0]
  );

  
