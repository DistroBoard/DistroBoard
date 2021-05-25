const distroReducer = (distros = [], action) => {

  switch (action.type) {

    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...distros, action.payload];

    default:
      return distros;
  }
}

export default distroReducer;
