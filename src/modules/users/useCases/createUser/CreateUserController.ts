import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user = this.createUserUseCase.execute({
        name: request.body.name,
        email: request.body.email,
      });
      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json({
        error: err.message
      });
    }
  }
}

export { CreateUserController };
