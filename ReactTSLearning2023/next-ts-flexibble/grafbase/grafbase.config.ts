// FILE: grafbase/grafbase.config.ts
// _______________________________________________

import { g, auth, config } from "@grafbase/sdk";
import { Model } from "@grafbase/sdk/dist/src/model";
// _______________________________________________

const User: Model = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarURL: g.url(),
  description: g.string().optional(),
  githubURL: g.url().optional(),
  linkedInURL: g.url().optional(),
  projects: g.relation(() => Project).list().optional()
});
// _______________________________________________

const Project: Model = g.model("Project", {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteURL: g.url(),
  githubURL: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User)
});
// _______________________________________________

export default config({
  schema: g
});
// _______________________________________________