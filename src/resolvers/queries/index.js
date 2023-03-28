module.exports = {
    personas: async (parent, args, context, info) => {

        const personaEncontrada = context.data.persona.find(
            item => item.idPersona === args.id
        )
        console.log("Persona: ", personaEncontrada)
        let tipo
        if(personaEncontrada.tipoPersona === "FISICA") 
            tipo = context.data.fisica.find(
                item => item.idPersona === personaEncontrada.idPersona
            )
        if(personaEncontrada.tipoPersona === "JURIDICA")
            tipo = context.data.juridica.find(
                item => item.idPersona === personaEncontrada.idPersona
            )
        tipo.tipoPersona = personaEncontrada.tipoPersona
        console.log('Tipo: ', tipo)
        
        console.log({ ... personaEncontrada, tipo })
        return { ... personaEncontrada, tipo }
    }
}