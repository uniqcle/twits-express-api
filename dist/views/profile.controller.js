"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileView = void 0;
const profileView = (req, res) => {
    res.render("profile", {
        user: {
            name: "Andrey",
            age: 42,
        },
    });
};
exports.profileView = profileView;
//# sourceMappingURL=profile.controller.js.map