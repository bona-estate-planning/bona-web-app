import { createWriteStream } from 'fs';
import got from 'got';
import { createInterface } from 'readline';
import { promisify } from 'util';

const promptForGithubApiToken = async () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = promisify<string, string>(
    (question: string, callback: Function) => {
      rl.question(question, callback.bind(null, null));
    },
  );

  const token = await askQuestion(
    'GITHUB_API_TOKEN environment variable not set. Please enter in your GitHub personal access token: ',
  );

  rl.close();

  return token;
};

export const getGithubApiToken = async () => {
  return process.env.GITHUB_API_TOKEN || (await promptForGithubApiToken());
};

export const saveAsset = (
  url: string,
  fileName: string,
  auth: string,
  fileMode: number = 0o644,
) => {
  return new Promise((resolve, reject) => {
    const downloadStream = got.stream(url, {
      headers: {
        Accept: 'application/octet-stream',
        Authorization: `token ${auth}`,
      },
    });
    const fileWriterStream = createWriteStream(fileName, {
      mode: fileMode,
    });

    downloadStream.on('error', error => {
      reject(error);
    });

    fileWriterStream
      .on('error', error => {
        reject(error);
      })
      .on('finish', () => {
        resolve(fileName);
      });

    downloadStream.pipe(fileWriterStream);
  });
};
