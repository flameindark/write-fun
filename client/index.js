import axios from 'axios'

axios.post('http://localhost:4040/api/users', {
    username: 'flameindark',
    mobileNumber: '13666666666'
}).then(res => {
    document.write(JSON.stringify(res));
}).catch(res => {
    console.error(res)
})