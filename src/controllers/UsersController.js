class UsersController {
    constructor(userCreateService) {
        this.userCreateService = userCreateService
    }
    
    async create(request, response) {
        const { name, email, password } = request.body

        try {
            await this.userCreateService.execute({name, email, password})
        } catch (error) {
            response.status(500).json({error: "Algo errado aconteceu. Por favor, tente novamente mais tarde."})
        }

        return response.status(201).end()
    }
}

module.exports = UsersController