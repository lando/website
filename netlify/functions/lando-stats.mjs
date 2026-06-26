const cacheControl = 'public, durable, max-age=86400, stale-while-revalidate=604800';
const githubApi = 'https://api.github.com';
const githubHeaders = {
  'Accept': 'application/vnd.github+json',
  'User-Agent': 'lando-website-stats',
  'X-GitHub-Api-Version': '2022-11-28',
};

if (process.env.GITHUB_TOKEN) {
  githubHeaders.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const jsonHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
};

const requestJson = async url => {
  const response = await globalThis.fetch(url, {headers: githubHeaders});

  if (!response.ok) {
    throw new Error(`GitHub request failed with ${response.status}`);
  }

  return response.json();
};

const getSearchCount = async query => {
  const url = `${githubApi}/search/issues?q=${encodeURIComponent(query)}&per_page=1`;
  const data = await requestJson(url);
  return data.total_count;
};

const getLatestCoreRelease = async () => {
  const data = await requestJson(`${githubApi}/repos/lando/core/releases/latest`);

  return {
    name: data.name || data.tag_name,
    tag: data.tag_name,
    url: data.html_url,
    publishedAt: data.published_at,
  };
};

export const handler = async () => {
  const year = new Date().getUTCFullYear();
  const since = `${year}-01-01`;

  try {
    const [mergedPullRequests, closedIssues, latestRelease] = await Promise.all([
      getSearchCount(`org:lando is:pr is:merged merged:>=${since}`),
      getSearchCount(`org:lando is:issue is:closed closed:>=${since}`),
      getLatestCoreRelease(),
    ]);

    return {
      statusCode: 200,
      headers: {
        ...jsonHeaders,
        'Netlify-CDN-Cache-Control': cacheControl,
      },
      body: JSON.stringify({
        updatedAt: new Date().toISOString(),
        year,
        since: {
          date: since,
          label: `Jan 1, ${year}`,
        },
        stats: {
          mergedPullRequests,
          closedIssues,
          latestRelease,
        },
      }),
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: {
        ...jsonHeaders,
        'Cache-Control': 'no-store',
      },
      body: JSON.stringify({
        error: 'Unable to load Lando GitHub stats.',
      }),
    };
  }
};
