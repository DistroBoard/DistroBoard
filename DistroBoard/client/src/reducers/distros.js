export default (distros = [], action) => {

  switch (action.type) {

    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return distros;

    default:
      return distros;
  }
}
