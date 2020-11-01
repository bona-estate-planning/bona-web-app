import { Octokit } from '@octokit/rest';
import { exec } from 'child_process';
import { platform } from 'os';
import { join } from 'path';
import { promisify } from 'util';
import { getGithubApiToken, saveAsset } from './github';

const p = platform();
const platformString = p.charAt(0).toUpperCase() + p.slice(1);

const BUF_OWNER = 'bufbuild';
const BUF_REPO = 'buf';
const BUF_VERSION = 'v0.29.0';
const BUF_ARTIFACT_NAME = `buf-${platformString}-x86_64`;
const BUF_BIN_FILENAME = `buf`;

const main = async () => {
  const auth = await getGithubApiToken();
  const client = new Octokit({
    auth,
  });
  const {
    data: { id },
  } = await client.repos.getReleaseByTag({
    owner: BUF_OWNER,
    repo: BUF_REPO,
    tag: BUF_VERSION,
  });

  const { data: assets } = await client.repos.listReleaseAssets({
    owner: BUF_OWNER,
    repo: BUF_REPO,
    tag: BUF_VERSION,
    release_id: id,
  });

  const bufBinAsset = assets.find(asset => asset.name === BUF_ARTIFACT_NAME);

  const { stdout: binPath } = await promisify(exec)('npm bin');
  await saveAsset(
    bufBinAsset.url,
    join(binPath.trim(), BUF_BIN_FILENAME),
    auth,
    0o755,
  );
  return;
};

if (require.main === module) {
  main().catch(err => {
    console.log(err);
    process.exit(1);
  });
}
