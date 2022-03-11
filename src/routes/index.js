import { Router } from "express";

const router = Router()

router.get('/', (request, response) => {
    return response.json({
        result: 'Serve is OK'
    })
})

export default router;
