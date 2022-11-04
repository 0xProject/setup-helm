import * as tc from '@actions/tool-cache';
import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as filepath from 'path';

export interface Options {
  version: string;
}

export async function install(options: Options): Promise<number> {
  const path = await tc.downloadTool(
    `https://get.helm.sh/helm-v${options.version}-linux-amd64.tar.gz`
  );
  const extracted = await tc.extract7z(path);

  core.addPath(filepath.join(extracted));

  return exec.exec('helm', ['version']);
}
