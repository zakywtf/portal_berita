import {controller} from '../classes/classController';
import m from '../model/userModel'
import {getSession} from '../lib/sessionHandler';
import handleRequest from '../lib/ctrlHandler'
import {changePass} from '../lib/updatePassword';
import {deleteSession} from '../lib/sessionHandler';

let model = new m()
let rtr = controller(model)

rtr.get('/check_online/:id',async(req,res)=>{
    handleRequest(req, res, async (body)=>{
        var {id} = req.params
        return await getSession(id);
    })
})

rtr.post('/change_pass',async(req, res)=>{
    handleRequest(req, res, async (body)=>{
        const udata = res.locals.udata.payload
        await changePass(body, udata)
        return true
    })
})

rtr.post('/logout',async(req, res)=>{
    handleRequest(req, res, async (body)=>{
        const udata = res.locals.udata.payload
        await deleteSession(udata)
        return true
    })
})

rtr.get('/pagination/:level/:page/:perPage',async(req,res)=>{
    handleRequest(req, res, async (body)=>{
        const udata = res.locals.udata.payload
        const {page, perPage, level}=req.params;
        if(udata.level>5){
            const role = (level == "admin")?10:5
            return await model.paging(perPage, (((page-1) * perPage)), {level:role}, {createdAt:-1});
        }else{
            throw new Error("Access denied!")
        }
    })
})

module.exports = rtr