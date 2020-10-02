function formatData({data=[],msg='success',status=200}){
    if(status === 400){
        msg = 'fail'
    }
    const send = {
        data,
        msg,
        status
    }
    return send
}

module.exports = {
    formatData
}