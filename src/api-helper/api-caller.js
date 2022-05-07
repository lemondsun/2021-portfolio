const { default: axios } = require('axios');

const getInstagramData = async () => {
  let res = await axios.get('http://localhost:3000/data')
  console.log(res.data.data, 'there')
    // .then(res => {
    //   console.log(`statusCode: ${res.status}`);
    //   return res.data.data
    // })
    // .catch(error => {
    //   console.error(error);
    // })
  return res.data.data
};
export default getInstagramData