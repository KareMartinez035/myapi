import chai,{expect} from "chai";
const expect =chai.espect;
import chaiHttp from "chai-http";
import app from '../index.js'
//import faker from 'faker'

const c=chai.use(chaiHttp)

describe('GET /api/info', ()=>{
    it('should GET all info', (done)=>{
        chai.request(app)
        .get('/api/info')
        .end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).be.a('array')
            expect(res.body).not.have.lengthOf(0)
            done()
        })
    })
})