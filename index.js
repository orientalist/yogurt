const axios = require('axios');

function generateRandomID() {
    return Math.floor(Math.random() * 90000000) + 10000000; // 產生 10000000 到 99999999 之間的數字
}

exports.handler = async (event) => {
    let id = generateRandomID();

    let SVID = '';
    const sv_data = {
        svid: SVID,
        ssns: [{ id: "0", value: id }]
    };
    const headers = {
        'Content-Type': 'application/json',
    };
    
    const url = '';

    const resp = await axios.post(url, sv_data, { headers });

    const response = {
        statusCode: 302,
        headers: {
            Location: resp.data.data.url
        }
    };
    return response;
};