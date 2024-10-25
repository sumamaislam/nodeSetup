export const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("enter Your age")
    }
    else if (req.query.age < 18) {
        res.send("your age is not 18+ so u can not access this web")
    }
    else if (req.query.age >= 18) {
        next()
    }

}