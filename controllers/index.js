const tempData = (req,res) => {
    const Array = [
        {
            id: 1,
            name: "uvaiz"
        },
        {
            id: 2,
            name: "Bob"
        },
        {
            id: 3,
            name: "John"
        },
        {
            id: 4,
            name: "Dolton"
        },
    ]
    res.send(Array)
}

module.exports = {tempData}