function formatData({ data = [], msg = 'success', code = 200 }) {
    if (code === 400) {
        msg = 'fail'
    }
    const send = {
        data,
        msg,
        code
    }
    return send
}

module.exports = {
    formatData
}