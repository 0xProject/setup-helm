import * as tc from '@actions/tool-cache';

export interface Options {
  version: string;
  checksum: string;
}

export async function install(options: Options): Promise<number> {
  const path = tc.downloadTool(url);
  const extracted = tc.extract7z(path);

  return await exec.exec('go', args);
}
