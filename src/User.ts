import { Repo } from "./Repo";

export class User {
  name: string = "";
  location: string = "";
  repoCount: number = 0;
  followerCount: number = 0;
  repos?: Repo[] = [];

  constructor(userRepo: any) {
    this.name = userRepo.name;
    this.location = userRepo.location;
    this.repoCount = userRepo.public_repos;
    this.followerCount = userRepo.followers;
  }
}
