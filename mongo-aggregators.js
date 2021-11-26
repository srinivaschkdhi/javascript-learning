db.persons.aggregate([{
    $match: {
        tags: {
            $size: 3
        }
    }
}])

db.persons.find({
    tags: {
        $size: 3
    }
})

//$group

db.persons.aggregate([{
        $group: {
            _id: "$age"
        }
    },
    {}
])

db.persons.aggregate([{
    $group: {
        _id: "$company.location.country0"
    }
}])


db.persons.aggregate([{
    $group: {
        _id: {
            age: "$age",
            gender: "$gender"
        }
    }
}])

db.persons.aggregate([{
        $match: {
            gender: "female"
        }
    },
    {
        $group: {
            _id: {
                eyeColor: "$eyeColor",
                age: "$age",
                gender: "$gender"
            }
        }
    }
])

db.persons.aggregate([{
        $group: {
            _id: {
                age: "$age",
                eyeColor: "$eyeColor"
            }
        }
    },
    {
        $match: {
            "_id.age": {
                $gt: 30
            }
        }
    }
])

db.persons.aggregate([{
    $count: "total"
}])
// {"total" : 1000}

db.persons.aggregate([]).toArray().length

db.persons.aggregate([]).itcount()

db.persons.aggregate([{
        $group: {
            _id: "$company.location.country"
        }
    },
    {
        $count: "countriesCount"
    }
])


db.persons.aggregate([{
    $sort: {
        name: 1
    }
}])

db.persons.aggregate([{
    $sort: {
        age: -1,
        gender: -1,
        eyeColor: -1
    }
}])


db.persons.aggregate([{
        $group: {
            _id: "$favoriteFruit"
        }
    },
    {
        $sort: {
            _id: 1
        }
    }
])
