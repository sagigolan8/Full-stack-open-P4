const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

test('should check that invalid users are not created and returns suitable status', async() => {
    await api.post('/api/users').send({
        name:'sahchar',
        username:'sahchcha'
    }).expect(403)
    await api.post('/api/users').send({
        name:'sahchar',
        password:'21e3qwdqwd'
    }).expect(403)
    await api.post('/api/users').send({
        name:'sahchar',
    }).expect(403)
    await api.post('/api/users').send({
        name:'sahchar',
        password:'21e3qwdqwd',
        username:'ba'
    }).expect(400)
    await api.post('/api/users').send({
        name:'sahchar',
        password:'21',
        username:'babaycry'
    }).expect(401)
})
