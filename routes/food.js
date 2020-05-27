const router = require('express').Router();
let Food = require('../models/food.model')

router.route('/').get((req,res) =>{

    Food.find().sort({Price:1}).limit(6)
    .then(food => res.json(food))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) =>{
    const VenueName = req.body.VenueName;
    const FoodName = req.body.FoodName;
    const Piclink = req.body.Piclink ;
    const Description = req.body.Description;
    const Price = req.body.Price;
    const style = false;
     const newFood = new Food({
         VenueName,
         FoodName,
         Piclink,
         Price,
         Description,
         style,
     });

     newFood.save()
     .then(() => res.json('Food added:'))
     .catch( err => res.status(400).json('Error' + err));

})

router.route('/:id').get((req,res) =>{
    Food.findById(req.params.id)
    .then(food => res.json(food))
    .catch(err => res.status(400).json('Error:' + err))
 })
 
 router.route('/:id').delete((req,res)=>{
     Food.findByIdAndDelete(req.params.id)
     .then(()=> res.json('food deleted'))
     .catch(err => res.status(400).json('Error' + err))
 })


 router.route('/update/:id').post((req,res)=>{
    Food.findById(req.params.id)
    .then(food => {
        food.VenueName = req.body.VenueName;
        food.FoodName = req.body.FoodName;
        food.Piclink =  req.body.Piclink;
        food.Price = req.body.Price;
        food.style = req.body.style
        
        food.save()
        .then(()  => res.json('food updated'))
        .catch(err => res.status(400).json('Error' + err))
    })
    .catch(err => res.status(400).json('Error' + err))
})
module.exports = router;