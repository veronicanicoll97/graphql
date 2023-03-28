module.exports = {
    __resolveType(persona, args, context, info) {
        console.log("Resolver Union: ", persona)
        if(persona.tipoPersona === "FISICA") {
            return "PersonaFisica"
        }
        else if(persona.tipoPersona === "JURIDICA"){
            return "PersonaJuridica"
        }

        return null
    }
}
