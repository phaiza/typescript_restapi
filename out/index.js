"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var _ = __importStar(require("lodash"));
var svc = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log("Error: Please enter a username");
}
else {
    var username_1 = process.argv[2];
    svc.getUserInfo(username_1, function (user) {
        svc.getRepos(username_1, function (repo) {
            var sortRepo = _.sortBy(repo, ["size * -1"]);
            var filteredRepo = _.take(repo, 3);
            user.repos = filteredRepo;
            console.log(user);
        });
    });
}
