
const data=require('../model/data');
const getdata=async (req,res)=>{
    try {
        const userdata=await data.find({});
        res.status(201).json(userdata);
    } catch (error) {
        res.status(500).json({msg:"Document not get"})
    }
}

const postdata=async (req,res)=>{
    try {
        console.log(req.body);
        const userdata=await data.create(req.body);
        res.status(201).json({userdata});
    } catch (error) {
        res.status(500).json({msg:"not given"});
    }
}

module.exports={getdata,postdata};
