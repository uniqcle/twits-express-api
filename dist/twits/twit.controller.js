"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitsRouter = void 0;
const express_1 = require("express");
const twit_service_1 = require("./twit.service");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const twitsService = new twit_service_1.TwitsService();
router.post('/twits', auth_middleware_1.authMiddleware, async (req, res) => {
    if (!req.body?.text?.length) {
        res.status(400).json({ message: 'Text is required' });
    }
    const twit = await twitsService.createTwit(req.body);
    res.status(201).json(twit);
});
exports.TwitsRouter = router;
//# sourceMappingURL=twit.controller.js.map