import * as chai from 'chai';
const expect = chai.expect;
import chaiHttp from "chai-http";
import app from '../index.js'
import faker from 'faker'

const c=chai.use(chaiHttp)

describe('GET /api/info', ()=>{
    it('should GET all info', (done)=>{
        c.request(app).get('/api/info').end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).be.a('array')
            expect(res.body).not.have.lengthOf(0)
            done()
        })
    })
})


describe('GET /api/info', ()=>{
    it('should GET all info', (done)=>{
        let test={
            title: faker.Lorem.words(1)[0],
            descrip: faker.Lorem.paragraph(1)[0],
            imag: faker.Image.animals(),
            leftColor: faker.Internet.color(),
            rightColor: faker.Internet.color()
        } 
        console.log(test)
        c.request(app).post('/api/info').send(test).end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).be.a('object')
            expect(res.body).not.have.property('test')
        })
        done()
    })
})

describe('GET /api/info/:id', ()=>{
    it('should GET all info for id', (done)=>{
        c.request(app).get('/api/info/4')
        .end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.have.property('respond')
            expect(res.body.respond).to.be.a('array')
            expect(res.body.respond[0]).to.have.property('id_bob',4)
        })
        done()
    })
})