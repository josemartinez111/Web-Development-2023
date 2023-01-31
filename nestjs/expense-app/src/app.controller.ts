// app.controller.ts
import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
// ===============================================

@Controller("report/:type")
export class AppController {
  @Get()
  getAllReports() {
    return ["default endpoint"];
  }
  
  /** @id: `:id` is dynamic. so as long as we hit the
   * right endpoint/whatever it'll run this get->200:ok */
  @Get(":id")
  getReportByID() {
    return { ":id": "getAllIncomeReports2" };
  }
  
  @Post()
  createReport() {
    return { "new": "createReport" };
  }
  
  @Put(":id")
  updateReportByID() {
    return { "updated": "updateReportByID" };
  }
  
  @Delete(":id")
  deleteReportByID() {
    return { "deleted": "deleteReportByID" };
  }
}
