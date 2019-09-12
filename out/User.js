"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userRepo) {
        this.name = "";
        this.location = "";
        this.repoCount = 0;
        this.followerCount = 0;
        this.repos = [];
        this.name = userRepo.name;
        this.location = userRepo.location;
        this.repoCount = userRepo.public_repos;
        this.followerCount = userRepo.followers;
    }
    return User;
}());
exports.User = User;
