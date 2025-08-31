import { Router } from "express"

import { RefundsController } from "@/controllers/refunds-controller"
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization"


const refundsRoutes = Router()
const refundsController = new RefundsController()

// Rotas públicas.
refundsRoutes.post(
  "/",
  verifyUserAuthorization(["employee"]),
  refundsController.create
)

export { refundsRoutes }