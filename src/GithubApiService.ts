import * as request from "request";
import { User } from "./User";
import { Repo } from "./Repo";

const OPTIONS: any = {
  headers: {
    "User-Agent": "request"
  },
  json: true
};

export class GithubApiService {
  getUserInfo(userName: string, callbackFnc: (user: User) => any) {
    request.get(
      "https://api.github.com/users/" + userName,
      OPTIONS,
      (error: any, response: any, body: any) => {
        let user = new User(body);
        callbackFnc(user);
      }
    );
  }
  getRepos(userName: string, callbackFnc: (repo: Repo[]) => any) {
    request.get(
      "https://api.github.com/users/" + userName + "/repos",
      OPTIONS,
      (error: any, response: any, body: any) => {
        callbackFnc(body.map((repo: any) => new Repo(repo)));
      }
    );
  }
}
