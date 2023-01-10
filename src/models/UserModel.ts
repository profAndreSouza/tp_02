class User  {

    private name?: string;
    private email?: string;
    private birthdate?: Date | undefined;

    public getName(): string | undefined {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }
    public getEmail(): string | undefined {
        return this.email;
    }
    public setEmail(value: string) {
        this.email = value;
    }
    public getBirthdate(): Date | undefined {
        return this.birthdate;
    }
    public setBirthdate(value: Date) {
        this.birthdate = value;
    }

    public getUserById(id: Number): User {  // typeORM
        // comunicação com o DB
        switch (id) {
            case 0:
                this.name = 'André Souza';
                this.email = 'andre.souza@sp.senai.br';
                break;
            case 1:
                this.name = 'Caina Antunes';
                this.email = 'caina.antunes@sp.senai.br';
                break;
            case 2:
                this.name = 'Danilo Oliveira';
                this.email = 'joelsantana@sp.senai.br';
                break;
            case 3:
                this.name = 'Gabriel Claro';
                this.email = 'gabriel.csilva@sp.senai.br';
        }

        return this;

    }

    constructor(name?: string, email?: string) {
        this.name = name;
        this.email = email;
    }

}

export default User;