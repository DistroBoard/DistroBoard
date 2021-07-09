const distroReducer = (distros = [], action) => {

  switch (action.type) {

    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...distros, action.payload];
    case 'UPDATE':
      return distros.map((distro) => (distro._id === action.payload._id ? action.payload : distro));

    default:
      return distros;
  }
}

export default distroReducer;
