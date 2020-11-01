import { Octokit } from '@octokit/rest';
import { createInterface } from 'readline';
import { promisify } from 'util';
import got from 'got';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { exec } from 'child_process';
import { getGithubApiToken, saveAsset } from './github';

const BONA_PROTO_OWNER = 'bona-estate-planning';
const BONA_PROTO_REPO = 'proto';
const BONA_PROTO_VERSION = 'v0.0.1';
const BONA_PROTO_ARTIFACT_NAME = 'bona.bin';

const main = async () => {
  const auth = await getGithubApiToken();
  const client = new Octokit({
    auth,
  });
  const {
    data: { id },
  } = await client.repos.getReleaseByTag({
    owner: BONA_PROTO_OWNER,
    repo: BONA_PROTO_REPO,
    tag: BONA_PROTO_VERSION,
  });

  const { data: assets } = await client.repos.listReleaseAssets({
    owner: BONA_PROTO_OWNER,
    repo: BONA_PROTO_REPO,
    tag: BONA_PROTO_VERSION,
    release_id: id,
  });

  const bonaBinAsset = assets.find(
    asset => asset.name === BONA_PROTO_ARTIFACT_NAME,
  );

  const { stdout: binPath } = await promisify(exec)('npm bin');
  await saveAsset(
    bonaBinAsset.url,
    join(binPath.trim(), bonaBinAsset.name),
    auth,
  );
  return;
};

if (require.main === module) {
  main().catch(err => {
    console.log(err);
    process.exit(1);
  });
}
