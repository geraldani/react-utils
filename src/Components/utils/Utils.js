// retorna el alto total de un elemento del DOM
const totalHeight = (elem) => {
  const styles = window.getComputedStyle(elem) //obtengo los estilos del elemento sticky (para sumar los margenes)
  console.log('margintop ', styles.marginTop)
  return (elem.offsetHeight + parseFloat(styles.marginBottom) + parseFloat(styles.marginTop))
  //al alto del elemento que es el offsetHeigh (incluye los bordes) le sumo los margenes que pueda tener
  // return (elem.offsetHeight + parseFloat(styles.marginBottom) + top - (top > 7 ? 10 : 0))
}

const getRandomColor = () => "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16))

/*const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}*/

export { totalHeight, getRandomColor }
