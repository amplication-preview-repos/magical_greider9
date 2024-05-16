import { Injectable } from "@nestjs/common";

@Injectable()
export class JobScraperModuleService {
  constructor() {}
  async FetchJobs(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FetchJobsCorrected(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ScrapeJobs(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
