module.exports = {
    __resolveType(parent, args, context, info) {
        if(parent.tipoPersona === 'FISICA') 
            return "PersonaFisica"
        if(parent.tipoPersona === 'JURIDICA')
            return "PersonaJuridica"
    }
}