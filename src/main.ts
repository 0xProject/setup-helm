import * as helm from './helm';
import * as core from '@actions/core';

export async function run() {
  const options: helm.Options = {
    version: core.getInput('version')
  };

  if (options.version === '') {
    throw new Error('missing version');
  }

  await helm.install(options);
}
