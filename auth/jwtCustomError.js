module.exports = (errorMessage) => {
  switch (errorMessage) {
    case 'jwt must be provided':
      return 'Token not found';
    
    case 'jwt expired':
      return 'Expired or invalid token';
    
    case 'jwt malformed':
      return 'Expired or invalid token';
  
    default:
      break;
  }
};
