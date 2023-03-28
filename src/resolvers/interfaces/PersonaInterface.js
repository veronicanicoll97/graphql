module.exports = {
    __resolveType(parent, args, context, info) {
        console.log("Interface resolver: ", parent)
        return "Persona"
    }
}