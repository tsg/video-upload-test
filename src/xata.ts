// Generated by Xata Codegen 0.26.7. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  { name: "video", columns: [{ name: "video", type: "file" }] },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Video = InferredTypes["video"];
export type VideoRecord = Video & XataRecord;

export type DatabaseSchema = {
  video: VideoRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://tudor-s-workspace-3mr7hc.us-east-1.xata.sh/db/videos",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
