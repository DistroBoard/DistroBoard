const distroReducer = (distros = [], action) => {

  switch (action.type) {

    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...distros, action.payload];
    case 'UPDATE':
      return distros.map((distro) => (distro._id === action.payload._id ? action.payload : distro));
    case 'DELETE':
      return distros.filter((distro) => distro._id !== action.payload);

    default:
      return distros;
  }
}

export default distroReducer;
