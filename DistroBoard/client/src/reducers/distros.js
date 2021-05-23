export default (distros = [], action) => {

  switch (action.type) {

    case 'FETCH_ALL':
      return distros;
    case 'CREATE':
      return distros;

    default:
      return distros;
  }
}
