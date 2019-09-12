import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./Repo";
import * as _ from "lodash";

let svc = new GithubApiService();
if (process.argv.length < 3) {
  console.log("Error: Please enter a username");
} else {
  let username = process.argv[2];
  svc.getUserInfo(username, (user: User) => {
    svc.getRepos(username, (repo: Repo[]) => {
      let sortRepo = _.sortBy(repo, ["size * -1"]);
      let filteredRepo = _.take(repo, 3);
      user.repos = filteredRepo;

      console.log(user);
    });
  });
}
