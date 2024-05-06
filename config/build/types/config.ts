export type BuildMode = "production" | "development";
export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
};

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port?: number;
}
