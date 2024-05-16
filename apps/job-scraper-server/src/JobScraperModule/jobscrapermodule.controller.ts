import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { JobScraperModuleService } from "./jobscrapermodule.service";

@swagger.ApiTags("jobScraperModules")
@common.Controller("jobScraperModules")
export class JobScraperModuleController {
  constructor(protected readonly service: JobScraperModuleService) {}

  @common.Get("/:id/fetch-jobs")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchJobs(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchJobs(body);
      }

  @common.Get("/:id/fetch-jobs-corrected")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchJobsCorrected(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchJobsCorrected(body);
      }

  @common.Post("/scrape-jobs")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScrapeJobs(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ScrapeJobs(body);
      }
}
