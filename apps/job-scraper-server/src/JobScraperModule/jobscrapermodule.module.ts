import { Module } from "@nestjs/common";
import { JobScraperModuleService } from "./jobscrapermodule.service";
import { JobScraperModuleController } from "./jobscrapermodule.controller";
import { JobScraperModuleResolver } from "./jobscrapermodule.resolver";

@Module({
  controllers: [JobScraperModuleController],
  providers: [JobScraperModuleService, JobScraperModuleResolver],
  exports: [JobScraperModuleService],
})
export class JobScraperModuleModule {}
