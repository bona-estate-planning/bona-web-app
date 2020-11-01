import { Octokit } from '@octokit/rest';
import { exec } from 'child_process';
import { platform } from 'os';
import { join } from 'path';
import { promisify } from 'util';
import { getGithubApiToken, saveAsset } from './github';

const GRPC_WEB_OWNER = 'grpc';
const GRPC_WEB_REPO = 'grpc-web';
const GRPC_WEB_VERSION = '1.2.1';
const GRPC_WEB_ARTIFACT_NAME = `protoc-gen-grpc-web-1.2.1-${platform()}-x86_64`;
const GRPC_WEB_BIN_FILENAME = 'protoc-gen-grpc-web';

const main = async () => {
  const auth = await getGithubApiToken();
  const client = new Octokit({
    auth,
  });
  const {
    data: { id },
  } = await client.repos.getReleaseByTag({
    owner: GRPC_WEB_OWNER,
    repo: GRPC_WEB_REPO,
    tag: GRPC_WEB_VERSION,
  });

  const { data: assets } = await client.repos.listReleaseAssets({
    owner: GRPC_WEB_OWNER,
    repo: GRPC_WEB_REPO,
    tag: GRPC_WEB_VERSION,
    release_id: id,
  });

  const bufBinAsset = assets.find(
    asset => asset.name === GRPC_WEB_ARTIFACT_NAME,
  );

  const { stdout: binPath } = await promisify(exec)('npm bin');
  await saveAsset(
    bufBinAsset.url,
    join(binPath.trim(), GRPC_WEB_BIN_FILENAME),
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
