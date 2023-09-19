import Joi from 'joi'
import { User } from '../protocols/user-protocol'

//Generics
const usersSchema = Joi.object<User>({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
})