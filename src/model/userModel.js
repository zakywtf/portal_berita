import Models from '../classes/classModel';
import sch from '../schema/users';

class userModel extends Models{
    constructor(){
        super(sch)
        this.level=10
    }

    async getAll(){
        var udata = this.udata.payload
        console.log({udata:this.udata.payload});
        
        // if(udata.role != this.role)throw Error('You do not have access!')
        return await this.model.find({},this.getProjection())
    }

    getProjection(){
        return 'username first_name last_name address telp email role create_at'
    }
}

module.exports=userModel