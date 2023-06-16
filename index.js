// Write your solution in this file!
const employee = {
    name: "Peter Pan",
    streetAddress: "Never Land"
}


function updateEmployeeWithKeyAndValue(object, key, value){
  return {...object, [key] : value}

}console.log(updateEmployeeWithKeyAndValue(employee, "Santa", 4512))

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value
    return object
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "antman", 254)
console.log(employee);

function deleteFromEmployeeByKey(object, key){
    const newObject = {
        ...object
    }
    delete newObject[key]

    return newObject
}


function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return object
}
