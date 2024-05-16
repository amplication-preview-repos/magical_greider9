import * as graphql from "@nestjs/graphql";
import { JobScraperModuleService } from "./jobscrapermodule.service";

export class JobScraperModuleResolver {
  constructor(protected readonly service: JobScraperModuleService) {}

  @graphql.Query(() => String)
  async FetchJobs(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchJobs(args);
  }

  @graphql.Query(() => String)
  async FetchJobsCorrected(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchJobsCorrected(args);
  }

  @graphql.Mutation(() => String)
  async ScrapeJobs(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ScrapeJobs(args);
  }
}
