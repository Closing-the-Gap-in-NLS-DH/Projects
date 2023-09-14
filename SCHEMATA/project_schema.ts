import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

// Set version here, validate everywhere else!
const schemaVersion = "0.1.9";

// Regular expressions
const isoCode = /^[a-z]{3}$/; // Can we do better than this?
const latLng = /^-?\d{1,3}(\.\d{1,5})?$/;

// Build list of valid keywords
const keywordsFile = Deno.readTextFileSync("KEYWORDS/KEYWORDS.json");
const keywordsObj: Record<string, string[]> = JSON.parse(keywordsFile);
export const keywords = Object.values(keywordsObj).flat();

// Make keywords list into Zod enum
const keywordsEnum: [string, ...string[]] = [keywords[0], ...keywords.slice(1)];

//
// SCHEMA
//

export const projectSchema = z
  .object({
    schema_version: z
      .literal(schemaVersion)
      .describe("Version of the project JSON schema"),
    record_metadata: z
      .object({
        uuid: z
          .string()
          .uuid()
          .describe("Universally unique identifier for the project"),
        record_created_on: z.coerce
          .date()
          .min(new Date("2020-01-01"))
          .describe("Record creation date (YYYY-MM-DD)"),
        record_created_by: z.string().describe("Name of the record's creator"),
        last_edited_on: z
          .union([z.coerce.date().min(new Date("2020-01-01")), z.literal("")])
          .describe("Date of last modification of the record (YYYY-MM-DD)"),
      })
      .strict()
      .describe("Metadata of the record file"),
    project: z
      .object({
        title: z.string().describe("Official title of the project"),
        abbr: z
          .string()
          .max(16) // Sanity check
          .describe("Abbreviation of the project title (optional)"),
        type: z
          .enum(["organization", "project"])
          .describe("Entity type (organization | project)"),
        ref: z
          .array(z.union([z.string().url(), z.literal("")]))
          .describe("List of authority file URIs"),
        date: z
          .array(
            z
              .object({
                from: z.coerce.date().min(new Date("1900-01-01")),
                to: z.union([
                  z.coerce.date().min(new Date("1900-01-01")),
                  z.literal(""),
                ]),
              })
              .strict(),
          )
          .describe("List of active periods (YYYY-MM-DD)"),
        websites: z
          .array(z.string().url())
          .describe("List of project website URLs"),
        project_desc: z
          .string()
          .max(750) // Would like to lower this further
          .describe("Short description of the project"),
        places: z
          .array(
            z
              .object({
                place_name: z
                  .object({
                    text: z.string().describe("Name of the place"),
                    ref: z
                      .array(z.string().url())
                      .describe("List of authority file URIs"),
                  })
                  .strict(),
                coordinates: z
                  .object({
                    lat: z
                      .string()
                      .regex(latLng)
                      .describe("Latitude of the place"),
                    lng: z
                      .string()
                      .regex(latLng)
                      .describe("Longitude of the place"),
                  })
                  .strict(),
              })
              .strict(),
          )
          .describe("Location(s) of the project"),
        lang: z
          .array(z.string().regex(isoCode))
          .describe(
            "List of languages used in the project's output (ISO-639-3 codes)",
          ),
        related_institutions: z
          .array(
            z
              .object({
                relation_type: z.enum(["host", "member"]),
                org_name: z
                  .object({
                    text: z.string().describe("Name of the institution"),
                    ref: z
                      .array(z.string().url())
                      .describe("List of authority file URIs"),
                  })
                  .strict(),
                websites: z
                  .array(z.string().url())
                  .describe("List of institutional website URLs"),
              })
              .strict(),
          )
          .describe(
            "Universities or research organizations which host the project",
          ),
        related_entities: z
          .array(
            z
              .object({
                relation_type: z.enum([
                  "parent",
                  "sibling",
                  "child",
                  "cooperation",
                ]),
                title: z.string(),
                uuid: z.string().uuid(),
              })
              .strict(),
          )
          .describe("Entities that are related to the project"),
        contacts: z
          .array(
            z
              .object({
                pers_name: z
                  .object({
                    text: z.string().describe("Name of the contact"),
                    ref: z
                      .array(z.string().url())
                      .describe("List of authority file URIs"),
                  })
                  .strict(),
                role: z
                  .number()
                  .int()
                  .min(0)
                  .max(3)
                  .describe(
                    "Role of the contact: (0 = Management | 1 = Employee | 2 = Student Employee | 3 = Contractor or Honorary Staff)",
                  ),
                websites: z
                  .array(z.string().url())
                  .describe(
                    "List of institutional and/or personal website URLs",
                  ),
              })
              .strict(),
          )
          .describe("Main contact(s) of the project"),
        research_data: z
          .object({
            lang: z
              .array(z.string().regex(isoCode))
              .describe(
                "List of languages of the project's research data (ISO-639-3 codes)",
              ),
            sustainability_plan: z
              .boolean()
              .nullable()
              .describe(
                "Is there a plan to ensure the sustainability and reusability of the project's research data and output?",
              ),
            publications: z
              .object({
                open_access: z
                  .number()
                  .int()
                  .min(0)
                  .max(100)
                  .describe(
                    "Approximate percentage of publications that are available open-access",
                  ),
                licensing: z
                  .array(z.string())
                  .describe("List of licenses that apply to publications"),
              })
              .strict()
              .describe(
                "Information about publication accessibility and licensing",
              ),
            data: z
              .object({
                datatypes: z
                  .array(
                    z
                      .object({
                        label: z.string().describe("Label for the datatype"),
                        stage: z.enum(["raw", "refined", "final"]),
                        licensing: z
                          .array(z.string())
                          .describe(
                            "List of licenses that apply to the datatype",
                          ),
                        open_access: z
                          .number()
                          .int()
                          .min(0)
                          .max(100)
                          .describe(
                            "Approximate percentage of this datatype available open-access",
                          ),
                      })
                      .strict(),
                  )
                  .describe(
                    "List of datatypes contained in the project's research data",
                  ),
                repositories: z
                  .array(
                    z
                      .object({
                        label: z
                          .string()
                          .describe("Label for the repository, e.g. 'GitHub'"),
                        accessibility: z
                          .enum(["private", "public"])
                          .describe(
                            "Repository accessibility (private | public)",
                          ),
                        ref: z
                          .array(z.string().url())
                          .describe("List of repository URLs (if applicable)"),
                        licensing: z
                          .array(z.string())
                          .describe(
                            "List of licenses that apply to the repository",
                          ),
                        description: z
                          .string()
                          .describe("Description of repository contents"),
                      })
                      .strict(),
                  )
                  .describe("Information about local or remote repositories"),
              })
              .strict()
              .describe("Information about research data"),
          })
          .strict()
          .describe("Information about the project's research data"),
        policies: z
          .array(
            z
              .object({
                description: z
                  .string()
                  .describe(
                    "Description of the policy, e.g. 'Research Data Policy'",
                  ),
                ref: z
                  .array(z.string().url())
                  .describe("List of URLs relevant to the policy"),
              })
              .strict(),
          )
          .describe(
            "Information about policies (e.g. RDP, RDM, OA) applicable to the project and its publications and data",
          ),
        stack: z
          .object({
            database: z
              .array(z.string())
              .describe("List of database systems in use"),
            backend: z
              .array(z.string())
              .describe("List of backend technologies in use"),
            frontend: z
              .array(z.string())
              .describe("List of frontend technologies in use"),
            languages: z
              .array(z.string())
              .describe(
                "List of programming languages (defined broadly) in use",
              ),
            tools: z
              .array(
                z
                  .object({
                    label: z.string().describe("Name of the tool"),
                    self_developed: z
                      .boolean()
                      .describe("Is the tool developed within the project?"),
                    ref: z
                      .array(z.string().url())
                      .describe("List of URLs for the tool and/or codebase"),
                    description: z
                      .string()
                      .describe(
                        "Description of the tool's purpose in the context of the project",
                      ),
                  })
                  .strict(),
              )
              .describe("List of tools that are used in the project"),
          })
          .strict()
          .describe("Information about the tech stack used in the project"),
        keywords: z
          .array(
            z
              .enum(keywordsEnum)
              .describe(
                "Use lowercase letters, with underscore as a separator where needed",
              ),
          )
          .describe("List of keywords to describe the project"),
        comment: z
          .string()
          .describe("Any commentary that doesn't fit elsewhere in the schema"),
      })
      .strict()
      .describe("Information about the project"),
  })
  .strict()
  .describe(
    "Project that deals in some way with the digital humanities, research data management, non-Latin scripts, or infrastructure",
  );
