const IncomeSchema = require('../models/IncomeModel');

exports.addIncome = async (req, res) => { 
    const {title, amount, date, category, description} = req.body
    
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validation
        if (!title || !amount || !date || !category || !description) {
            return res.status(400).json({messahe: 'Please fill all the fields'})
        }
        if (amount<=0 || !amount === 'number') {
            return res.status(400).json({messahe: 'Please fill all the fields'})
        }
        await income.save()
        res.status(200).json({message: 'Income added successfully'})
    } catch (error) {
        res.status(500).json({message: 'Server error'})
    }

    console.log(income);
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server error'})
    }
}

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    console.log(params);
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server error'})
        })
};