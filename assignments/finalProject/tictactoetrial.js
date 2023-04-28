function winCon() {
  cube.forEach((cube) => {
    cube.addEventListener("click", () => {
      //to check the rows
      for (let i = 0; i < 9; i + 3) {
        if (
          cube[i].innerHTML !== "" &&
          cube[i].innerHTML === cube[i + 1].innerHTML &&
          cube[i + 1].innerHTML === cube[i + 2].innerHTML
        ) {
          return true;
        }
      }
      // to check the column
      for (let i = 0; i < 3; i++)
        if (
          cube[i].innerHTML !== "" &&
          cube[i].innerHTML === cube[i + 3].innerHTML &&
          cube[i + 3].innerHTML === cube[i + 6].innerHTML
        ) {
          return true;
        }
      // to check the diagonals
      if (
        cube[0].innerHTML !== "" &&
        cube[0].innerHTML === cube[4].innerHTML &&
        cube[4].innerHTML === cube[8].innerHTML
      ) {
        return true;
      }
      if (
        cube[2].innerHTML !== "" &&
        cube[2].innerHTML === cube[4].innerHTML &&
        cube[4].innerHTML === cube[6].innerHTML
      ) {
        return true;
      }
      return false;
    });
  });
}
